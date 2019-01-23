//导入默认样式
import '../static/css/reset.css'
import './assets/css/base.css'
//导入处理移动端事件的fastclick
import FastClick from 'fastclick'

//导入vue和导入根组件
import Vue from 'vue'
import App from './App'

//2-4:接收路由对象
import router from './router'

//导入Vuex对象
import store from './store/index'

//导入vueSwiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

//导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//按需导入
import { Header } from 'mint-ui';

//声明使用
Vue.component(Header.name, Header);

//声明需要使用mint-ui
Vue.use(MintUI);

//申明vue要使用这个swiper
Vue.use(VueAwesomeSwiper);

//?(创建自带)
Vue.config.productionTip = false;

//初始化fastClick
FastClick.attach(document.body);

new Vue({
  el: '#app',
  //2.5-在Vue实例中对路由进行注册
  router,
  //注册vuex对象
  store,
  components: { App },
  template: '<App/>'
});




