<template>

    <div class="shadow">
        <div class="win">
            <div class="header">Hello this is Child Vue.</div>
            <div class="content">
                <div class="files">
                    <h1>You are H1</h1>
                    hello
                    <!--<iframe src="./FileVue" frameborder="2" style="height: 100%; width: 100%"></iframe>-->
                </div>
            </div>
            <div class="bottom">
                <button class="btn_same no_drag btn_Ok" @click="clickOk">OK</button>
                <button class="btn_same no_drag btn_reject" @click="clickClose">Abbrechen</button>
            </div>
        </div>
    </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'
    //import TreeChart from "vue-tree-chart-3"
    //import file from "../assets/file.png"
    window.DM_Object = { name: "objectVue", age: 21 }
    export default {
        name: 'ChildWindowVue',
        //components: {
        //    TreeChart
        //},
   //     data() {
   //         return {
   //             treeData: {
   //                 name: 'root',
   //                 image_url: file,
   //                 class: ["rootNode"],
   //                 children: [
   //                     {
   //                         name: 'children1',
   //                         image_url: file
   //                     },
   //                     {
   //                         name: 'children2',
   //                         image_url: file,
   //                         mate: [{
   //                             name: 'mate',
   //                             image_url: file
   //                         }],
   //                         children: [
   //                             {
   //                                 name: 'grandchild',
   //                                 image_url: file
   //                             },
   //                             {
   //                                 name: 'grandchild2',
   //                                 image_url: file
   //                             },
   //                             {
   //                                 name: 'grandchild3',
   //                                 image_url: file
   //                             }
   //                         ]
   //                     },
   //                     {
   //                         name: 'children3',
   //                         image_url: file
   //                     }
   //                 ]
			//}
   //         }
   //     },
        mounted(){
            //window.electronAPI.showNewWindow()
        },
        methods: {
            clickOk(){
                window.DM_Object.sendMessage("hello")
                //window.electronAPI.closeChildWindowWithUrl('url:www.baidu.com')
            },

            clickClose() {
                window.electronAPI.closeChildWindow()
                console.log('hello')
            }
        }
    }</script>

<style lang="scss" scoped>

    .btn_same:hover {
        cursor: default;
        background: linear-gradient(to bottom, #e57c07,#fdc825);
    }

    .shadow {
        width: 100%;
        height: 100vh;
        background-color: #fff;
    }

    .win {
        height: calc(100vh - 20px);
        width: calc(100% - 20px);
        position: absolute;
        top: 10px;
        left: 10px;
        background: linear-gradient(to bottom,#1291f8,#0860a8,#014171);
    }

    .header {
        width: 80%;
        padding-top: 20px;
        text-align: center;
    }

    .content {
        margin-top: 20px;
    }

    .files {
        width: 80%;
        height: 60vh;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        border: 1px solid grey;
    }

    .bottom {
        text-align: center;
    }

    .no_drag {
        -webkit-app-region: no-drag;
    }

    .btn_same {
        width: 120px;
        height: 30px;
        border-radius: 15px;
        background: linear-gradient(to bottom, #fdc825,#e57c07);
        line-height: 30px;
        text-align: center;
        border: 1px solid #000;
        margin-top: 20px;
    }

    .btn_same:hover {
        cursor: default;
        background: linear-gradient(to bottom, #e57c07,#fdc825);
    }

    .btn_reject {
        margin-left: 10px;
    }
</style>
