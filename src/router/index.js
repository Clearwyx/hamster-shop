//2.关于路由一些列的组件(2.1~2.5,五点分别在router文件夹和main.js中)(流程3排除taber高度在App.vue中)
  //2-1:导入Vue和Vue路由
import Vue from 'vue'
import Router from 'vue-router'
  //2-2:声明在Vue中要使用路由
Vue.use(Router);

  //1-3-5:导入路由页面
import index from '../pages/index/index'
import cat from '../pages/cat/cat'
import  cart from '../pages/cart/cart'
import  user from '../pages/user/user'

  //2-3:对外暴露一个路由对象
export default new Router({
  routes: [
    //1-3-6:注册组件
    {path: '/pages/index/index', component: index},
    {path: '/pages/cat/cat', component: cat},
    {path: '/pages/cart/cart', component: cart},
    {path: '/pages/user/user', component: user},
    {path: '/', redirect: '/pages/index/index'},
  ]
})
