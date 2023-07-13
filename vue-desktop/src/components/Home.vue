<template>
  <div>
    <div>Home...</div>
    <div><button @click="min">最小化</button></div>
    <div><button @click="openNewWindow">打开子窗口</button></div>
  </div>
</template>

<script>
export default {
  name: 'HomeVue',
  props: {
    msg: String
  },
  methods:{

    min(){
      window.electronAPI.minWindow()
    },

    openNewWindow(){
      window.open("https://www.baidu.com")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
*{
  margin:0;
  padding:0;
}

</style>
