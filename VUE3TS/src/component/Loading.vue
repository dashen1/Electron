<template>
    <div class="div-loading" :class="{dl_loading:!isShowLoading}">
        <img class="img_loading" src="~@/assets/images/wait.gif" />
    </div>
</template>

<script>
    export default{
        name:'LoadingView',
        props:{
            isShowLoading:{
                type:Boolean,
                default:true
            }
        },
    }
</script>

<style lang="scss" scoped>
    .div-loading {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .dl_loading {
        display: none;
    }

    .img_loading {
        margin: 0 auto;
    }
</style>