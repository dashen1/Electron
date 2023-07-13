const { app, BrowserWindow, BrowserView, globalShortcut } = require('electron')
const path = require('path')
var mainWindow = null // 声明要打开的主窗口
const { Menu } = require('electron')

app.on('ready', () => {
  // 设置窗口的高度和宽度
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    // frame: false, // 是否有边框
    webPreferences: {
      nodeIntegration: true, // 设置开启nodejs环境
      enableRemoteModule: true // enableRemoteModule保证renderer.js可以可以正常require('electron').remote，此选项默认关闭且网上很多资料没有提到
    }
  })
  // 加载 指定路径的页面
  mainWindow.loadURL('app://./index.html')
  // 菜单的配置
  var menuTemplate = [
    {
      label: '菜单1',
      submenu: [{
        label: '加载本地网页', // 子菜单的名字
        accelerator: 'ctrl+1', // 菜单的快捷键
        click: () => { // 点击 菜单触发的事件
          var newWin = new BrowserWindow({
            width: 400,
            height: 400,
            webPreferences: {
              nodeIntegration: true, // 设置开启nodejs环境
              enableRemoteModule: true // enableRemoteModule保证renderer.js可以可以正常require('electron').remote，此选项默认关闭且网上很多资料没有提到
            }
          })
          const pagePath = path.resolve(__dirname, './src/html/subPage.html')
          newWin.loadFile(pagePath)
          // 开启窗口之后，需要定义关闭窗口指针为空，防止内存溢出
          newWin.on('close', () => {
            newWin = null
          })
        }
      }, {
        label: '新窗口显示网页',
        accelerator: 'ctrl+2', // 菜单的快捷键
        click: () => { // 点击 菜单触发的事件
          let newWin = new BrowserWindow({
            width: 600,
            height: 500,
            webPreferences: {
              nodeIntegration: true, // 设置开启nodejs环境
              enableRemoteModule: true // enableRemoteModule保证renderer.js可以可以正常require('electron').remote，此选项默认关闭且网上很多资料没有提到
            }
          })
          // 创建一个 BrowserView 对象
          const view = new BrowserView()
          // 设置 BrowserView 作用的窗口
          newWin.setBrowserView(view)
          view.setBounds({
            x: 0, // 窗口x轴的起始位置
            y: 0, // 窗口y轴的起始位置
            width: 600, // BrowserView 的宽度
            height: 500 // BrowserView 的高度，如果是和窗口大小一致，一般获取窗口的宽度和高度
          })
          // 这段代码可以设置browserView视图宽度随窗口变化
          view.setAutoResize({ width: true, height: true })
          // BrowserView 嵌套网页
          view.webContents.loadURL('https://hbiao68.blog.csdn.net/')
          // 开启窗口之后，需要定义关闭窗口指针为空，防止内存溢出
          newWin.on('close', () => {
            newWin = null
          })
        }
      }]
    },
    {
      label: '菜单2',
      submenu: [{ label: '菜单21' }, { label: '菜单22' }]
    }
  ]
  // 根据配置信息创建 menu 对象
  var menuObj = Menu.buildFromTemplate(menuTemplate)
  // 将对象作用当当前应用中
  Menu.setApplicationMenu(menuObj)

  // 开启渲染进程中的调试模式
  mainWindow.webContents.openDevTools()
  // 监听窗口关闭 销毁引用
  mainWindow.on('closed', () => {
    mainWindow = null
  })
})
