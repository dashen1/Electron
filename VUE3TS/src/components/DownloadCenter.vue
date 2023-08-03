<template>
  <div>
    <DengLu @denglu-click="dengluClick" style="position:absolute;"></DengLu>
    <div style="position:absolute;width:100%;height:100%;">This is DownLoad Center...</div>
    <Loading v-if="state.isShowLoading" style="position: absolute;"></Loading>
  </div>
</template>

<script setup>
  import { reactive, onMounted } from 'vue'
  import Loading from '../component/Loading.vue'
  import DengLu from '../component/DengLu.vue'
  const state = reactive({
    isShowLoading: true
  })

  onMounted(() => {
    var timer = setInterval(function () {
          state.isShowLoading = false
          clearInterval(timer)
      }, 3000)
  })

  function  loadingTimer(){
            var timer = setInterval(function(){
                state.isShowLoading = false
                clearInterval(timer)
        },3000)
       }
       
  function dengluClick(){
    loadingTimer()
}

</script>

<script>
    export default {
        name: "DownloadCenter",
    }

</script>

<style lang="scss" scoped>
  .item {
      cursor: pointer;
      line-height: 1.5;
  }

  .bold {
      font-weight: bold;
  }
</style>
