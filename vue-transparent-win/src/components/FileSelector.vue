<template>

    <div class="no_drag">
        <TreeChart :json="treeData" />
         <!-- the demo root element -->
    </div>
</template>

<script>
      import TreeChart from "vue-tree-chart-3"
      import file from "../assets/file.png"
    export default {
        name: 'FileSelectorVue',
         components: {
            TreeChart
        },
        data() {
            return {
                treeData: {
                    name: 'root',
                    image_url: file,
                    class: ["rootNode"],
                    children: [
                        {
                            name: 'children1',
                            image_url: file
                        },
                        {
                            name: 'children2',
                            image_url: file,
                            mate: [{
                                name: 'mate',
                                image_url: file
                            }],
                            children: [
                                {
                                    name: 'grandchild',
                                    image_url: file
                                },
                                {
                                    name: 'grandchild2',
                                    image_url: file
                                },
                                {
                                    name: 'grandchild3',
                                    image_url: file
                                }
                            ]
                        },
                        {
                            name: 'children3',
                            image_url: file
                        }
                    ]
			}
            }
        },
    }
</script>

<style lang="scss" scoped>
        .no_drag {
        -webkit-app-region: no-drag;
    }
</style>
