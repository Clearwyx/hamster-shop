//z.导入方法的变量名(不懂为什么请看mutations-type.js)
//在调用方法的时候,用变量名代替方法名
import {DEFAULT_NAVBAR, DEFAULT_INDEX, DEFAULT_CAT, DEFAULT_TabBarHeight, DEFAULT_CARTLIST} from './mutations-type'

//0.mutations会接收一个state
export default{
  //1.按照commit传过来的指令,调用对应的方法名,让其使用mutations中接收的state,
  //将接收到的 result 数据保存到state.navbarInfo中
  [DEFAULT_NAVBAR](state, result){
    state.navbarInfo = result;
  },
  [DEFAULT_INDEX](state, result){
    state.indexInfo = result;
  },
  [DEFAULT_CAT](state, result){
    state.catInfo = result;
  },
  [DEFAULT_TabBarHeight](state, height){
    state.tabbarHeight = height
  },
  [DEFAULT_CARTLIST](state, result){
    state.cartlist = result
  }
}
