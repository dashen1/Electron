<template>
    <div class="shadow">
        <div class="class_body">
            <div class="arrow_left"><img src="~@/assets/images/Arrow_Left.png" @click="click_left" /></div>
            <div class="container">
                <div class="card-box">
                    <div class="card" v-for="(item,index) in imgs" :key="index" :style="[{transform:'rotateY('+item.deg+'deg) translateZ(700px)'},{transition: 'transform 2s ease-in-out'}] ">
                        <img :src="item.src" />
                    </div>
                    <!--<div class="card">
                        <img src="~@/assets/test/home_bg1.png" />
                    </div>
                    <div class="card">
                        <img src="~@/assets/test/home_bg2.png" />
                    </div>-->
                </div>
            </div>
            <div class="arrow_right"><img src="~@/assets/images/Arrow_right.png" @click="click_right" /></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeViewTest",
        props: {

            msg: String
        },
        data() {
            return {
                imgs: [
                    { src: require("@/assets/test/home_bg0.png"), deg: 0 ,transition:'2s'},
                    { src: require("@/assets/test/home_bg1.png"), deg: 120,transition:'2s' },
                    { src: require("@/assets/test/home_bg2.png"), deg: 240,transition:'2s' }],
                //imgs:['home_bg0','home_bg1','home_bg2']
                current:0
            }
        },
        mounted() {
            this.getList()
        },

        methods: {

            getList() {
                let imgList = document.getElementsByClassName('card');
                let itemDeg = 360 / imgList.length;
                for (let i = 0; i < imgList.length; i++) {
                    this.imgs[i].deg = i*itemDeg;
                    //imgList[i].style.transform = 'rotateY(' + i * deg + 'deg) translateZ(700px)';
                }
            },
            click_left() {
                let imgList = document.getElementsByClassName('card');
                let itemDeg = 360 /imgList.length;
                for(let i=0;i<imgList.length;i++){

                    this.imgs[i].deg -= itemDeg;
                    //if(this.imgs[i].deg==-360){
                    //    this.imgs[i].deg = 0;
                    //    his.imgs[i].transition = '0s';
                    //}else{
                    //    this.imgs[i].deg -= itemDeg;
                    //}
                }
            },

            click_right() {
                let imgList = document.getElementsByClassName('card');
                let itemDeg = 360 /imgList.length;
                for(let i=0;i<imgList.length;i++){
                    this.imgs[i].deg += itemDeg;
                }
            }

        }
    };

</script>

<style lang="scss" scoped>
    * {
        margin: 0px;
        padding: 0px;
    }

    .class_body {
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        top: 50%;
        position: relative;
        transform: translateY(-50%);
        /*background: url(./img/2.webp) center;
        background-size: cover;*/
    }

    .arrow_left {
        position: absolute;
        left: 30px;
    }

    .arrow_right {
        position: absolute;
        right: 30px;
    }

    .container {
        width: 600px;
        height: 350px;
        //margin-top: 60px;
        //position: relative;
        background-color: pink;
        perspective: 1000px;
    }

    .card {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .card-box {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transform: rotateY(0) translateZ(-700px);
        background-color: skyblue;
    }

    .card img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    /*    .card:nth-child(1) {
        transform: rotateY(0) translateZ(700px);
    }

    .card:nth-child(2) {
        transform: rotateY(120deg) translateZ(700px);
    }

    .card:nth-child(3) {
        transform: rotateY(240deg) translateZ(700px);
    }*/

    @keyframes cardRotate {
        0%,20% {
            transform: translateZ(-700px) rotateY(0);
        }

        45% {
            transform: translateZ(-700px) rotateY(-120deg);
        }

        75% {
            transform: translateZ(-700px) rotateY(-240deg);
        }

        100% {
            transform: translateZ(-700px) rotateY(-360deg);
        }
    }

    @keyframes cardRotateOne {
        0% {
            transform: translateZ(-700px) rotateY(0);
        }

        100% {
            transform: translateZ(-700px) rotateY(-120deg);
        }
    }

    .img_rotate {
        animation: cardRotateOne 10s cubic-bezier(0.77,0,0.175,1) 1;
    }

    /*.card-box {
        animation: cardRotateOne 10s cubic-bezier(0.77,0,0.175,1) infinite;
    }*/

    .card {
        -webkit-box-reflect: below 15px linear-gradient(transparent 50%,rgba(255,255,255,0.3));
        /* -webkit-box-reflect: below 2px linear-gradient(transparent, rgba(0, 0, 0, .5)); */
    }
</style>
