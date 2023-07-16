<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="shadow">
        <div class="win">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
 // components: {
 //   HelloWorld
 // }
}
</script>

<style lang="scss" scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

    .shadow {
        width: 100%;
        height: 100vh;
        background-color: aquamarine;
        border-radius: 20px;
        -webkit-app-region: drag;
    }
</style>
