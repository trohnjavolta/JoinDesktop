// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const {
  contextBridge,
  ipcRenderer
} = require("electron");

try{
  const myDeviceId = ipcRenderer.sendSync("mydeviceid");
  if(myDeviceId){
    localStorage.setItem("myDeviceId", myDeviceId);
  }
}catch(error){
  console.error("Couldn't set device id", error);
}

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
  "api", {
      send: (channel, data) => {
          // whitelist channels
          let validChannels = ["openurl","authToken","notification","gcm","devices","setting","eventbus","signin","mydeviceid"];
          if (validChannels.includes(channel)) {
              ipcRenderer.send(channel, data);
          }
      },
      receive: (channel, func) => {
          let validChannels = ["gcm","log","authToken","sendpush","eventbus","usersignedin"];
          if (validChannels.includes(channel)) {
              // Deliberately strip event as it includes `sender` 
              ipcRenderer.on(channel, (event, ...args) => func(...args));
          }
      }
  }
);
