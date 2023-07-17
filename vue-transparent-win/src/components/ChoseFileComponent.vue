<template>
    <div>
        <input class="input_file" type="text" placeholder="c:\Program Files (x86)\VTech" />
        <button class="btn_input no_drag" @click="clickChoseFile">chose your file</button>
    </div>
    <div id="showUrl">137M.</div>
</template>

<script>
export default {
  name: "ChoseFileComponent",
  props:{

      msg:String
  },

    mounted() {
            const _this = this
            this.initBtn(_this)
        },
    methods:{

        clickChoseFile(){
            window.electronAPI.openNewWindow()
        },

        initBtn(_this) {
            let count = 0;
                var timer = setInterval(function () {
                    count++;
                    if (count === 3) {
                    _this.$emit('progressEnd',100);
                        clearInterval(timer);
                    }
                }, 1000);

            },

 }
};

</script>

<style lang="scss" scoped>

    .no_drag {
        -webkit-app-region: no-drag;
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
</style>
