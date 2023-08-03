<template>
    <div class="content">
        <!-- Just like props => Child pass value to Parent -->
        <!-- Child component router-view will return value of Component to parent component (Main.vue) -->
        <router-view class="middle_content" v-slot="{ Component }">
    <!-- <template v-if="Component.name==='WebviewVue'">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </template>
<template v-else>
     <component :is="Component" />
</template> -->
        <keep-alive include="WebviewVue">
            <component :is="Component" />
        </keep-alive>
</router-view>

    </div>
</template>

<script>
    export default{
        name:'MainVue',

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