<template>
    <div class="index" ref="index">
     <!--
      <Header ref="header"></Header>
      <Banner ref="banner"></Banner>
      <Notice ref="notice"></Notice>
      <Navbar></Navbar>
      <Seckill></Seckill>
      <News></News>
      <Coupon></Coupon>
      <Groupon></Groupon>
      <Store></Store>
      <Bottom></Bottom>
      -->
      <component :is="item.name" v-for="(item, index) in modulelist" :key="index">
      </component>
      <bottom ref="bottom"></bottom>
    </div>
</template>

<script>
  import search from './Children/Header'
  import Banner from './Children/Banner'
  import Notice from './Children/Notice'
  import Navbar from './Children/Navbar'
  import miaosha from './Children/Seckill'
  import Coupon from './Children/Coupon'
  import topic from './Children/News'
  import single_cat from './Children/Store'
  import pintuan from './Children/Groupon'
  import Bottom from './Children/Bottom'

    export default {
        name: "index",
      //注册组件
      components:{
        search,
        Banner,
        Notice,
        Navbar,
        miaosha,
        Coupon,
        topic,
        single_cat,
        pintuan,
        Bottom,
      },
      //使用后端数据进行动态排序
      computed:{
          //获取动态排序的数据
        modulelist(){
          return this.$store.state.indexInfo.module_list;
        }
      },
      //因为后端数据的nav,是html的默认标签,不能正常的渲染出来,所以我们要对数据进行处理后
      watch:{
          //监听modulelist的变化
        "modulelist": function(){
          //使用forEach遍历modulelist这个数组
          this.modulelist.forEach(function(value, index){
            //将取到的值进行if判断,如果值为'nav'
            if (value.name == 'nav'){
              //则将值更改为'Navbar'
              value.name = 'Navbar'
            }
          });
          //对更改后的数据进行查看
          // console.log(this.modulelist);
        },
      },
      //获取后端的数据并将其存到store(Vuex)中
      created(){
        this.$store.dispatch('requestIndex');
      },

      mounted(){
          this.$nextTick(function () {
            this.$refs.index.style.paddingBottom = this.$store.state.tabbarHeight + 'px';

          })
      },

    }
</script>

<style scoped lang="less">
  .index{
    overflow: hidden;
    background-color: #f5f5f5;
  }
  
</style>
