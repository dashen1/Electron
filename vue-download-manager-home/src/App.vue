<template>
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="shadow">
        <div class="win">
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Header from './component/Header.vue'
import Main from './component/Main.vue'
import Footer from './component/Footer.vue'
export default {
  name: 'App',
  components: {
    'Header':Header,
    'Main':Main,
    'Footer':Footer
 }
}
</script>

<style lang="scss" scop>
    * {
        margin: 0px;
        padding: 0px;
    }

    .shadow {
        body {
            background-color: rgba(0, 0, 0, 0);
            margin: 0px;
        }

        .win {
            -webkit-app-region: drag;
        }

        .no-drag {
            -webkit-app-region: no-drag;
        }
    }

    </style>

<!--<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>-->
