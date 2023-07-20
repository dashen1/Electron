<!--<template>
    <li>
        <div :class="{ bold: isFolder }"
             @click="toggle"
             @dblclick="changeType">
            {{ model.name }}
            <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
        </div>
        <ul v-show="isOpen" v-if="isFolder">-->
            <!--
          A component can recursively render itself using its
          "name" option (inferred from filename if using SFC)
        -->
            <!--<TreeItem class="item"
                      v-for="(model,index) in modelvalue.children"
                      :model="model" :key="index">
            </TreeItem>-->
            <!--<li class="add" @click="addChild">+</li>
        </ul>
    </li>
</template>

<script setup>
    import { ref, computed } from 'vue'

    const props = defineProps({
        models: Object
    })

    //const modelvalue = computed({
    //    get() {
    //        return props.model
    //    },
    //    set(value) {
    //        this.$emit('update:model',value)
    //    }
    //})

    const isOpen = ref(false)
    const isFolder = computed(() => {
        return props.models.children && props.models.children.length
    })

    function toggle() {
        isOpen.value = !isOpen.value
    }

    function changeType() {
        if (!isFolder.value) {
            props.models.children = []
            addChild()
            isOpen.value = true
        }
    }

    function addChild() {
        props.models.children.push({ name: 'new stuff' })
    }
</script>
<style lang="scss" scoped>

</style>-->