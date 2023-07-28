<template>
    <div>
        <div class="arrow-container">
            <div :class="[isLeft ? 'arrow_triangle_left':'arrow_triangle_right']" @click="clickSwipe"></div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"ArrowSwipeView",
        props:{
            isLeft:{
                type:Boolean,
                default:true
            }
        },
        methods:{
            clickSwipe(){
                this.$emit('clickToSwitchImg')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .arrow-container {
        height: 80px;
        width: 20px;
        border-radius: 20px;
        background-color: #96ceee;
        position: relative;
        display: flex;
        align-items: center;
    }

    .arrow-container:hover {
        background-color: #229be2;
    }

    .arrow_triangle_left {
        width: 0;
        height: 0;
        position: absolute;
        left:50%;
        transform:translateX(-50%);
        border-right: 10px solid #fff;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
    }

    .arrow_triangle_right {
        width: 0;
        height: 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        border-left: 10px solid #fff;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
    }
</style>