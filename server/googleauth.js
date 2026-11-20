const fs = require('fs');
const path = require('path');
//const fetch = require('node-fetch');
const fetch = require('electron-fetch').default;
const Store = require('./store.js');

const DEFAULT_CLIENT_ID = "596310809542-giumrib7hohfiftljqmj7eaio3kl21ek.apps.googleusercontent.com";
const DEFAULT_CLIENT_SECRET = "NTA9UbFpNhaIP74B_lpxGgvR";

const getCustomCredentials = () => {
    try{
        const {app} = require('electron');
        const candidates = [
            path.join(app.getPath('userData'), 'oauth.client.json'),
            path.join(__dirname, '..', 'oauth.client.json')
        ];
        for(const file of candidates){
            if(!fs.existsSync(file)) continue;
            const credentials = JSON.parse(fs.readFileSync(file,'utf8'));
            if(credentials && credentials.client_id && credentials.client_secret){
                console.log("Using custom OAuth credentials from", file);
                return credentials;
            }
        }
    }catch(error){
        console.log("Couldn't load custom OAuth credentials", error);
    }
    return null;
}
const authStore = new Store({
    configName: 'auth',
    defaults: null
});
class AuthData{
    constructor(raw){
        if(raw == null) return;

        Object.assign(this,raw);
    }

    get isExpired(){
        if(!this.refresh_token) return true;
        if(!this.expires_on) return true;

        const now = new Date().getTime();
        const expired = now > this.expires_on;
        // console.log("Checking is expired time",now,this.expires_on,expired);
        return expired;
    }
}
class GoogleAuth{
    /**
     * Builds a Google sign-in url that points directly at this app's local server.
     * This replaces the old sign-in via the Join website, which requested scopes
     * that Google no longer allows to be combined in one request.
     * @param {String} redirectUri e.g. http://127.0.0.1:9876
     * @returns {String}
     */
    static getAuthUrl(redirectUri){
        const credentials = getCustomCredentials();
        const scopes = [
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/drive.appfolder"
        ];
        const params = new URLSearchParams({
            client_id: credentials ? credentials.client_id : DEFAULT_CLIENT_ID,
            redirect_uri: redirectUri,
            response_type: "code",
            access_type: "offline",
            prompt: "select_account consent",
            scope: scopes.join(" ")
        });
        return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
    }
    /**
     *
     * @param {String} accessCode
     * @returns {AuthData}
     */
    static async storeAuthData(accessCode,redirectUri){
        const credentials = getCustomCredentials();
        const options = {
            method:"POST",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            },
            body: `code=${encodeURIComponent(accessCode)}&client_id=${encodeURIComponent(credentials ? credentials.client_id : DEFAULT_CLIENT_ID)}&client_secret=${encodeURIComponent(credentials ? credentials.client_secret : DEFAULT_CLIENT_SECRET)}&redirect_uri=${encodeURIComponent(redirectUri || "http://127.0.0.1:9876")}&grant_type=authorization_code`
        }
        // console.log("Sending to google auth code", options);
        const result = await fetch("https://oauth2.googleapis.com/token",options);
        const authDataRaw = await result.json();
        if(!authDataRaw.access_token){
            throw new Error(`Google sign-in failed: ${authDataRaw.error_description || authDataRaw.error || "no access token received"}`);
        }
        // console.log("Result from google auth code", authDataRaw);
        console.log("Stored Auth Data");
        GoogleAuth.authData = authDataRaw;
        return GoogleAuth.authData;
    }
    static get accessToken(){
        // console.log("Getting access token");
        
        const authData = GoogleAuth.authData;
        if(!authData.isExpired) return authData.access_token;
        
        console.log("Access token expired. Getting new one");
        const refresh_token = authData.refresh_token;
        if(!refresh_token) return null;
        
        return (async ()=>{
            const credentials = getCustomCredentials();
            const options = {
                method:"POST",
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                },
                body: `refresh_token=${encodeURIComponent(refresh_token)}&client_id=${encodeURIComponent(credentials ? credentials.client_id : DEFAULT_CLIENT_ID)}&client_secret=${encodeURIComponent(credentials ? credentials.client_secret : DEFAULT_CLIENT_SECRET)}&grant_type=refresh_token`
            }
            // console.log("Sending to google auth refresh", options);
            const result = await fetch("https://oauth2.googleapis.com/token",options);
            const refreshResultObject = await result.json();
            Object.assign(authData,refreshResultObject);
            // console.log("Result from google auth refresh", authData);
            GoogleAuth.authData = authData;
            return authData.access_token;
        })();
    }
    static get authData(){
        const raw = authStore.getData();
        return new AuthData(raw);
    }
    static set authData(value){
        const expires_in = value.expires_in;
        if(!expires_in) return;

        const now = new Date().getTime();

        value.expires_on = now + ((expires_in- 300)*1000) 
        authStore.setData(value);
    }
}
exports.GoogleAuth = GoogleAuth;