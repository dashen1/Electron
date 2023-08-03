<template>
    <div>
        <div style="position:absolute;width:100%;height:100%;" class="no-drag">
            <div>Hilfe</div>
            <div class="info-main">
                <div class="info-left-menu">
                    <div class="menu-background">
                        <TreeItem v-for="childData in treeData" :key="childData.index"
                        :item="childData"></TreeItem>
                    </div>
                </div>
                <div class="info-left-content">
                    <div class="content-background">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
        <Loading v-if="state.isShowLoading" style="position: absolute;"></Loading>
    </div>
</template>

<script setup>
import { reactive, onMounted, onActivated, onDeactivated } from 'vue'
    import TreeItem from '../component/TreeItem.vue'
    import Loading from '../component/Loading.vue'

const treeData = reactive(
    [
        {
          name: "My Tree A",
          link:"/Info/a",
          index:0,
          children: [
            {
              name: "child folder",
              link:"/Info/b",
              index:1,
            },
            {
              name: "child folder",
              link:"/Info/c",
              index:2,
            }
          ]
        },
        {
          name: "My Tree B",
          link:"/Info/d",
          index:3,
          children: [
            {
              name: "child folder",
              link:"/Info/e",
              index:4,
              children: [
                {
                    name: "child folder",
                    link:"/Info/f",
                    index:5,
                },
                {
                    name: "child folder",
                    link:"/Info/a",
                    index:6,
                }
          ]
            }
          ]
        }
      ]
)

const state = reactive({
    isShowLoading: true
})
    
onMounted(() => {
    var timer = setInterval(function () {
    state.isShowLoading = false
    clearInterval(timer)
    }, 3000)
})


onActivated(() => {
    window.electron.printLog("print-log","info","onActivated in Info");
    
})

onDeactivated(() => {
    window.electron.printLog("print-log","info","onDeactivated in info")
})

</script>

<script>
export default {
  name: "InfoView",
}
</script>

<style lang="scss" scoped>
    .no-drag {
        -webkit-app-region: no-drag;
    }
    .info-main {
        width: 90%;
        height: 80%;
        display:flex;
        background-color: #1395e0;
        margin: 0 auto;
        border-radius: 10px;
    }

    .white-background {
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        margin: 10px;
        background-color: #fff;
        border-radius: 10px;
    }

    .info-left-menu {
        width: 30%;
        margin: 10px;
        background-color: goldenrod;
        border-radius: 10px;

        .menu-background {
            @extend .white-background
        }
    }

    .info-left-content {
        margin: 10px 10px 10px 0px;
        flex: 1;
        background-color: goldenrod;
        border-radius: 10px;

        .content-background {
            @extend .white-background
        }
    }

    .item {
        cursor: pointer;
        line-height: 1.5;
    }

    .bold {
        font-weight: bold;
    }

    ul{
        list-style:none
    }

    #demo {
        padding-top: 10px;
    }
</style>
