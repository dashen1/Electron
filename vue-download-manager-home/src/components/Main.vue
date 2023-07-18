<template>
    <div>
        <div class="container">
            <div class="item"></div>
            <div class="outer item"></div>
            <div class="middle-one item"></div>
            <div class="middle-two item"></div>
            <div class="inner type-1 item">
                <div class="text-dl">Login</div>
                <div class="div-mm">
                    <span class="text-mm">Password:</span>
                    <input type="password" class="input-dl" />
                </div>
                <span class="text-wjmm">Forget password?</span>
                <div class="btn_same no-drag" :class="{click_disable:isDisable}" @click="clickDl">login</div>
            </div>
            <div class="div-loading" :class="{dl_loading:isHideLoading}"><img class="img_loading" src="~@/assets/images/wait.gif" style="vertical-align: middle;" /></div>
        </div>
    </div>
</template>

<script>
export default {
  name: "MainView",
    data(){
        return {
            isHideLoading:true,
            isDisable:false,
            onlyLoading:true
        }
    },
    mounted(){
        const _this = this
        this.isHideLoading = false
        var timer = setInterval(function(){
            _this.isHideLoading = true
            clearInterval(timer)
        },3000)
    },
  methods:{
    clickDl(){
        this.isHideLoading = false
        this.isDisable = true
        const _this = this
        var timer = setInterval(function(){
            _this.isHideLoading = true
            _this.isDisable = false
            clearInterval(timer)
        },3000)
    }
 }
};

</script>

<style lang="scss" scoped>
    $colors:#fff,#fff,#d3f2fb,#1291dc,#fff;
    $margins:0px,0px,10px,35px,50px;
    $width:500px;
    $height:250px;
    $radius:20px;
    .container {
        width: 100%;
        height: 100%;
        position:relative;
        display:flex;
        align-items:center;
    }

    .div-loading {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .dl_loading {
        display: none;
    }


    /*box-shadow: 0 0 50px 40px rgba(255, 255, 255, 0.8);*/
    .item {
        @for $i from 1 through length($colors) {

            &:nth-child(#{$i}) {
                width: $width - nth($margins,$i);
                height: $height - nth($margins,$i);
                background-color: nth($colors,$i);
                border-radius: $radius - $i*2;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }

            &:nth-child(1) {
                box-shadow: 0 0 50px 40px rgba(255, 255, 255, 0.8);
            }

            &:nth-child(2) {
                box-shadow: 1px 1px 25px #000;
            }
        }
    }

    .inner{
        text-align:center;
    }

    .middle-one::before {
        content: "";
        width: 100%;
        height: 100%;
        border-radius: 20px;
        border-radius: 20px;
        background: linear-gradient(to bottom, #cbecf8,#6ba8d6,#cbecf8);
        left: 0px;
        top: 0px;
        position: absolute;
    }

    .text-dl {
        margin-top:20px;
    }

    .text-wjmm {
        line-height: 40px;
        font-size: 14px;
    }

    .text-mm{
        margin-right:10px;
    }

    .div-mm {
        margin-top: 20px;
        margin-bottom: 10px;
    }

    .input-dl {
        height: 20px;
        width: 200px;
        overflow: hidden;
        border-radius: 6px;
        outline-style: none;
        border-left-width: 2px;
        border-left-color: lightgrey;
        border-right-width: 0px;
        border-top-color: lightgrey;
        border-bottom-width: 0px;
    }

    .btn_same {
        width: 160px;
        height: 30px;
        border-radius: 15px;
        margin: 10px auto;
        background: linear-gradient(to bottom, #fdc825,#e57c07);
        text-align: center;
        line-height: 30px;
        border: 1px solid #000;
        color: #fff;
    }

    .btn_same:hover {
        cursor: default;
        background: linear-gradient(to bottom, #e57c07,#fdc825);
    }

    .no_drag {
        -webkit-app-region: no-drag;
    }

    .click_disable {
        pointer-events: none;
        background: grey;
    }
    
   /* .box-display {
        margin: auto;
        display: flex;
        align-items: center;
    }

    .container {
        width: 100%;
        height: 100%;
    }

    .outer {
        width: $width;
        height: 200px;
        background-color: #fff;
    }

    .middle-one {
        width: $width;
        height: 180px;
        background-color: deepskyblue;
    }

    .middle-two {
        width: 260px;
        height: 160px;
        background-color: gold;
    }

    .inner {
        width: 240px;
        height: 140px;
        margin:auto;
        background-color: #fff;
    }*/
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
