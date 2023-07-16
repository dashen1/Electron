<template>
    <div class="shadow">
        <div class="win">
            <!--<img src="~@/assets/B-vtech-logo.jpg" />-->
            <div class="content">Downloading...</div>
            <div class="bottom">
                <div class="btn_img" style="float:left;"><img class="class_img" src="~@/assets/B-vtech-logo.jpg" /></div>
                <!--<img class="class_img click" src="~@/assets/btn-cancel-idle.png" @click="show"/>-->

                <router-link class="btn_same btn_continue no_drag" to="/Downloading">Continue</router-link>
                <div class="btn_same btn_close no_drag">Close</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "DownloadingView",
  props:{

      msg:String
  },

    methods:{
      show(){
          alert("hello")
      }

 }
};

</script>

<style lang="scss" scoped>

    * {
        margin: 0;
        padding: 0;
    }

    .shadow {
        body {
            background-color: rgba(0, 0, 0, 0);
        }

        .win {
            //正常窗口样式，圆角为20px
            width: 100%; //去除左右间距各5px
            height: 100vh; //去除上下间距各5px
            background-color: #4cff00; //设置底色为白色
            border-radius: 20px; //圆角20px
            //margin: 5px; //将外间距设置为5px
            background: url(../assets/globalBG.png);
            -webkit-app-region: drag; //可拖动窗口
        }

        .no_drag {
            -webkit-app-region: no-drag;
        }

        .content {
            width: 100%;
            height: calc(100vh - 64px);
        }

        .bottom {
            width: 100%;
            height: 60px;
            border-top: solid 1px grey;
            position: relative;
            //display: flex;
            /*定义子级元素垂直居中*/
            //align-items: center;
        }

        .btn_same {
            width: 160px;
            height: 30px;
            position: absolute;
            border-radius: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: linear-gradient(to bottom, #fdc825,#e57c07);
            line-height: 30px;
            text-align: center;
            border: 1px solid #000;
        }

        .class_img {
            height: 59px;
        }

        .btn_continue {
            right: 15px;
        }

        .btn_close {
            right: 200px;
        }

        .btn_same:hover {
            cursor:default;
            background: linear-gradient(to bottom, #e57c07,#fdc825);
        }

        .click {
            -webkit-app-region: no-drag;
        }
    }
</style>
