<template>
    <button class="btn_same" :class="{click_disable:unClickable}" @click="defaultClick">{{name}}</button>
</template>

<script>
export default{
    name:'LLButton',
    props:{
        name:{
            type:String,
            required:true
        },
        unClickable:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        defaultClick(){
            this.$emit('btn-click')
        }
    }
}
</script>

<style lang="scss" scoped>
    .btn_same {
        width: 120px;
        height: 30px;
        border-radius: 15px;
        background: linear-gradient(to bottom, #fdc825,#e57c07);
        line-height: 30px;
        text-align: center;
        border: 1px solid #000;
        -webkit-app-region: no-drag;
    }

    .btn_same:hover {
        cursor: default;
        background: linear-gradient(to bottom, #e57c07,#fdc825);
    }

    .click_disable {
        pointer-events: none;
        background: grey;
    }
</style>