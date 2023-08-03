import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld("electron", {
    //ipcRenderer,
    minWindow: () => ipcRenderer.send('window-min'),
    maxWindow: () => ipcRenderer.send('window-max'),
    closeWindow: () => ipcRenderer.send('window-close'),
    funAdd: () => ipcRenderer.send("invoke-funAdd"),

    openBrowserView: (channel:string, data:string) => {
        const validChannels = ['open-browser-view'];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },
    receiveFromBrowserView:(channel:string, func:any) =>{
        const validChannels = ["receive-from-browser-view"];
        if (validChannels.includes(channel)) {
            ipcRenderer.on(channel, (event, ...args) => func(...args));
        }
    },

    browserViewFinishLoad:(channel:string, func:any) =>{
        const validChannels = ["did-finish-load-browser-view"];
        if (validChannels.includes(channel)) {
            ipcRenderer.on(channel, (event, ...args) => func(...args));
        }
    },

    browserViewHide: (channel:string, data:string) => {
        const validChannels = ["browser-view-hide"];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },

    printLog: async (channel:string,level:string,info:string) => {
        const validChannels = ['print-log'];
        if (validChannels.includes(channel)) {
            ipcRenderer.invoke(channel,level, info);
        }
    },

    send: (channel:string, data:string) => {
        // whitelist channels
        const validChannels = ['toMain'];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },
    receive: (channel:string, func:any) => {
        const validChannels = ["fromMain"];
        if (validChannels.includes(channel)) {
            ipcRenderer.on(channel, (event, ...args) => func(...args));
        }
    }
});
