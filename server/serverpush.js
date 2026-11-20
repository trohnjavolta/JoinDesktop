const os = require('os');
const fetch = require('node-fetch');
const Store = require('./store.js');
const { PushReceiver } = require('./vendor/pushreceiver.js');
const { GoogleAuth } = require('./googleauth.js');

const JOIN_BASE_URL = "https://joinjoaomgcd.appspot.com/_ah/api/";
const VAPID_KEY = "BL7X8ZCBR05TrKnPcbWfix8ZNqHtfpbYF6f37ThsLKJsUc-l06KVn4QkkCOwzRKDQMb2gm9LPv-UD4gkcvhBUlQ";
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBeI64VSoGCs20sXOwRG_kuDirugdScDIk",
    authDomain: "join-external-gcm.firebaseapp.com",
    databaseURL: "https://join-external-gcm.firebaseio.com",
    projectId: "join-external-gcm",
    storageBucket: "join-external-gcm.appspot.com",
    messagingSenderId: "737484412860",
    appId: "1:737484412860:web:5ddce9f690528241167db9"
};
const DEVICE_TYPE_BROWSER = 6;
const MAX_PERSISTENT_IDS = 200;

const store = new Store({
    configName: 'push',
    defaults: {}
});

const postRegistration = async (endpoint, body) => {
    const token = await GoogleAuth.accessToken;
    if(!token) throw new Error("Not signed in");

    const response = await fetch(`${JOIN_BASE_URL}registration/v1/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(body)
    });
    return await response.json();
}

/**
 * Registers this desktop app as its own Join device and receives pushes
 * directly from Firebase Cloud Messaging, so no browser with push support is needed.
 */
class ServerPush {
    constructor({ onMessage, onDeviceIdChanged }) {
        this.onMessage = onMessage;
        this.onDeviceIdChanged = onDeviceIdChanged;
        this.multis = {};
    }
    static get deviceId() {
        return store.get("deviceId") || null;
    }
    get deviceName() {
        return `Join Desktop (${os.hostname()})`;
    }
    async stop() {
        if (!this.receiver) return;

        try {
            this.receiver.destroy();
        } catch (error) {
            console.log("Error stopping push receiver", error);
        }
        this.receiver = null;
    }
    async start({ forceNewRegistration = false } = {}) {
        if (!GoogleAuth.authData.refresh_token) {
            console.log("Not signed in. Not starting push receiver.");
            return;
        }
        await this.stop();
        if (forceNewRegistration) {
            store.set("registeredToken", null);
        }
        const receiver = new PushReceiver({
            firebase: FIREBASE_CONFIG,
            vapidKey: VAPID_KEY,
            credentials: store.get("credentials") || null,
            persistentIds: store.get("persistentIds") || [],
            debug: false
        });
        receiver.onCredentialsChanged(({ newCredentials }) => {
            store.set("credentials", newCredentials);
        });
        receiver.onNotification(notification => this.handleNotification(notification));
        this.receiver = receiver;
        await receiver.connect();
        console.log("Push receiver connected");
        await this.ensureRegistered();
    }
    async ensureRegistered() {
        const fcmToken = this.receiver.fcmToken;
        if (!fcmToken) throw new Error("Couldn't get a push token");

        const previousDeviceId = store.get("deviceId");
        if (previousDeviceId && store.get("registeredToken") == fcmToken) {
            console.log("Device already registered", previousDeviceId);
            return previousDeviceId;
        }
        const register = deviceId => postRegistration("registerDevice", {
            deviceId,
            regId: fcmToken,
            regId2: fcmToken,
            deviceName: this.deviceName,
            deviceType: DEVICE_TYPE_BROWSER
        });
        let result = await register(previousDeviceId);
        if ((!result || !result.success || !result.deviceId) && previousDeviceId) {
            result = await register(null);
        }
        if (!result || !result.success || !result.deviceId) {
            throw new Error(`Couldn't register device: ${result && result.errorMessage}`);
        }
        store.set("registeredToken", fcmToken);
        store.set("deviceId", result.deviceId);
        console.log("Registered device", result.deviceId);
        if (result.deviceId != previousDeviceId && this.onDeviceIdChanged) {
            await this.onDeviceIdChanged(result.deviceId);
        }
        return result.deviceId;
    }
    rememberPersistentId(persistentId) {
        if (!persistentId) return;

        const ids = store.get("persistentIds") || [];
        ids.push(persistentId);
        store.set("persistentIds", ids.slice(-MAX_PERSISTENT_IDS));
    }
    async handleNotification(notification) {
        this.rememberPersistentId(notification.persistentId);
        const data = notification.message && notification.message.data;
        if (!data) return;

        let { type, json } = data;
        if (data.multi) {
            const complete = this.addMulti(data);
            if (!complete) return;

            type = complete.type;
            json = complete.json;
        }
        if (!type || !json) return;

        try {
            await this.onMessage({ type, json });
        } catch (error) {
            console.error("Error handling push", error);
        }
    }
    addMulti({ id, multi, length, type, value }) {
        const parts = this.multis[id] || (this.multis[id] = []);
        parts.push({ index: Number(multi), length: Number(length) || 0, type, value });
        const first = parts.find(part => part.length);
        if (!first || parts.length < first.length) return null;

        parts.sort((left, right) => left.index - right.index);
        delete this.multis[id];
        return { type: first.type, json: parts.map(part => part.value).join("") };
    }
}
exports.ServerPush = ServerPush;
