<template>
    <div style="position:relative;">
        <LoadingWhite v-if="state.isShowLoading" style="position:absolute;"></LoadingWhite>
        <!-- <Loading v-if="state.isShowLoading" style="position: absolute;"></Loading> -->
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import LoadingWhite from '../component/LoadingWhite.vue'
//import Loading from '../component/Loading.vue'

const state = reactive({
    isShowLoading:true
})

function  loadingTimer(){
            var timer = setInterval(function(){
                state.isShowLoading = false
                clearInterval(timer)
        },3000)
       }

onMounted(() => {
   loadingTimer()
})


</script>

<script>
export default {
  name: 'MainVue'
}
</script>


<style lang="scss" scoped>

</style>