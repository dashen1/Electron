<template>
    <div class="content">
        <router-view class="middle_content"></router-view>
    </div>
</template>

<script>
    export default{
        name:'MainVue'
    }

</script>

<style lang="scss" scoped>
    $url-prefix: "../assets";
    .content {
        width: 100%;
        height: calc(100vh - 140px);
        background-image: url(($url-prefix)+"/images/home_bg3.png"),url(($url-prefix)+"/images/home_bg2.png"),url(($url-prefix)+"/images/home_bg1.png"),url(($url-prefix)+"/images/home_bg0.png");
        background-repeat: no-repeat no-repeat;
        background-size: cover;
        position: relative;
    }

    .middle_content {
        width: 100%;
        height: calc(100vh - 140px);
    }
</style>