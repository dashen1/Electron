import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
    closeChildWindow: () => ipcRenderer.send('window-child-closed'),
  });