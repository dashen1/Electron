<template>
    <div class="header">
        <div class="left_top_corner"></div>
        <div class="middle_top" style="text-align:right;">
            <img id="btn" class="min no_drag" src="~@/assets/images/A-min-idle.png" @click="minimizeWin" />
            <img class="max no_drag" src="~@/assets/images/A-max-idle.png" @click="maximizeWin" />
            <img class="close no_drag" src="~@/assets/images/A-close-idle.png" @click="closeWin" />
        </div>
        <div class="right_top_corner">
        </div>
    </div>
    <div class="navigation no_drag">
        <div class="top_right_text" @click="loginPopup">Ausloggen</div>
        <div class="nav_logo"></div>
        <div class="nav_menu">
            <div class="nav_menu_left_corner"></div>
            <div class="nav_menu_home nav_menu_css"><router-link to="/Home" class="no_drag linker" tabindex="1">Home</router-link></div>
            <div class="nav_menu_center nav_menu_css"><router-link to="/DownloadCenter" class="no_drag linker nav_route" tabindex="2">Download Center</router-link></div>
            <div class="nav_menu_info nav_menu_css"><router-link to="/Info" class="no_drag linker" tabindex="3">Info</router-link></div>
            <div class="nav_menu_browser nav_menu_css"><router-link to="/Webview" class="no_drag linker" tabindex="4">Webview</router-link></div>
            <div class="nav_menu_help nav_menu_css"><router-link to="/Help" class="no_drag linker" tabindex="5">Help</router-link></div>
            <div class="nav_menu_right_corner"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HeaderView',
        methods:{
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

<style lang="scss" scoped>
    $url_prefix:'../assets';

    .header {
        display: grid;
        width: 100%;
        grid-template-rows: 18px;
        grid-template-columns: 11px auto 11px;
    }

    .left_top_corner {
        background-image: url(($url_prefix)+"/images/TopImage/A-left-corner.png");
        background-repeat: no-repeat;
    }

    .middle_top {
        background-image: url(($url_prefix)+"/images/TopImage/A-bg.jpg");
        background-repeat: no-repeat;
    }

    .right_top_corner {
        background-image: url(($url_prefix)+"/images/TopImage/A-right-corner.png");
        background-repeat: no-repeat;
    }

    .min:hover {
        content: url(($url_prefix)+"/images/A-min-over.png");
    }

    .max:hover {
        content: url(($url_prefix)+"/images/A-max-over.png");
    }

    .close:hover {
        content: url(($url_prefix)+"/images/A-close-over.png");
    }

    .navigation {
        width: 100%;
        height: 92px;
        display: grid;
        position: relative;
        grid-template-rows: 92px;
        grid-template-columns: 160px auto;
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
        -webkit-app-region: no-drag;
    }

    .top_right_text:hover {
        color: deepskyblue;
        cursor: default;
    }

    .nav_logo {
        background-image: url(($url_prefix)+"/B-vtech-logo.jpg");
        background-repeat: no-repeat;
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

    .nav_menu_line_break {
        line-height: 100px;
    }

    .nav_menu_css {
        text-align: center;
        text-decoration: none;
        line-height: 40px;
        flex: 1;
        font-size: 14px;
        font-weight: bold;
        position: relative;
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

    .linker:focus {
        color: deepskyblue;
    }
</style>