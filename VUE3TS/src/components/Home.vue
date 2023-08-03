<template>
    <div class="help-main" style="width:100%;height:100%;">
        <div class="lunbo">
            <ArrowSwipe class="switch-left" @click="leftClick"></ArrowSwipe>
            <div class="tool-images" ref="myContainer">

                <div class="wrapper" :style="{width: state.wrapperWidth + 'px'}">
                    <div class="div-imgs" v-for="(item,index) in toolImgs" :key="index" :style="{width:state.imgWidth+'px'}" @mouseenter="mouseEnter($event,index)" @mouseleave="mouseLeave($event,index)" style="height:100%; float: left; display: flex; align-items: center;">
                        <img :src="item.src" class="tool" />
                    </div>
                </div>
            </div>
            <ArrowSwipe class="switch-right" :isLeft="state.isLeft" @click="rightClick"></ArrowSwipe>
        </div>
        <div class="tips-container" :class="{'hidden-tips':state.isHiddenTips}">
            <div class="coverTips">
                <div class="outerCircle">
                    <div class="innerCircle">
                            {{ toolImgs[state.currentIndex].content }}
                    </div>
                </div>
            </div>
            <div class="triangle"></div>
        </div>
        <LoadingWhite v-if="state.isShowLoading" style="position:absolute;"></LoadingWhite>
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive, onMounted } from 'vue'
    import ArrowSwipe from '../component/ArrowSwipe.vue'
    import LoadingWhite from '../component/LoadingWhite.vue'

const myContainer = ref<HTMLInputElement | null>(null)

const toolImgs = reactive(
    [
                    { src: require("@/assets/tools/tool1.png"),name:'img1',content:'This is img1'},
                    { src: require("@/assets/tools/tool1.png"),name:'img2',content:'This is img2'},
                    { src: require("@/assets/tools/tool1.png"),name:'img3',content:'This is img3'},
                    { src: require("@/assets/tools/tool1.png"),name:'img4',content:'This is img4'},
                    { src: require("@/assets/tools/tool1.png"),name:'img5',content:'This is img5'},
                    { src: require("@/assets/tools/tool1.png"),name:'img6',content:'This is img6'},
                    { src: require("@/assets/tools/tool1.png"),name:'img7',content:'This is img7'},
                    { src: require("@/assets/tools/tool1.png"),name:'img8',content:'This is img8'},
                    { src: require("@/assets/tools/tool1.png"),name:'img9',content:'This is img9'},
                    { src: require("@/assets/tools/tool1.png"),name:'img10',content:'This is img10'},
            ]
)


// function  loadingTimer(){
//             var timer = setInterval(function(){
//                 state.isShowLoading = false
//                 clearInterval(timer)
//         },3000)
//        }

onMounted(() => {
   //loadingTimer()
})

defineExpose({
    myContainer
})
const state = reactive({
    isLeft:false,
    wrapperWidth:0,
    imgWidth:0,
    clickCount:0,
    isQuickClick:false,
    isHiddenTips:true,
    currentIndex:0,
    isShowLoading:true,
})


onMounted( () => {
      let containerWidth = myContainer?.value?.offsetWidth;
      state.imgWidth = (containerWidth?containerWidth:0) / 6;
      state.wrapperWidth = state.imgWidth * toolImgs.length;
      console.log("imgWidth:"+state.imgWidth)
      console.log("containerWidth:"+containerWidth)
})

function changeLeft(isLeftClick: boolean){
          if(isLeftClick){
            state.clickCount++;
          }else{
            state.clickCount--;
          }
          state.isQuickClick = true;
          let _wrapper:HTMLElement | null = document.querySelector(".wrapper");
          let offLeft = `-${state.imgWidth * state.clickCount}px`;
          if(_wrapper){
            _wrapper.style.left = offLeft;
          }
          setTimeout(function(){
            state.isQuickClick = false;
          },1000);
      }

function leftClick(){
          let imgsLen = toolImgs.length;
          if(!state.isQuickClick){
              if(imgsLen>6&&(state.clickCount+6)<imgsLen){
                    changeLeft(true);
                }
          }
          
      }

function rightClick(){
          if(!state.isQuickClick){
              if(state.clickCount>0){
                changeLeft(false);
          }
         }         
      }

function  mouseEnter(objectEvent:object,index:number){
          let _helpMain:HTMLElement | null = document.querySelector(".help-main");
          let _coverTips:HTMLElement | null = document.querySelector(".coverTips");
          let _triangle:HTMLElement | null = document.querySelector(".triangle");
          let containerWidth = myContainer?.value?.offsetWidth? myContainer.value.offsetWidth:0;
          let movableWidth = containerWidth - 400;
          let singleItemWidth = movableWidth / 5;
          let baseWidth = _helpMain?_helpMain.offsetWidth * 0.05+20:0;
          if(_coverTips){
            _coverTips.style.marginLeft = baseWidth + singleItemWidth * (index - state.clickCount)+'px';
          }
          if(_triangle){
            _triangle.style.marginLeft = baseWidth + state.imgWidth/2 + state.imgWidth * (index-state.clickCount) +'px';
          }
          state.isHiddenTips = false;
          state.currentIndex = index;
      }

function mouseLeave(objectEvent:object,index:number){
          console.log("come out:"+index)
          state.isHiddenTips = true;
      }
</script>

<script lang="ts">
    export default {
        name: "HomeVue",
    }
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
        //padding: 5px;
        line-height: 30px;
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
