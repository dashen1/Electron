<template>
    <ul id="demo">
        <TreeItem v-for="(childData,index) in treeData"
                   :key="index"
                   class="item"
                   :item="childData"></TreeItem>
    </ul>
</template>

<script>
import TreeItem from '../component/TreeItem.vue'

       var treeData = [
        {
          name: "My Tree",
          children: [
            {
              name: "child folder"
            },
            {
              name: "child folder"
            }
          ]
        },
        {
          name: "My Tree",
          children: [
            {
              name: "child folder"
            },
            {
              name: "child folder"
            }
          ]
        }
      ];
export default{
    name:"DownloadCenter",
    components:{
        TreeItem
    },
    data(){
        return{
            treeData
        }
    },
    mounted(){
        alert(this.treeData.length)
    },
    methods:{
        makeFolder(){

        },

        addItem(item){
            console.log(item)
        }
    }
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
