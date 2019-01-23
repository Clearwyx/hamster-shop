//0.从api中拿到获取数据的方法
import {getNavBar, getIndex, getCat, getCart} from './../api/index'

//4.导入方法的变量名(不懂为什么请看mutations-type.js)
//在commit中直接使用变量名代替要传递的方法名
import {DEFAULT_NAVBAR, DEFAULT_INDEX, DEFAULT_CAT, DEFAULT_TabBarHeight, DEFAULT_CARTLIST} from './mutations-type'

export default {
  //1.获取全局底部工具条数据
  async requestNavbat({commit}){

    //2.使用getNavBar()从服务器获取数据
    const result = await getNavBar();

    //3.通过commit调用mutations中的某个方法(第一个参数),
    // 让其动态的将获取到的数据(第二个参数)保存到state中的navbarInfo中
    //3-1.安全校验
    if (result.code === 0){
      commit(DEFAULT_NAVBAR, result.data);
    }else{
      console.log("获取全局底部导航数据失败");
    }
  },

  //2.获取首页数据
  async requestIndex({commit}){

    //2.使用getIndex()从服务器获取数据,存到常量result中
    const result = await getIndex();

    //3.通过commit调用mutations中的某个方法(第一个参数),
    // 让其动态的将获取到的数据(第二个参数)保存到state中的navbarInfo中
    //3-1.安全校验
    if (result.code === 0){
      commit(DEFAULT_INDEX, result.data);
    }else{
      console.log("获取index数据失败");
    }
  },

  //3.获取分类(cat)数据
  async requestCat({commit}){

    //2.使用getCat()从服务器获取数据,存到常量result中
    const result = await getCat();

    //3.通过commit调用mutations中的某个方法(第一个参数),
    // 让其动态的将获取到的数据(第二个参数)保存到state中的navbarInfo中
    //3-1.安全校验
    if (result.code === 0){
      commit(DEFAULT_CAT, result.data);
    }else{
      console.log("获取Cat数据失败");
    }
  },

  //底部tabbar高度
  saveTabBarHeight({commit}, height){
    //1.通过commit调用mutations中的某个方法(第一个参数),
      commit(DEFAULT_TabBarHeight, height);

  },

  //购物车数据
  async requestCart({commit}){

    //2.使用getCat()从服务器获取数据,存到常量result中
    const result = await getCart();

    //3.通过commit调用mutations中的某个方法(第一个参数),
    // 让其动态的将获取到的数据(第二个参数)保存到state中的navbarInfo中
    //3-1.安全校验
    if (result.code === 0){
      commit(DEFAULT_CARTLIST, result.data);
    }else{
      console.log("获取Cart数据失败");
    }
  },
}
