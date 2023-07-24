<template>
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="shadow">
        <div class="win">
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Header from './component/Header.vue'
import Main from './component/Main.vue'
import Footer from './component/Footer.vue'
//const ipc = window.electron.ipcRenderer
export default {
  name: 'App',
  components: {
    'Header':Header,
    'Main':Main,
    'Footer':Footer
 },
    data(){
        return{

            isActive:false,
            isLoading:false,
            isShowLoading:false,
            publicPath: process.env.BASE_URL,

        }
    },
        
    mounted(){
       
    },
  methods:{
      loginPopup(){
          alert("hello")
      },
      loginClick(){
         this.isActive = true;
         this.isLoading = true;
         this.isShowLoading = true;

      },

    minimizeWin(){
        window.electron.minWindow();
    },
    maximizeWin(){
        window.electron.maxWindow(); 
    },
    closeWin(){
        window.electron.closeWindow();
    }
     }
}
</script>

<style lang="scss" scop>
    * {
        margin: 0px;
        padding: 0px;
    }

    .active {
        //width: 100px;
        //content: url(./assets/images/PluginDevice/btn-OK-click.png);
        //display:none;
    }

    .loading {
        //display:none;
    }

    .showLoading {
        display: block;
    }

    .shadow {
        body {
            background-color: rgba(0, 0, 0, 0);
            margin: 0px;
        }

        .win {
            //正常窗口样式，圆角为20px width: 100%;
            //去除左右间距各5px height: 100vh;
            //去除上下间距各5px //background-color: #4cff00;
            //设置底色为白色 //border-radius: 20px;
            //圆角20px margin: 5px;
            //将外间距设置为5px //background: url(../assets/globalBG.png);
            -webkit-app-region: drag;
            //可拖动窗口
        }

        .header {
            display: grid;
            width: 100%;
            grid-template-rows: 18px;
            grid-template-columns: 11px auto 11px;
        }

        .left_top_corner {
            background-image: url(./assets/images/TopImage/A-left-corner.png);
            background-repeat: no-repeat;
        }

        .middle_top {
            background-image: url(./assets/images/TopImage/A-bg.jpg);
            background-repeat: no-repeat;
        }

        .right_top_corner {
            background-image: url(./assets/images/TopImage/A-right-corner.png);
            background-repeat: no-repeat;
        }

        .min:hover {
            content: url(./assets/images/A-min-over.png);
        }

        .max:hover {
            content: url(./assets/images/A-max-over.png);
        }

        .close:hover {
            content: url(./assets/images/A-close-over.png);
        }

        .navigation {
            width: 100%;
            height: 92px;
            display: grid;
            position: relative;
            grid-template-rows: 92px;
            grid-template-columns: 160px auto;
            /*background-image: url(./assets/images/TopImage/Nav-bar-bg.jpg);
            background-repeat: no-repeat;
            background-size: cover;*/
            background: linear-gradient(to bottom, #96d8f8, #54b1dd, #50acd5);
        }

        .top_right_text {
            width: 200px;
            height: 16px;
            border-radius: 0px 0px 16px 16px;
            background: #fff;
            text-align: center;
            right: 20px;
            position: absolute;
            line-height: 16px;
            font-size: 10px;
            font-weight: bold;
            color: #444444;
            //background-image: url(./assets/images/btn-base.png);
            // background-repeat: no-repeat;
            //background-size: cover;
            -webkit-app-region: no-drag;
        }

        .top_right_text:hover {
            color: deepskyblue;
            cursor: default;
        }

        .nav_logo {
            background-image: url(./assets/B-vtech-logo.jpg);
            background-repeat: no-repeat;
            //background-size: cover;
        }

        .nav_menu {
            width: auto;
            height: 40px;
            display: flex;
            background: linear-gradient(to bottom, #fbfbfb, #d8d8d8, #e9ebea);
            margin-top: 23px;
            margin-right: 20px;
            text-align: center;
            border-radius: 20px;
        }
        /*        .nav_menu_left_corner {
            background-image: url(./assets/images/B-left-round.jpg);
            background-repeat: no-repeat;
            background-size: contain;
        }

        .nav_menu_right_corner {
            background-image: url(./assets/images/B-right-round.jpg);
            background-repeat: no-repeat;
            background-size: contain;
        }*/

        .nav_menu_line_break {
            line-height: 100px;
        }
        /*.nav_menu_line_break {
            background-image: url(../assets/images/TopImage/line_break.jpg);
            background-repeat: no-repeat;
            background-size: contain;
        }*/
        .nav_menu_css {
            text-align: center;
            text-decoration: none;
            line-height: 40px;
            flex: 1;
            font-size: 14px;
            font-weight: bold;
            position: relative;
            /*&:after {
                content: "";
                margin-left: 40px;
                border-left: 1px solid #c0c4cc;
                height: 30px;
                display: inline-block;
                vertical-align: middle;
            }*/
        }

        .nav_menu_css:after {
            content: "";
            position: absolute;
            left: 100%;
            top: 50%;
            bottom: 0;
            width: 1px;
            height: 30px;
            box-shadow: 2px;
            background-color: #c0c4cc;
            transform: translateX(-50%);
            transform: translateY(-50%);
            box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.1);
            background: linear-gradient(to right, #fbfbfb, #e9ebea);
        }

        .nav_menu_help:after {
            content: "";
            width: 0;
            height: 0;
        }

        .no_drag {
            -webkit-app-region: no-drag;
        }

        .linker {
            display: inline-block;
            text-decoration: none;
            align-self: center;
            color: #444444;
        }

        .linker:hover {
            color: deepskyblue;
            cursor: default;
        }

        .content {
            width: 100%;
            height: calc(100vh - 140px);
            background-image: url(./assets/images/home_bg3.png),url(./assets/images/home_bg2.png),url(./assets/images/home_bg1.png),url(./assets/images/home_bg0.png),;
            //background-image: url(/images/home_bg3.png),url(/images/home_bg2.png),url(/images/home_bg1.png),url(/images/home_bg0.png),;
            //background-image: url(--img/home_bg3.png),url(--img/home_bg2.png),url(--img/home_bg1.png),url(--img/home_bg0.png);
            //background-image: url(--img/home_bg3.png),url(--img/home_bg2.png),url(--img/home_bg1.png),url(--img/home_bg0.png);
            background-repeat: no-repeat no-repeat;
            background-size: cover;
            position: relative;
            /*        background-color: #000;;'
            background: rgba(0, 0, 0, 0.7);*/
        }

        .middle_content {
            width: 100%;
            height: calc(100vh - 140px);
        }

        #overlay {
            width: 580px;
            height: 432px;
            position: absolute;
            background-image: url(./assets/images/DLPlugin/popup-small.png);
            background-repeat: no-repeat;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            text-align: center;
            display: none;
        }

        .input_login {
            height: 20px;
            width: 100px;
            overflow: hidden;
            border-radius: 6px;
            outline-style: none;
            border-left-width: 2px;
            border-left-color: lightgrey;
            border-right-width: 0px;
            border-top-color: lightgrey;
            border-bottom-width: 0px;
        }

        .login_loading {
            width: 100%;
            height: 100%;
            /*background-image: url(./assets/images/wait.gif);
            background-repeat: no-repeat;*/
            position: relative;
            z-index: 2;
        }

        .img_loading {
            top: 50%;
            left: 50%;
            position: absolute;
            transform: translateX(-50%) translateY(-50%);
        }

        #login_ok:hover {
            content: url(./assets/images/PluginDevice/btn-OK-over.png);
        }

        .bottom {
            display: grid;
            width: 100%;
            grid-template-rows: 20px;
            grid-template-columns: 20px auto 20px;
        }

        .left_bottom_corner {
            background-image: url(./assets/images/TopImage/D-leftBottomCorner.png);
            background-repeat: no-repeat;
            background-size: 20px 20px;
        }

        .middle_bottom {
            background-image: url(./assets/images/TopImage/D-bg.jpg);
            background-repeat: no-repeat;
            background-size: auto 20px;
        }

        .right_bottom_corner {
            background-image: url(./assets/images/TopImage/D-rightBottomCorner.png);
            background-repeat: no-repeat;
            background-size: 20px 20px;
        }

        .bottom_link {
            text-decoration: none;
            font-size: 12px;
            height: 20px;
            line-height: 20px;
        }

        .bottom_link:hover {
            color: #ffffff;
            cursor: default;
        }
    }

    </style>

<!--<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>-->
