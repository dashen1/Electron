'use strict'

import { app, protocol, BrowserWindow,ipcMain,BrowserView,shell,net } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
const path = require('path')

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

var win
var childWin
async function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: true,
    backgroundColor: '#00000000',
    frame: false,
    resizable: false,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      preload: path.join(__dirname, 'preload.js')
    },
    show:false
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    //if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  ipcMain.on('window-min', function () {
        win.minimize();
    })
  
    ipcMain.on('browserview-open', function () {
        const view = new BrowserView()
        win.setBrowserView(view)
        view.setBounds({ x: 100, y: 200, width: 600, height: 300 })
        view.setBackgroundColor()
        view.webContents.loadURL('https://electronjs.org')
    })

    ipcMain.on('window-open-new', function () {
        childWin = new BrowserWindow({
            width: 600,
            height: 600,
            frame:false,
            resizable: false,
            parent: BrowserWindow.getFocusedWindow(),//������
            modal: true,
            webPreferences: {
              // Use pluginOptions.nodeIntegration, leave this alone
              // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
              nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
              contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
              preload: path.join(__dirname, 'preload.js')
            },
            show:false
    })
    //childWin.webContents.openDevTools()
    const modalPath = process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/ChildWindow'
    : `file://${__dirname}/ChildWindow`
        //childWin.loadURL('app://./index.html#ChildWindow');
        childWin.loadURL(modalPath);
       
        // childWin.on('window-child-closed',()=>{
        //   console.log("hello");
        //   childWin.close();
        // })
    })

    ipcMain.on('window-child-closed',()=>{
      console.log("hello")
      childWin.destroy();
    })

    ipcMain.on("window-child-ready-to-show",() =>{
      console.log('ready to show')
      childWin.show()
    })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

ipcMain.handle("loadExploer",(event,url) => {
    shell.openExternal(url);
})

ipcMain.handle("doSomething",() =>{
  const request = net.request("https://www.baidu.com");

  request.on("response",(response) => {
    const data = [];
    response.on("data", (chunk) => {
      data.push(chunk);
      console.log(chunk);
    })
     response.on("end", () => {
      const json = Buffer.concat(data).toString();
      console.log(json);
      win.webContents.send("gotData",json);
     })
  });
  request.end();
})

ipcMain.on("window-child-closed-url", (event,url) => {
    console.log("main:"+url)
    win.webContents.send("gotUrl",url);
    childWin.destroy();
})

ipcMain.on("window-min-ready-to-show", () =>{
  console.log("main window ready to show")
  win.show()
})