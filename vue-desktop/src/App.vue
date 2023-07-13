<template>
  <div class="main">AppVue</div>
</template>

<script>
// import HelloWorld from './components/Home.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style lang='scss' scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  *{
    margin:0;
    padding:0;
  }
  .main{
    width:100%;
    height: 100vh;
    background-color: aquamarine;
  }

}
</style>
