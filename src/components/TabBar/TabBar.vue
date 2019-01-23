<!--关于tabbar详细解说:-->
<!--1.编写项目的底部导航栏(流程2(关于路由)在路由index.js中)
  具体工作:
    1:编写底部导航栏的布局
    2:对布局样式进行修改
    3:使用Vue路由给导航栏添加切换功能
      创建路由步骤:
        3-1:首先给需要添加路由功能的标签添加点击事件
        3-2:点击事件会触发一个方法,这个方法用于切换路由,方法接收"路由页面的路径"
        3-3:在script中将这个方法暴露给外界
        3-4:在pages中创建路由页面(格式为: 一个文件下下一个路由组件)
        3-5:去路由文件中编写路由组件:
      1-3-5:导入路由页面(见1-3-5,router文件的index.js文件中)
      1-3-6:注册组件(见1-3-6,router文件的index.js文件中)
        3-7:可以在switchTo方法中 console.log(path) 测试是否成功
        3-7-1: 点击时控制台打印与传入对于的字符串即为成功
        (恭喜你即将成功!)
        3-8:在switchTo方法中,我们可以打印 this.$router 查看,里面保存了路由的数据
        3-8-1:通过 this.$router.replace(path) 来更改路由保存的地址,从而达到更换路由界面的效果
        3-8-2:(补充) this.$router 与 this.$route 容易混淆,这里进行简单说明:router是可以修改的,但是route不可以修改,因为它是只读的.
     4:所以现在路由可以正常使用了!

-->
<template>
  <div class="tabbar">
    <ul>
      <li @click="switchTo(item.url)"
          v-for="(item, index) in navbarInfo.navs"
          :style="{background: $route.path.includes(item.url) ? '#eee' : 'none'}"
          :key="index"
      >
        <img :src="$route.path.includes(item.url) ? item.active_icon : item.icon">
        <p :style="{color: $route.path.includes(item.url) ? item.active_color : item.color}">{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

    export default {
        name: "TabBar",
      methods:{
        switchTo(path){
          this.$router.replace(path);
        }
      },
      created(){
          this.$store.dispatch('requestNavbat');
      },
      computed: mapState(['navbarInfo']),
    }
</script>

<style scoped lang="less">
  .tabbar{
    border-top: 1px solid #ccc;
    width: 100%;
    height: 110px;
    background-color: whitesmoke;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    text-align: center;
    ul{
      height: 100%;
      list-style: none;
      display: flex;
      li{
        flex-grow: 1;
        padding-top: 16px;
        img{
          width: 50px;
          height: 50px;
        }
        p{
          font-size: 16px;
        }
      }
    }

  }
</style>
