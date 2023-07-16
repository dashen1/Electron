import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld("electron", {
    //ipcRenderer,
    minWindow: () => ipcRenderer.send('window-min'),
    maxWindow: () => ipcRenderer.send('window-max'),
    closeWindow: () => ipcRenderer.send('window-close'),
});
//import { ipcRenderer } from 'electron'
//window.ipcRenderer = ipcRenderer
//window.ipcRenderer = require('electron').ipcRenderer;
//import { contextBridge, ipcRenderer } from 'electron'

//contextBridge.exposeInMainWorld('electronAPI', {
//    minWin: () => ipcRenderer.send('window-min'),
//})
//window.ipcRenderer = require('electron').ipcRenderer;