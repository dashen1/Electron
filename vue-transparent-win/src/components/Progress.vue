<template>
    <div class="progress_win">
        <div class="progress_container">
            <div class="progress"></div>
        </div>
        <span class="progress_text"></span>
        <div>hello:{{message}}</div>
    </div>
</template>

<script>
export default {
  name: "ProgressComponent",
  props:['message','information'],


        mounted() {
          const _this = this
          this.updateProgress(_this)
        },
    methods:{
    
      updateProgress(_this){
            const progressBar = document.querySelector('.progress');
            const showProgress = document.querySelector('.progress_text');
            let count = 0;
            var timer = setInterval(function () {
            let progressValue = Math.floor(Math.random() * 20);
                count += progressValue;
                console.log(count)
                if (count >= 100) count = 100;
                progressBar.style.width = `${count}%`;
                showProgress.innerText = `${count} %`;
                if (count === 100) {
                    _this.$emit('progressEnd',100);
                    clearInterval(timer);
                }
        },1000); 

      }



 }
};

</script>

<style lang="scss" scoped>

    .progress_win {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
    }

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

    .progress_text {
        margin-left:10px;
    }

</style>
