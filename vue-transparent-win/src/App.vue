<template>
    <router-view class="drag"></router-view>
</template>

<script>
    //import Progress from './components/Progress.vue'
    //import ChoseFileComponent from './components/ChoseFileComponent.vue'
    export default {
        name: 'App',
         //components: {
         //    Progress,
         //    ChoseFileComponent
         //},

        data() {
            return {
                pages: [
                    { page: 0, hasIcon: false, title: "title0", content: 'content0' },
                    { page: 1, hasIcon: true, title: "title1", content: 'This is Privacy.' },
                    { page: 2, hasIcon: true, title: "title2", content: 'This is ChoseFile.' },
                    { page: 3, hasIcon: true, title: "title3", content: 'This is Progress.' }],
                    currentPage:0
            }
        },

        methods: {

        }
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

    .drag {
        -webkit-app-region: drag;
    }

</style>
