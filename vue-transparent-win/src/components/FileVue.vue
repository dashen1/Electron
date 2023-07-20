<!--<template>
    <ul>
        <TreeItem class="item" :model="treeData"></TreeItem>
    </ul>
</template>

<script setup>
    import { ref } from 'vue'
    import TreeItem from './TreeItem.vue'
    const treeData = ref({
        name: 'My Tree',
        children: [
            { name: 'hello' },
            { name: 'world' },
            {
                name: 'child folder',
                children: [
                    {
                        name: 'child folder',
                        children: [{ name: 'hello' }, { name: 'world' }]
                    },
                    { name: 'hello' },
                    { name: 'world' },
                    {
                        name: 'child folder',
                        children: [{ name: 'hello' }, { name: 'world' }]
                    }
                ]
            }
        ]
    })

</script>

<style lang="scss" scoped>
    .no_drag {
        -webkit-app-region: no-drag;
    }

    .item {
        cursor: pointer;
        line-height: 1.5;
    }

    .bold {
        font-weight: bold;
    }
</style>-->