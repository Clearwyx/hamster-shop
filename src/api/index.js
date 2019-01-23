// 4-5-1.导入封装好的网络请求工具
import http from './ajax'

//4-5-2.封装不同API的请求函数(因为我们需要暴露很多获取数据的函数)<转App.vue4-6>
//ES6之前写法:
// export const getNavBar= function(){
//   return http.get("default/navbar")
// }

//ES6之后写法:
//获取navbar的后台数据
export const getNavBar = () => http.get("default/navbar");
export const getIndex = () => http.get("default/index");
export const getCat = () => http.get("default/cat-list");
export const getCart = () => http.get("cart/list&access_token=7apWBXl1llqEKJUlQ2_qHaptxbeZ5zeu");
