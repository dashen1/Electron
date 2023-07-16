<template>
    <div class="shadow">
        <div class="win">
            <!--<img src="~@/assets/B-vtech-logo.jpg" />-->
            <div class="content">Home...</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "MainView",

  methods:{

 }
};

</script>

<style lang="scss" scoped>

    /*.shadow {
        body {
            background-color: rgba(0, 0, 0, 0);
            margin: 0px;
        }

        .win {
            //正常窗口样式，圆角为20px
            width: 100%; //去除左右间距各5px
            height: 100vh; //去除上下间距各5px
            //background-color: #4cff00; //设置底色为白色
            //border-radius: 20px; //圆角20px
            margin: 5px; //将外间距设置为5px
            //background: url(../assets/globalBG.png);
            -webkit-app-region: drag; //可拖动窗口
        }

        .header {
            display: grid;
            width: 100%;
            grid-template-rows: 20px;
            grid-template-columns: 20px auto 20px;
        }

        .left_top_corner {
            background-image: url(../assets/images/TopImage/A-left-corner.png);
            background-repeat: no-repeat;
            background-size: 20px 20px;
        }

        .middle_top {
            background-image: url(../assets/images/TopImage/A-bg.jpg);
            background-repeat: no-repeat;
            background-size: auto 20px;
        }

        .right_top_corner {
            background-image: url(../assets/images/TopImage/A-right-corner.png);
            background-repeat: no-repeat;
            background-size: 20px 20px;
        }

        .navigation {
            width: 100%;
            height: 100px;
            display: grid;
            grid-template-rows: 100px;
            grid-template-columns: 160px auto;
            background-image: url(../assets/images/TopImage/Nav-bar-bg.jpg);
            background-repeat: no-repeat;
            background-size: 100% 100px;
        }

        .nav_logo {
            background-image: url(../assets/B-vtech-logo.jpg);
            background-repeat: no-repeat;
            background-size: cover;
        }

        .nav_menu {
            width: 100%;
            height: 50px;
            display: grid;
            grid-template-rows: 100px;
            grid-template-columns: 50px auto 10px auto 10px auto 10px auto 50px;
            line-height: 50px;
            text-align: center;
        }

        .nav_menu_left_corner {
            background-image: url(../assets/images/B-left-round.jpg);
            background-repeat: no-repeat;
            background-size: contain;
        }

        .nav_menu_right_corner {
            background-image: url(../assets/images/B-right-round.jpg);
            background-repeat: no-repeat;
            background-size: contain;
        }

        .nav_menu_line_break{
            line-height:100px;
        }*/
        /*.nav_menu_line_break {
            background-image: url(../assets/images/TopImage/line_break.jpg);
            background-repeat: no-repeat;
            background-size: contain;
        }*/
        /*.nav_menu_css {
            line-height: 100px;
            text-align: center;
        }

        .click {
            -webkit-app-region: no-drag;
        }

        .content {
            width: 100%;
            height: 60vh;
            background-image: url(../assets/images/home_bg0.png),url(../assets/images/home_bg3.png);
            background-repeat: no-repeat no-repeat;
            background-size: cover contain;
        }

        .bottom {
            display: grid;
            width: 100%;
            grid-template-rows: 20px;
            grid-template-columns: 20px auto 20px;
        }

        .left_bottom_corner {
            background-image: url(../assets/images/TopImage/D-leftBottomCorner.png);
            background-repeat: no-repeat;
            background-size: 20px 20px;
        }

        .middle_bottom {
            background-image: url(../assets/images/TopImage/D-bg.jpg);
            background-repeat: no-repeat;
            background-size: auto 20px;
        }

        .right_bottom_corner {
            background-image: url(../assets/images/TopImage/D-rightBottomCorner.png);
            background-repeat: no-repeat;
            background-size: 20px 20px;
        }
    }*/
</style>
