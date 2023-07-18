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

ipcRenderer.on("browserviewFinish", (event, data) => {
    console.log(data);
    var btnContinue = document.getElementById("id_btn_continue");
    btnContinue.classList.remove("click_disable")
})

contextBridge.exposeInMainWorld("electronAPI", {
    minWindow: () => ipcRenderer.send('window-min'),
    showMainWindow: () => ipcRenderer.send('window-main-ready-to-show'),
    opnWebview: () => ipcRenderer.send('browserview-open'),
    openNewWindow: () => ipcRenderer.send('window-open-new'), 
    showNewWindow: () => ipcRenderer.send('window-child-ready-to-show'), 
    closeChildWindow: () => ipcRenderer.send('window-child-closed'),
    closeChildWindowWithUrl: (url) => ipcRenderer.send('window-child-closed-url',url),
    loadExploer: async (url) => ipcRenderer.invoke('loadExploer', url),
    loadData: async () => ipcRenderer.invoke('doSomething'),
});