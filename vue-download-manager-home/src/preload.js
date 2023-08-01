import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld("electron", {
    //ipcRenderer,
    minWindow: () => ipcRenderer.send('window-min'),
    maxWindow: () => ipcRenderer.send('window-max'),
    closeWindow: () => ipcRenderer.send('window-close'),
    funAdd: () => ipcRenderer.send("invoke-funAdd"),

    openBrowserView: (channel, data) => {
        let validChannels = ['open-browser-view'];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },
    receiveFromBrowserView:(channel, func) =>{
        let validChannels = ["receive-from-browser-view"];
        if (validChannels.includes(channel)) {
            ipcRenderer.on(channel, (event, ...args) => func(...args));
        }
    },
    browserViewHide: (channel, data) => {
        let validChannels = ["browser-view-hide"];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },

    printLog: async (channel,level,info) => {
        let validChannels = ['print-log'];
        if (validChannels.includes(channel)) {
            ipcRenderer.invoke(channel,level, info);
        }
    },

    send: (channel, data) => {
        // whitelist channels
        let validChannels = ['toMain'];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },
    receive: (channel, func) => {
        let validChannels = ["fromMain"];
        if (validChannels.includes(channel)) {
            ipcRenderer.on(channel, (event, ...args) => func(...args));
        }
    }
});
