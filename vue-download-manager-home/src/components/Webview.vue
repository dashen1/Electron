<template>
    <div>
        <div class="no-drag" style="position: absolute; width: 100%; height: 100%;">
            This is Webview...
        </div>
        <Loading :isShowLoading="isShowLoading" style="position: absolute;"></Loading>
    </div>

</template>

<script>
        import Loading from '../component/Loading.vue'
    export default {
        name: 'WebviewVue',
        components:{
            Loading
        },
        data(){
            return{
                isShowLoading: true
            }
        },
        mounted() {
            window.electron.printLog("print-log","info","mounted info");
            const _this = this
            window.electron.receiveFromBrowserView("oreceive-from-browser-view",(data) => {
                console.log(`Received ${data} from main process`)
                _this.isShowLoading = false
            })
            window.electron.openBrowserView("open-browser-view","hello webview")

            var timer = setInterval(function(){
            _this.isShowLoading = false
            clearInterval(timer)
        },3000)
        },
        unmounted(){ // kep-alive
            window.electron.browserViewHide('browser-view-hide',"hide browser-view")
        },
        activated(){
            alert("activated")
        },
        deactivated(){
            alert("deactivated")
            window.electron.browserViewHide('browser-view-hide',"hide browser-view")
        }
    }
</script>
<style lang="scss" scoped>
    .no-drag {
        -webkit-app-region: no-drag;
    }
</style>