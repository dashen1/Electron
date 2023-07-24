const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    pluginOptions: {
        electronBuilder: {
            //vue
            preload: "src/preload.js",
            //nodeIntegration:true,
            externals: ['ffi-napi', 'ref-napi'],
            customFileProtocol: "./",
            builderOptions: {
                extraResources: {
                    from: "./public/resources/DllDemo.dll",
                    to: "./"
                }
            }
        }
    },
})
