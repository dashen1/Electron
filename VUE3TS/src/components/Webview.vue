<template>
    <div>
        <div class="no-drag" style="position: absolute; width: 100%; height: 100%;">
            This is Webview...
        </div>
        <LoadingWhite v-if="state.isShowLoading" style="position:absolute;"></LoadingWhite>
    </div>

</template>

<script setup>
    import { reactive, onActivated, onDeactivated } from 'vue'
    import LoadingWhite from '../component/LoadingWhite.vue'

    const state = reactive({
        isShowLoading: true
    })

// onMounted(() => {

//     window.electron.printLog("print-log","info","mounted info:"+state.isShowLoading);

//     window.electron.receiveFromBrowserView("oreceive-from-browser-view",(data) => {
//             console.log(`Received ${data} from main process`)
//                 })
//     window.electron.openBrowserView("open-browser-view","hello webview")

//     window.electron.browserViewFinishLoad("did-finish-load-browser-view",(data) => {
//         state.isShowLoading = false
//         console.log("finish load:"+data)
//     })
// })

// onUnmounted(() => {
//     window.electron.browserViewHide('browser-view-hide',"hide browser-view")
// })

onActivated(() => {
    window.electron.printLog("print-log","info","onActivated");
    window.electron.receiveFromBrowserView("oreceive-from-browser-view",(data) => {
            console.log(`Received ${data} from main process`)
                })
    window.electron.openBrowserView("open-browser-view","hello webview")

    window.electron.browserViewFinishLoad("did-finish-load-browser-view",(data) => {
        state.isShowLoading = false
        console.log("finish load:"+data)
    })
})

onDeactivated(() => {
    window.electron.browserViewHide('browser-view-hide',"hide browser-view")
    window.electron.printLog("print-log","info","onDeactivated")
})
</script>

<script>
    export default {
        name: 'WebviewVue',
    }
</script>
<style lang="scss" scoped>
    .no-drag {
        -webkit-app-region: no-drag;
    }
</style>