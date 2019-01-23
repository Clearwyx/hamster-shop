<template>
    <div class="news">
      <span class="news_logo iconfont">&#xe619 仓鼠快报</span>
      <swiper class="news_in" :options="swiperOption_news" ref="mySwiper">
          <swiper-slide class="swiper-slide">新年快乐!</swiper-slide>
          <swiper-slide class="swiper-slide">曲中轻忆梦中人，梦醒时分叹红尘。</swiper-slide>
          <swiper-slide class="swiper-slide">曲中思念今犹在，不见当年梦中人。</swiper-slide>
      </swiper>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import '../../../../node_modules/swiper/dist/css/swiper.min.css'
    export default {
        name: "News",
      data(){
        return{
          swiperOption_news:{
            direction: 'vertical', // 垂直切换选项
              loop: true, // 循环模式选项
              autoplay:{
                disableOnInteraction: false,
              },
            //监听是否创建完成,否则无法滚动
            observer:true,
            observeSlideChildren:true,
          }
        }
      },
      methods:{
       enter(mySwiper){
         mySwiper.autoplay.stop();
       },
       leave(mySwiper){
         mySwiper.autoplay.start();
       }
      },

      mounted(){

      }

    }
</script>

<style scoped lang="less">
  .news{
    display: flex;
    text-align: center;
    line-height: 80px;
    margin-top: 10px;
    .news_in{
      width: 100%;
      height: 80px;
      flex: 1;
      border: 2px solid #ff4e22;
      background-color: #f5f5f5;
      font-size: 30px;
      .swiper-slide{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .news_logo{
      width: 200px;
      display: inline-block;
      font-size: 35px;
      background-color: #ff4e22;
      color: white;
    }

  }

</style>

<style>


</style>
