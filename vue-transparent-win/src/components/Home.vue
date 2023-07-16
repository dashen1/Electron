<template>

            <div class="content">Home...
                <button class="no_drag" @click="loadExploer">Open Externel website</button>
                <button class="no_drag" @click="loadData">Get data from web</button>
                <input type="file" class="no_drag" webkitdirectory />
                <div id="whattodo"></div>
            </div>
            <div class="bottom">
                <div class="btn_img" style="float:left;">
                    <img class="class_img" src="~@/assets/B-vtech-logo.jpg" />
                </div>
                <router-link class="btn_same btn_continue no_drag" to="/Installation">Continue</router-link>
                <div class="btn_same btn_close no_drag">Close</div>
            </div>
</template>

<script>
export default {
  name: "HomeView",

  methods:{
      show(){
          alert("hello")
      },

      loadExploer(){
        window.electronAPI.loadExploer('https://www.baidu.com');
      },

      loadData(){
        window.electronAPI.loadData();
      }

 }
};

</script>

<style lang="scss" scoped>

    

    .no_drag {
        -webkit-app-region: no-drag;
    }


    .content {
        width: 100%;
        background: url(../assets/globalBG.png);
        
        height: calc(100vh - 64px);
        border-top-left-radius: 20px; //Բ��20px
        border-top-right-radius: 20px; //Բ��20px
    }

    .bottom {
        width: 100%;
        height: 60px;
        border-top: solid 1px grey;
        position: relative;
        box-shadow: 0px -5px 10px #dedede;
        background: linear-gradient(to bottom, #fefefe, #dedede, #d9d9d9);
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
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
