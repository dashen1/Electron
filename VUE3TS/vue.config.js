const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {

      mainProcessFile: 'src/background.ts',
      rendererProcessFile: 'src/main.ts',
        //vue
      preload: "src/preload.ts",
      //nodeIntegration:true,
      externals:['ffi-napi','ref-napi'],
      customFileProtocol: "./",
      builderOptions:{
        extraResources:{
          from: "./public/resources/DllDemo.dll",
          to: "./"
        },

        productName: "Electron Demo",
        appId: "com.apitool",
        copyright: "Copyright © 2021 <your-name>",
        win: {
          target: 'nsis',
          icon: 'src/assets/vtech-icon.ico',
          requestedExecutionLevel: "requireAdministrator" // The security level at which the application requests to be executed.
        },
              //window自动义安装
        nsis: {
          oneClick: false,            //是否静默安装（一键式安装）
          perMachine: true,           //安装模式 true=所有用户 false=自己
          allowElevation: true,       //允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序
          allowToChangeInstallationDirectory: true,   //是否安装时是否能更换安装目录
          createDesktopShortcut: true,    //是否创建桌面快捷建
          menuCategory: true,             //是否在开始菜单里创建子菜单
          installerIcon:  "src/assets/vtech-icon.ico",     //安装应用的图片,一定要 ico格式的图片
          //installerSidebar: "public/logo.bmp",   //安装程序左边的图片，一定是要位图 bmp 格式 一定要 164*314
          //uninstallerSidebar: "build/icons/uninstall.bmp",   //安装程序左边的图片，一定是要位图 bmp 格式 一定要 164*314
          //include: "scripts/installer.nsi"
        },

        mac: {
          target: 'dmg',
          hardenedRuntime: true,
          gatekeeperAssess: true,
          extendInfo: {
            NSAppleEventsUsageDescription: 'Let me use Apple Events.',
            NSCameraUsageDescription: 'Let me use the camera.',
            NSScreenCaptureDescription: 'Let me take screenshots.',
          }
        },
        dmg: {
          background: "src/assets/vtech-icon.ico",
          iconSize: 100,
          contents: [
            {
              x: 255,
              y: 85,
              type: "file"
            },
            {
              x: 253,
              y: 325,
              type: "link",
              path: "/Applications"
            }
          ],
          window: {
            width: 500,
            height: 500
          }
        },
      }
    }
  },
})