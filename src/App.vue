<template>
  <div id="app">
    <!--路由出口:根据导航栏切换内容-->
    <router-view ref="routerView"></router-view>
    <!--底部导航栏:用于切换内容-->
    <TabBar ref="tabbar"></TabBar>
  </div>
</template>

<script>
  import TabBar from './components/TabBar/TabBar'
  //4-6:导入在API文件夹下的index.js中导出的 变量名形式的函数
  import {getNavBar} from "./api/index";

  export default {
  name: 'App',
  components:{
    TabBar
  },
  // 4-6:在created() 生命周期函数中发送网路请求
  created(){
    let NavBar = getNavBar();

  },

/*3.在生命周期函数mounted()中就将高度设置好:
  思路: 获取#app和Tabbar的高度,将高度动态的设置成="前者减去后者获得的高度"
  3-1:给TabBar设置ref="tabber",拿到他的DOM元素
  3-2:在mounted函数中可以获取tabber元素的高度 this.$refs.tabbar.$el.offsetHeight;
  3-3:然后获取#app的高度: 可以直接通过 this.$el.offsetHeight
  3-4: 动态设置#app的高度(如"思路"中所述)
  3-5: 此处难点在于:
      3-5-1:生命周期函数
      3-5-2:如何获取tabbar高度
      3-5-3:如何获取#app高度
      3-5-4:获取后如何设置#app的高度
      3-5-5: 见如下代码,不懂自行百度(一搜就有!)
*/
  mounted(){
    //此方法不能满足所有界面的要求,所以不能使用
    //3.1获取tabbar高度
    // let tabbarHeight = this.$refs.tabbar.$el.offsetHeight;
    //3.2获取#app高度
    // let appHeight = this.$el.offsetHeight;
    //3.3动态设置#app的高度
    // this.$el.style.height = appHeight - tabbarHeight + "px";
    // this.$el.style.paddingBottom = tabbarHeight + "px";

    //获取tabber的高度
    let tabbarHeight = this.$refs.tabbar.$el.offsetHeight;
    //将tabber的高度,转一圈存入state中
    this.$store.dispatch("saveTabBarHeight", tabbarHeight)
  }

}
</script>

<style scoped lang="less">
  #app{
    width: 100%;
    height: 100%;
  }

</style>
