'use strict'

import { app, protocol, BrowserWindow, ipcMain, BrowserView } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
const path = require('path')
const ffi = require('ffi-napi')
const log = require('electron-log');
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
    { scheme: 'app', privileges: { secure: true, standard: true } }
])

/*   ? path.resolve("public/resources/DllDemo.dll") 
   : path.resolve("resources/DllDemo.dll")
   */
log.info('Hello, log');
log.warn('Some problem appears');
const libPath = path.resolve("public/resources/DllDemo.dll");
console.log("Path:" + libPath);
const cpplib = ffi.Library(libPath, {
    funAdd: ['int', ['int','int']]
  })

var view;
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
            //webSecurity: false,  //�Ƿ����ͬԴ���� 
            preload: path.join(__dirname, 'preload.js')
        }
    })

    if (process.env.WEBPACK_DEV_SERVER_URL) {
        // Load the url of the dev server if in development mode
        await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
        //if (!process.env.IS_TEST) win.webContents.openDevTools(); 
    } else {
        createProtocol('app')
        // Load the index.html when not in development
        win.loadURL('app://./index.html')
    }

    //��¼������С��
    ipcMain.on('window-min', function () {
        win.minimize();
    })

    ipcMain.on('open-browser-view', (event, data) => {
        if(typeof(view) == 'undefined'){
            view = new BrowserView()
            win.setBrowserView(view)
            view.setBounds({ x: 58, y: 160, width: 900, height: 500 })
            //view.setBackgroundColor("#F5F5F5")
            const modalPath = process.env.NODE_ENV === 'development'
            ? 'http://localhost:8080/ChildWindow'
            : path.resolve(__dirname,"ChildWindow")
            var pt = path.resolve(__dirname,"index.html/#/ChildWindow");
            //const modalPath = 'https://www.baidu.com'
            //view.webContents.loadURL(`file://${__dirname}/index.html#/ChildWindow`)
            view.webContents.loadURL('https://www.baidu.com')
            view.webContents.on("did-finish-load", () => {
                console.log("finish load")
                //view.webContents.insertCSS('html, body { background-color: #f00; }')
                //view.webContents.insertCSS('::-webkit-scrollbar-track { background-color: rgb(32, 40, 48);}')
                //var text = 'Hello,I am main.'
                var DM_Object = `{
                    name: "This is inject object2",
                    path:"file://${__dirname}/index.html#/ChildWindow",
                    sendMessage: function (msg) {
                        alert("This is:"+${cpplib.funAdd(100, 100)})
                    }
                }`;
              //   var DM_Object = `{
              //     name: "This is inject object2",
              //     sendMessage: function (msg) {
              //         alert("This is:"+msg)
              //     }
              // }`;
    
                win.webContents.send("browserviewFinish", "finish load");
                view.webContents.executeJavaScript(`window.DM_Object=${DM_Object};`);
                //view.webContents.executeJavaScript(`window.DM_Object=${DM_Object};alert(window.DM_Object.path);`);
                //view.webContents.executeJavaScript(`DM_Object = {name:"${text}",age:21};alert(DM_Object.name)`)
                //view.webContents.executeJavaScript(`var obj = document.querySelector('.files'); alert(obj.innerHTML)`)
                //.then(console.log('JavaScript Executed Successfully'));
            })
    
            view.webContents.once('dom-ready', () => {
                console.log("dom ready")
                //view.webContents.executeJavaScript(`alert(DM_Object.name)`)
                //const renderHtml = '我是被临时插入webview的内容...';
                //view.webContents.executeJavaScript('document.documentElement.innerHTML =`' + renderHtml + '`;');
            })
            view.webContents.on("did-frame-finish-load", () => {
                console.log("did-frame-finish-load")
            });
            view.webContents.on("window-child-closed", () => {
                alert("close")
            })
            win.webContents.send("receive-from-browser-view", data);
        }else{
            view.setBounds({ x: 58, y: 160, width: 900, height: 400 })
        }
        
})

    //��¼�������
    ipcMain.on('window-max', function () {
        if (win.isMaximized()) {
            win.unmaximize();
        } else {
            win.maximize();
        }
    })
    //�رմ���
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

ipcMain.on("invoke-funAdd",function() {
    console.log("invoke c++")
    let num = cpplib.funAdd(5,4)
    console.log(num)
})

ipcMain.on("browser-view-hide", (event, data) => {
    console.log("hide browser view:"+data)
    view.setBounds({ x: 58, y: 160, width: 0, height: 0 })
})

ipcMain.handle("print-log", (event, level,info) => {
    console.log("print log:"+info)
})