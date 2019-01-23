<template>
    <div class="banner">
      <swiper :options="swiperOption_banner" ref="mySwiper" v-if="bannerlist">
          <swiper-slide v-for="(item, index) in bannerlist" :key="index">
            <a href="#">
              <img :src="item.pic_url" />
            </a>
          </swiper-slide>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
    export default {
        name: "Banner",
      //swiper的js属性要放到mounted里面,因为只有渲染出来了才能找到,并添加属性!
      data(){
          return{
            swiperOption_banner:{
              loop: true, // 循环模式选项
              autoplay:{
                disableOnInteraction: false,
              },
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              },
              //监听是否创建完成,否则无法滚动
              observer:true,
              observeSlideChildren:true,
            }
          }
      },
      computed:{
        bannerlist(){
          return this.$store.state.indexInfo.banner_list;
        },
        swiper() {
          return this.$refs.mySwiper.swiper
        }
      },
      methods:{

      }

    }


</script>

<style scoped lang="less">



</style>

<!--swiper4,无法在scoped的style中覆盖样式,如果需要覆盖swiper4中的样式,需要再写一个不带scoped的style-->
<style>
    .swiper-container {
      width: 100%;
    }
    .swiper-pagination-bullet-active{
      background-color: white;

    }
</style>
