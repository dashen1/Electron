import { contextBridge, ipcRenderer } from "electron";

ipcRenderer.on("gotData", (event, json) => {
    console.log(json);
    var whattodo = document.getElementById("whattodo");
    whattodo.innerText = json;
})

ipcRenderer.on("gotUrl", (event,url) => {
    console.log(url);
    var showUrl = document.getElementById("showUrl");
    showUrl.innerText = url;
})

contextBridge.exposeInMainWorld("electronAPI", {
    minWindow: () => ipcRenderer.send('window-min'),
    opnWebview: () => ipcRenderer.send('browserview-open'),
    openNewWindow: () => ipcRenderer.send('window-open-new'), 
    closeChildWindow: () => ipcRenderer.send('window-child-closed'),
    closeChildWindowWithUrl: (url) => ipcRenderer.send('window-child-closed-url',url),
    loadExploer: async (url) => ipcRenderer.invoke('loadExploer', url),
    loadData: async () => ipcRenderer.invoke('doSomething'),
});