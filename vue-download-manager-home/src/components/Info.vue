<template>
    <div>
        <div>Hilfe</div>
        <div class="info-main">
            <div class="info-left-menu">
                <div class="menu-background">
                    <ul id="demo">
                        <TreeItem v-for="(childData,index) in treeData"
                                   :key="index"
                                   class="item"
                                   :item="childData"
                                   :index="index"
                                  :currentIndex="childData.index"
                                  ></TreeItem>
                    </ul>
                </div>
            </div>
            <div class="info-left-content">
                <div class="content-background">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TreeItem from '../component/TreeItem.vue'
  var treeData = [
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
      ];


export default {
  name: "InfoView",
  components:{
      TreeItem
  },
  props:{
      msg:String
  },
  data(){
    return{
        treeData,
    }
  },


    methods:{
      show(){
          alert("hello")
      },

 }
};

</script>

<style lang="scss" scoped>
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
