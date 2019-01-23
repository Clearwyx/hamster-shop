// 4.网络工具类封装
//对axios进行进一步封装
import axios from 'axios'

//4-1配置默认的请求的根地址
axios.defaults.baseURL = 'https://weixin.itzb.com/web/?lnj=api/';

//4-2配置超时事件we
axios.defaults.timeout = 10000;
//4-3在企业开发中可能还需要
//4-3-1请求之前的拦截
//4-3-2请求之后的拦截

//4-4:向外界暴露get 和post获取数据的方法<转index.js4-5>
export default{
  get(url="", data={}){
    return new Promise(function(resolved, rejected){
      axios.get(url,{
        params: data
      })
        .then(function(response){
          resolved(response.data);
        })
        .catch(function(response){
          // rejected(response);
          console.log("请求失败");
        })
    })
  },
  post(url="", data={}){
    return new Promise(function(resolved, rejected){
      axios.get(url,data)
        .then(function(response){
          resolved(response.data);
        })
        .catch(function(response){
          rejected(response);
        })
    })
  }


}

