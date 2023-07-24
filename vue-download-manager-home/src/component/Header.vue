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
            <div class="nav_menu_home nav_menu_css"><router-link to="/Home" class="no_drag linker">Home</router-link></div>
            <div class="nav_menu_center nav_menu_css"><router-link to="/DownloadCenter" class="no_drag linker nav_route">Download Center</router-link></div>
            <div class="nav_menu_info nav_menu_css"><router-link to="/Info" class="no_drag linker">Info</router-link></div>
            <div class="nav_menu_help nav_menu_css"><router-link to="/Help" class="no_drag linker">Help</router-link></div>
            <div class="nav_menu_right_corner"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HeaderView'
    }
</script>

<style></style>