<template>
    <div class="video-box no_drag">
        <iframe src="https://electronjs.org" frameborder="2" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
  name: "PrivacyComponent",


        mounted() {
            this.webViewOnload()
        },
    methods:{

        webViewOnload() {
            const webView = document.querySelector("iframe");
            const _this = this
            console.log(this)
            webView.onload = function(){
               _this.$emit('webViewEnd');
            }
               
        }
 }
};

</script>

<style lang="scss" scoped>

    .no_drag {
        -webkit-app-region: no-drag;
    }

    iframe {
        width: 100%;
        height: 100%;
    }

    /* 设置包装元素的宽度和高度，并设置宽度为100%以适应父元素的宽度 */
    .video-box {
        position: relative;
        width: 80%;
        height: 50vh;
        /*padding-bottom: 56.25%; //设置宽高比为16:9，可根据需要更改
        overflow: hidden;*/
        margin:auto;
        background-color:#ffffff;
    }

     // 使iframe相对于包装元素定位，以保持宽高比 
    .video-box iframe {
        position: absolute;
        top: 0;
        left: 0;

    }
</style>
