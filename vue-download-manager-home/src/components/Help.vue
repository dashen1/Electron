<template>
    <div class="help-main" style="width:100%;height:100%;">
        <div class="lunbo">
            <ArrowSwipe class="switch-left" @click="leftClick"></ArrowSwipe>
            <div class="tool-images" ref="myContainer">

                <div class="wrapper" :style="{width: wrapperWidth + 'px'}">
                    <div class="div-imgs" v-for="(item,index) in toolImgs" :key="index" :style="{width:imgWidth+'px'}" @mouseenter="mouseEnter($event,index)" @mouseleave="mouseLeave($event,index)" style="height:100%; float: left; display: flex; align-items: center;">
                        <img :src="item.src" class="tool" />
                    </div>
                </div>
            </div>
            <ArrowSwipe class="switch-right" :isLeft="isLeft" @click="rightClick"></ArrowSwipe>
        </div>
        <div class="tips-container" :class="{'hidden-tips':isHiddenTips}">
            <div class="coverTips">
                <div class="outerCircle">
                    <div class="innerCircle"></div>
                </div>
            </div>
            <div class="triangle"></div>
        </div>
    </div>
</template>

<script>
//const log = require('electron-log');
    import ArrowSwipe from '../component/ArrowSwipe.vue'
export default {
  name: "HelpView",
  components:{
      ArrowSwipe
  },
  props:{
      msg:String
  },
    data(){
        return {
            isLeft:false,
            toolImgs: [
                    { src: require("@/assets/tools/tool1.png"),name:'img1'},
                    { src: require("@/assets/tools/tool1.png"),name:'img2'},
                    { src: require("@/assets/tools/tool1.png"),name:'img3'},
                    { src: require("@/assets/tools/tool1.png"),name:'img4'},
                    { src: require("@/assets/tools/tool1.png"),name:'img5'},
                    { src: require("@/assets/tools/tool1.png"),name:'img6'},
                    { src: require("@/assets/tools/tool1.png"),name:'img7'},
                    { src: require("@/assets/tools/tool1.png"),name:'img8'},
                    { src: require("@/assets/tools/tool1.png"),name:'img9'},
                    { src: require("@/assets/tools/tool1.png"),name:'img10'},
            ],
            wrapperWidth:0,
            imgWidth:0,
            clickCount:0,
            isQuickClick:false,
            isHiddenTips:true,
        }
    },
  mounted(){
      let containerWidth = this.$refs.myContainer.offsetWidth;
      this.imgWidth = containerWidth / 6;
      this.wrapperWidth = this.imgWidth * this.toolImgs.length;
  },
  computed:{
      
  },
    methods:{

        changeLeft(isLeftClick){
          if(isLeftClick){
              this.clickCount++;
          }else{
              this.clickCount--;
          }
          this.isQuickClick = true;
          let _wrapper = document.querySelector(".wrapper");
          let offLeft = `-${this.imgWidth * this.clickCount}px`;
          _wrapper.style.left = offLeft;
          const _this = this
          setTimeout(function(){
             _this.isQuickClick = false;
          },1000);
      },

      leftClick(){
          let imgsLen = this.toolImgs.length;
          if(!this.isQuickClick){
              if(imgsLen>6&&(this.clickCount+6)<imgsLen){
                    this.changeLeft(true);
                 }
          }
          
      },

      rightClick(){
          if(!this.isQuickClick){
              if(this.clickCount>0){
                this.changeLeft(false);
          }
         }         
      },

      mouseEnter(objectEvent,index){
          console.log("come in"+index)
          let _helpMain = document.querySelector(".help-main");
          let _coverTips = document.querySelector(".coverTips");
          let _triangle = document.querySelector(".triangle");
          let containerWidth = this.$refs.myContainer.offsetWidth;
          let movableWidth = containerWidth - 400;
          let singleItemWidth = movableWidth / 5;
          let baseWidth = _helpMain.offsetWidth * 0.05+20;
          _coverTips.style.marginLeft = baseWidth + singleItemWidth * (index - this.clickCount)+'px';
          _triangle.style.marginLeft = baseWidth + this.imgWidth/2 + this.imgWidth * (index-this.clickCount) +'px';
          this.isHiddenTips = false;
      },
      mouseLeave(objectEvent,index){
          console.log("come out:"+index)
          this.isHiddenTips = true;
      }
 }
};

</script>

<style lang="scss" scoped>
    .lunbo {
        width: 90%;
        height: 100px;
        display: flex;
        align-items: center;
        //background: #000;
        bottom:20px;
        left: 50%;
        position:absolute;
        transform: translateX(-50%);
    }
    .tool-images {
        height: 100%;
        flex: 1;
        position:relative;
        overflow: hidden;
    }

    .wrapper {
        height: 100%;
        position: absolute;
        left:0px;
        transition: all 1s;
    }

    .tool {
        max-width: 100%; 
        max-height: 100%;
        margin: 0 auto;
    }

    .tips-container {
        position: absolute;
        bottom: 110px;
    }
    .coverTips {
        left: 60px;
    }

    .outerCircle {
        width: 400px;
        height: 40px;
        display: flex;
        align-items: center;
        background-color: goldenrod;
        border-radius: 20px;
    }
    .innerCircle {
        width: 390px;
        height: 30px;
        background-color: aliceblue;
        border-radius: 20px;
        margin: 0 auto;
    }

    .triangle {
        width: 0;
        height: 0;
        border-top: 40px solid goldenrod;
        border-right: 40px solid transparent;
    }

    .hidden-tips{
        display:none;
    }
</style>
