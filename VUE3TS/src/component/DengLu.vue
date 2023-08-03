<template>
        <div class="container">
            <div class="item"></div>
            <div class="outer item"></div>
            <div class="middle-one item"></div>
            <div class="middle-two item"></div>
            <div class="inner type-1 item">
                <div class="text-dl">Login</div>
                <div class="div-mm">
                    <span class="text-mm">Password:</span>
                    <input type="password" class="input-dl no-drag" />
                </div>
                <span class="text-wjmm">Forget password?</span>
                <LLButton class="llbutton" :name="'login'" @btn-click="clickDl"></LLButton>
            </div>
        </div>
</template>

<script>
 
import LLButton from '../component/LLButton.vue'

export default {
  name: "DengLu",
  components:{
      LLButton,
  },

  methods:{
    clickDl(){
        this.$emit('denglu-click')
    }
 }
};

</script>

<style lang="scss" scoped>
    $colors:#fff,#fff,#d3f2fb,#1291dc,#fff;
    $margins:0px,0px,10px,35px,50px;
    $width:500px;
    $height:250px;
    $radius:20px;
    .container {
        width: 100%;
        height: 100%;
        position:relative;
        display:flex;
        align-items:center;
    }


    /*box-shadow: 0 0 50px 40px rgba(255, 255, 255, 0.8);*/
    .item {
        @for $i from 1 through length($colors) {

            &:nth-child(#{$i}) {
                width: $width - nth($margins,$i);
                height: $height - nth($margins,$i);
                background-color: nth($colors,$i);
                border-radius: $radius - $i*2;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }

            &:nth-child(1) {
                box-shadow: 0 0 50px 40px rgba(255, 255, 255, 0.8);
            }

            &:nth-child(2) {
                box-shadow: 1px 1px 25px #000;
            }
        }
    }

    .inner{
        text-align:center;
    }

    .middle-one::before {
        content: "";
        width: 100%;
        height: 100%;
        border-radius: 20px;
        border-radius: 20px;
        background: linear-gradient(to bottom, #cbecf8,#6ba8d6,#cbecf8);
        left: 0px;
        top: 0px;
        position: absolute;
    }

    .text-dl {
        margin-top:20px;
    }

    .text-wjmm {
        line-height: 40px;
        font-size: 14px;
    }

    .text-mm{
        margin-right:10px;
    }

    .div-mm {
        margin-top: 20px;
        margin-bottom: 10px;
    }

    .input-dl {
        height: 20px;
        width: 200px;
        overflow: hidden;
        border-radius: 6px;
        outline-style: none;
        border-left-width: 2px;
        border-left-color: lightgrey;
        border-right-width: 0px;
        border-top-color: lightgrey;
        border-bottom-width: 0px;
    }

    .llbutton{
        margin:10px auto;
    }

</style>
