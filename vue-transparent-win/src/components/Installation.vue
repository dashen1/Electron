<template>
    <div class="shadow">
        <div class="win">
            <!--<img src="~@/assets/B-vtech-logo.jpg" />-->
            <div class="content">Installation...
                <button class="no_drag" @click="btn_open_browseview">open browserview</button>
            </div>
            <div class="bottom">
                <div class="btn_img" style="float:left;"><img class="class_img" src="~@/assets/B-vtech-logo.jpg" /></div>
                <!--<img class="class_img click" src="~@/assets/btn-cancel-idle.png" @click="show"/>-->

                <router-link class="btn_same btn_continue no_drag" to="/Installation2">Continue</router-link>
                <div class="btn_same btn_close no_drag">Close</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "InstallationView",
  props:{

      msg:String
  },

    mounted() {
            //alert("hello")
        },
    methods:{
      
        btn_open_browseview(){
            window.electronAPI.opnWebview()
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
            background: linear-gradient(to bottom, #bebebe,#6c6c6c);
            line-height: 30px;
            text-align: center;
            border: 1px solid #000;
        }

        .btn_same {
            cursor: default;
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

        .btn_ok:hover {
            background: linear-gradient(to bottom, #e57c07,#fdc825);
        }

        .btn_ok {
            background: linear-gradient(to bottom, #fdc825,#e57c07);
        }

        .click {
            -webkit-app-region: no-drag;
        }
    }
</style>
