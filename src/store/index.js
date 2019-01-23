//1.导入需要用到的包
import Vue from 'vue'
import Vuex from 'vuex' //Vuex依赖于Vue,所以要将Vue一同导入进来

//5.导入组件
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import mutationsType from './mutations-type'

//2.声明在Vue中需要使用Vuex
Vue.use(Vuex);

//3.对外暴露一个Vuex的store对象
export default new Vuex.Store({
  //4.在这里我们将需要用到的组件,这些组件都分别创建了js文件,所以在使用前我们需要导入组件
  state,
  actions,
  getters,
  mutations,
});
