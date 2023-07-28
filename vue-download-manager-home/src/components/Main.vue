<template>
    <div style="position:relative;">
        <DengLu @denglu-click="dengluClick" style="position:absolute;"></DengLu>
        <Loading :isShowLoading="isShowLoading" style="position: absolute;"></Loading>
    </div>
</template>

<script>
import DengLu from '../component/DengLu.vue'
import Loading from '../component/Loading.vue'
    export default{
        name:'MainView',
        components:{
        DengLu,
        Loading
    },
    data(){
        return {
            isShowLoading:true
        }
    },
    mounted(){
        //window.electron.funAdd()
            const _this = this
            var timer = setInterval(function(){
            _this.isShowLoading = false
            clearInterval(timer)
        },3000)
    },
    methods:{
        dengluClick(){
            this.isShowLoading = true
            const _this = this
            var timer = setInterval(function(){
            _this.isShowLoading = false
            clearInterval(timer)
        },3000)
        },

        loadingTimer(){
            const _this = this
            var timer = setInterval(function(){
            _this.isShowLoading = false
            clearInterval(timer)
        },3000)
       }
     }
   }
</script>

<style lang="scss" scoped>

</style>