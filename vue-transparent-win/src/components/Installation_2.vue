<template>
    <div class="shadow">
        <div class="win">
            <!--<img src="~@/assets/B-vtech-logo.jpg" />-->
            <div class="content">Installation2...
                <div>This is content text!</div>
                <div>
                    <input class="input_file" type="text" placeholder="c:\Program Files (x86)\VTech" />
                    <button class="btn_input no_drag" @click="clickChoseFile">chose your file</button>
                </div>
            </div>
            <div class="bottom">
                <div class="btn_img" style="float:left;"><img class="class_img" src="~@/assets/B-vtech-logo.jpg" /></div>
                <!--<img class="class_img click" src="~@/assets/btn-cancel-idle.png" @click="show"/>-->

                <router-link class="btn_same btn_continue no_drag" to="/Downloading">Continue</router-link>
                <div class="btn_same btn_close no_drag">Close</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "InstallationView2",
  props:{

      msg:String
  },

    mounted() {
            //alert("hello")
        },
    methods:{

        clickChoseFile(){
            window.electronAPI.openNewWindow()
        }

 }
};

</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .shadow {
        body {
            background-color: rgba(0, 0, 0, 0);
        }

        .win {
            //����������ʽ��Բ��Ϊ20px
            width: 100%; //ȥ�����Ҽ���5px
            height: 100vh; //ȥ�����¼���5px
            background-color: #4cff00; //���õ�ɫΪ��ɫ
            border-radius: 20px; //Բ��20px
            //margin: 5px; //����������Ϊ5px
            background: url(../assets/globalBG.png);
            -webkit-app-region: drag; //���϶�����
        }

        .no_drag {
            -webkit-app-region: no-drag;
        }

        .content {
            width: 100%;
            height: calc(100vh - 64px);
            padding-left: 60px;
            padding-right: 60px;
        }

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

        .bottom {
            width: 100%;
            height: 60px;
            border-top: solid 1px grey;
            position: relative;
            //display: flex;
            /*�����Ӽ�Ԫ�ش�ֱ����*/
            //align-items: center;
        }

        .btn_same {
            width: 160px;
            height: 30px;
            position: absolute;
            border-radius: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: linear-gradient(to bottom, #bebebe,#6c6c6c);
            line-height: 30px;
            text-align: center;
            border: 1px solid #000;
        }

        .btn_same {
            cursor: default;
        }

        .class_img {
            height: 59px;
        }

        .btn_continue {
            right: 15px;
        }

        .btn_close {
            right: 200px;
        }

        .btn_ok:hover {
            background: linear-gradient(to bottom, #e57c07,#fdc825);
        }

        .btn_ok {
            background: linear-gradient(to bottom, #fdc825,#e57c07);
        }

        .click {
            -webkit-app-region: no-drag;
        }
    }
</style>
