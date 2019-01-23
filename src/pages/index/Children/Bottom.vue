<template>
    <div class="bottom">
      <p>本站所用内容仅做个人作品展示</p>
      <transition name="slide-fade">
        <div class="wx" v-show="flag">
          <img src="../../../assets/images/wx.jpg"/>
        </div>
      </transition>

      <div class="xx">
        <div class="animation" @click="git()">
          <div class="top">
            <div class="car1"></div>
            <div class="car2"></div>
          </div>
          <div class="down">
            <div class="car3"></div>
            <div class="car4"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import animate from 'animate'
    export default {
        name: "Bottom",
      data(){
          return{
            flag: false
          }
      },
      methods:{
        git(){
          this.flag = !this.flag
        }
      }
    }
</script>

<style scoped lang="less">

  .wx{
    width: 600px;
    position: absolute;
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%);
    z-index: 6688;
    img{
      border-radius: 25px;
    }
  }
  .bottom{
    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
      transform: translateX(10px);
      opacity: 0;
    }
    position: relative;
    background-color: black;
    width: 100%;
    height: 250px;
    text-align: center;
    font-size: 45px;
    padding-top: 20px;
    color: white;
    box-sizing: border-box;
      .animation{
        margin: 70px auto;
        font-size: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotateZ(45deg);
      }
    .car1, .car2, .car3, .car4{
      position: fixed;
      width: 50px;
      height: 50px;
      display: inline-block;
      border-radius: 5%;
    }
    .car1{
      z-index: 1;
      background-color: red;
      transform: translateX(-50px) translateY(-50px);
      animation: Acar1 2s ease 0.5s infinite;
    }
    .car2{
      z-index: 1;
      background-color: skyblue;
      transform: translateX(0px) translateY(-50px);
      animation: Acar2 2s ease 0.5s infinite;
    }
    .car3{

      background-color: orange;
      transform: translateX(-50px) translateY(0px);
      animation: Acar4 2s ease 0.5s infinite;
    }
    .car4{
      z-index: 1;
      background-color: white;
      transform: translateX(0px) translateY(0px);
      animation: Acar3 2s ease 0.5s infinite;
    }
    @keyframes Acar1 {
      0%{
        transform: translateX(-50px) translateY(-50px);
      }
      25%{
        transform: translateX(0px) translateY(-50px);
      }
      50%{
        transform: translateX(0px) translateY(0px);
      }
      75%{
        transform: translateX(-50px) translateY(0px);
      }
      100%{
        transform: translateX(-50px) translateY(-50px);
      }

    }
    @keyframes Acar2 {
      0% {
        transform: translateX(0px) translateY(-50px);
      }
      25% {
        transform: translateX(0px) translateY(0px);
      }
      50% {
        transform: translateX(-50px) translateY(0px);
      }
      75% {
        transform: translateX(-50px) translateY(-50px);
      }
      100% {
        transform: translateX(0px) translateY(-50px);
      }
    }
    @keyframes Acar3 {
      0% {
        transform: translateX(0px) translateY(0px);
      }
      25% {
        transform: translateX(-50px) translateY(0px);
      }
      50% {
        transform: translateX(-50px) translateY(-50px);
      }
      75% {
        transform: translateX(0px) translateY(-50px);
      }
      100% {
        transform: translateX(0px) translateY(0px);
      }
    }
    @keyframes Acar4 {
      0% {
        transform: translateX(-50px) translateY(0px);
      }
      25% {
        transform: translateX(-50px) translateY(-50px);
      }
      50% {
        transform: translateX(0px) translateY(-50px);
      }
      75% {
        transform: translateX(0px) translateY(0px);
      }
      100% {
        transform: translateX(-50px) translateY(0px);
      }
    }
  }
</style>
