'use strict'

import { app, protocol, BrowserWindow, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
const path = require('path')
const ffi = require('ffi-napi')
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
    { scheme: 'app', privileges: { secure: true, standard: true } }
])

/*   ? path.resolve("public/resources/DllDemo.dll") 
   : path.resolve("resources/DllDemo.dll")
   */
const libPath = path.resolve("public/resources/DllDemo.dll");
console.log("Path:" + libPath);
const cpplib = ffi.Library(libPath, {
    funAdd: ['int', ['int','int']]
  })
  
async function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 1016,
        height: 730,
        transparent: true,
        backgroundColor: '#00000000',
        frame: false,
        resizable: false,
        webPreferences: {
            //preload: path.join(__dirname, 'preload.js'),
            // Use pluginOptions.nodeIntegration, leave this alone
            // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info           
            nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
            contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
            enableRemoteModule: true,
            //webSecurity: false,  //是否禁用同源策略
            preload: path.join(__dirname, 'preload.js')
        }
    })

    if (process.env.WEBPACK_DEV_SERVER_URL) {
        // Load the url of the dev server if in development mode
        await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
        if (!process.env.IS_TEST) win.webContents.openDevTools();
    } else {
        createProtocol('app')
        // Load the index.html when not in development
        win.loadURL('app://./index.html')
    }

    //登录窗口最小化
    ipcMain.on('window-min', function () {
        win.minimize();
    })
    //登录窗口最大化
    ipcMain.on('window-max', function () {
        if (win.isMaximized()) {
            win.unmaximize();
        } else {
            win.maximize();
        }
    })
    //关闭窗口
    ipcMain.on('window-close', function () {
        win.destroy();
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

ipcMain.on("invoke-funAdd",function() {
        console.log("invoke c++")
        let num = cpplib.funAdd(5,4)
        console.log(num)
})