<!--���⣺���������forѭ���Ļ������� isOpen �Ṳ��-->
<!--<template>
        <ul v-for="item in contents" :key="item.index">
            <li>
                <div :class="{bold: isFolder}">
                    <div class="div-toggle" :class="{close:isOpen}" @click="toggle(item)" v-if="isFolder(item)">{{ isOpen ? '-' : '+' }}</div>
                    <router-link class="linker" :class="item.index===checkedIndex?'active':''" :to="item.link" @click="clickLink(item.index)">{{ item.name }}</router-link>
                </div>
                <div v-show="isOpen">
                    <TreeItemVue class="class-item" :contents="item.children"></TreeItemVue>
                </div>
            </li>
        </ul>
</template>-->

<template>
    <li>
        <div :class="{bold: isFolder(item), onMounted}">
            <div class="div-toggle" :class="{close:state.isOpen}" @click="toggle(item)" v-if="isFolder(item)">{{ state.isOpen ? '-' : '+' }}</div>
            <router-link class="linker" :class="item.index===state.checkedIndex?'active':''" :to="item.link" @click="clickLink(item.index)">{{ item.name }}</router-link>
        </div>
        <ul v-show="state.isOpen" v-if="isFolder(item)">
            <TreeItemVue class="class-item"
                         v-for="child in item.children"
                         :key="child.index"
                         :item="child"></TreeItemVue>
        </ul>
    </li>
</template>

<script setup>

    import { reactive, onMounted } from 'vue'
    import bus from 'vue3-eventbus'

        
    defineProps(['item'])
    const state = reactive({
        isOpen: true,
        checkedIndex: -1,
    })

    // const isFolder = computed(() => {
    //     return function(obj){
    //         return obj.children && obj.children.length
    //     }
    // })

function isFolder(obj){
    return obj.children && obj.children.length
}

    onMounted(() => {
        bus.on('currentChecked', (index) => {
                state.checkedIndex = index;
            });
    })
    
    function  toggle(obj) {
                if (isFolder(obj)) {
                    state.isOpen = !state.isOpen;
                }
            }
           
    function  clickLink(index) {
                bus.emit('currentChecked', index)
            }
</script>

<script>
    export default {
        name: "TreeItemVue",
        inheritAttrs: false,
    }
</script>
<style>
    .class-item {
        cursor: pointer;
    }

    .linker {
        text-decoration: none;
        color: #9780ad;
    }

    .div-toggle {
        display: inline-block;
        width: 14px;
        cursor: pointer;
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

    li {
        list-style: none;
    }
</style>