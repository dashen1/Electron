<template>
    <li>
        <div :class="{bold: isFolder}">
            <div class="div-toggle" :class="{close:isOpen}" @click="toggle" v-if="isFolder">{{ isOpen ? '-' : '+' }}</div>
            <router-link class="linker" :class="currentIndex===checkedIndex?'active':''" :to="item.link" @click="clickLink(item.index)">{{ item.name }}</router-link>
        </div>
        <ul v-show="isOpen" v-if="isFolder">
            <TreeItemVue class="item"
                       v-for="(child, indice) in item.children"
                       :key="indice"
                       :item="child"
                       :index="indice"
                         :currentIndex="child.index"
                       >
            </TreeItemVue>
        </ul>
    </li>
</template>

<script>

    import bus from 'vue3-eventbus'
    export default{
        name:"TreeItemVue",
        props:{
            item:Object,
            currentIndex:Number
        },
        data(){
            return {
                isOpen:true,
                checkedIndex:-1
            }
        },
        computed:{
            isFolder(){
                return this.item.children && this.item.children.length
            },
        },
        mounted(){
            bus.on('currentChecked',(index) => {
            this.checkedIndex = index;
    });
  },
        methods:{
            toggle(){
                if(this.isFolder){
                    this.isOpen = !this.isOpen;
                }
            },

            clickLink(index){
                bus.emit('currentChecked',index)
            }
            
        }
    }
</script>

<style>
    .item {
        cursor: pointer;
    }

    .linker {
        text-decoration: none;
        color: #9780ad;
    }

    .div-toggle {
        display: inline-block;
        width: 14px;
        text-align: center;
        color: #da0000;
    }
    .bold {
        font-weight: bold;
    }

    .active {
        color: #4495ea;
    }

    .close {
        color: #1395e0;
    }


    ul {
        padding-left: 1em;
        line-height: 1.5em;
        list-style: none;
    }
</style>