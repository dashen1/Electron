const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  minWindow: () => ipcRenderer.send('set-window-close')
})