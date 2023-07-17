<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="shadow">
        <div class="win">
            <!--<router-view></router-view>-->
            <div class="content">
                <div><button>返回箭头</button></div>
                <div class="title"><img v-if="pages[currentPage].hasIcon" src="./assets/B-vtech-logo.jpg"/>{{pages[currentPage].title}}</div>
                <div class="middle_content">
                    <div v-if="currentPage === 0">
                        <div>{{pages[currentPage].content}}</div>
                        <button class="no_drag" @click="loadExploer">Open Externel website</button>
                        <button class="no_drag" @click="loadData">Get data from web</button>
                        <input type="file" class="no_drag" webkitdirectory />
                        <div id="whattodo"></div>
                    </div>
                    <div v-if="currentPage === 1">
                        <div>{{pages[currentPage].content}}</div>
                        <div class="browserview"></div>
                    </div>
                    <div v-if="currentPage === 2">
                        <div>{{pages[currentPage].content}}</div>
                        <ChoseFileComponent></ChoseFileComponent>
                    </div>
                    <div v-if="currentPage === 3">
                        <Progress></Progress>
                    </div>
                </div>
                </div>
            <div class="bottom">
                <div class="btn_img" style="float:left;">
                    <img class="class_img" src="~@/assets/B-vtech-logo.jpg" />
                </div>
                <div class="btn_same btn_continue no_drag" @click="clickContinue">Continue</div>
                <!--<router-link class="btn_same btn_continue no_drag" to="/InstallationPrivacy">Continue</router-link>-->
                <div class="btn_same btn_close no_drag">Close</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Progress from './components/Progress.vue'
    import ChoseFileComponent from './components/ChoseFileComponent.vue'
    export default {
        name: 'AppCopy',
         components: {
             Progress,
             ChoseFileComponent
         },

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
            clickContinue() {
                this.currentPage++;
                //if (this.currentPage === 1) {
                //    window.electronAPI.opnWebview()
                //} 
            },

            updateProgress() {
                const progressBar = document.querySelector('.progress');
                console.log(progressBar)
                let count = 0;
                var timer = setInterval(function () {
                    let progressValue = Math.floor(Math.random() * 20);
                    console.log(progressValue)
                    count += progressValue
                    if (count >= 100) count = 100;
                    progressBar.style.width = `${count}%`;
                    if (count === 100) clearInterval(timer);
                }, 1000);

            },

            clickChoseFile() {
                window.electronAPI.openNewWindow()
            }
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

    .shadow {
        width: 100%;
        height: 100vh;
        background-color: #ff0000;
        border-radius: 20px;
        -webkit-app-region: drag;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    .no_drag {
        -webkit-app-region: no-drag;
    }

    a {
        text-decoration: none;
    }

    .win {
        width: calc(100% - 10px);
        height: calc(100vh - 10px);
    }

    .content {
        width: calc(100% - 20px);
        height: calc(100% - 80px);
        padding:10px;
        background: url(./assets/globalBG.png);
        border-top-left-radius: 20px; //Բ��20px
        border-top-right-radius: 20px; //Բ��20px
    }

    .title {
        margin-top: 20px;
        margin-left: 20px;
    }

    .middle_content {
        margin-top: 30px;
        margin-left: 20px;
    }

    /*This is Privacy*/
    .browserview{
        width:600px;
        height:50vh;
        left:100px;
        top:20vh;
        background-color:aquamarine;
    }

    /*This datalist InstallationChoseFile*/
    .input_file {
        height: 20px;
        width: 300px;
        margin-right: 20px;
        overflow: hidden;
    }

    .btn_input {
        width: 160px;
        height: 30px;
        position: absolute;
        border-radius: 15px;
        background: linear-gradient(to bottom, #fdc825,#e57c07);
        line-height: 30px;
        text-align: center;
        border: 1px solid #000;
        margin-left: 20px;
        overflow: hidden;
    }

    .btn_input:hover {
        cursor: default;
        background: linear-gradient(to bottom, #e57c07,#fdc825);
    }

    /*This is Progress*/
    .progress_container {
        width: 80%;
        height: 10px;
        background-color: grey;
        position: relative;
        border-radius: 5px;
    }

    .progress {
        width: 0px;
        height: 10px;
        position: absolute;
        left: 0px;
        border-radius: 5px;
        background-color: lightgreen;
    }
    
    /*This is Progress*/

    .bottom {
        width: 100%;
        height: 60px;
        border-top: solid 1px grey;
        position: relative;
        //box-shadow: 0px -5px 10px #dedede;
        background: linear-gradient(to bottom, #fefefe, #dedede, #d9d9d9);
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        margin: auto;
    }

    .btn_same {
        width: 160px;
        height: 30px;
        position: absolute;
        border-radius: 15px;
        top: 50%;
        transform: translateY(-50%);
        background: linear-gradient(to bottom, #fdc825,#e57c07);
        line-height: 30px;
        text-align: center;
        border: 1px solid #000;
        color: #fff;
    }

    .class_img {
        height: 59px;
        border-bottom-left-radius: 20px;
    }

    .btn_continue {
        right: 15px;
    }

    .btn_close {
        right: 200px;
    }

    .btn_same:hover {
        cursor: default;
        background: linear-gradient(to bottom, #e57c07,#fdc825);
    }

    .click {
        -webkit-app-region: no-drag;
    }
</style>
