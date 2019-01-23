<template>
    <div class="user" ref="user">
      <Header title="我的"></Header>
      <div class="user_top">
        <div class="user_pic">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546974479096&di=be5686ae94a39e3413cfd63ce2ac702a&imgtype=0&src=http%3A%2F%2Ftvax4.sinaimg.cn%2Fcrop.5.0.502.502.1024%2F5654e21cly8fkfnmyu17nj20e80dyt9g.jpg">
        </div>
        <div class="user_name">
          <p>一只快乐的舔狗</p>
        </div>
      </div>
      <div class="user_main">
        <ul class="box">
          <li class="iconfont one">&#xe68a
            <p class="one_text">安全收款</p>
          </li>
          <li class="iconfont two">&#xe621
            <p class="iconfont money">&#xe61d 66588.00</p>
          </li>
        </ul>
      </div>
      <div class="user_list">
        <ul>
          <li>账单查询</li>
          <li>生活缴费</li>
          <li>城市服务</li>
          <li>仓鼠公益</li>
          <li>游戏微商店</li>
        </ul>
      </div>
      <Bottom></Bottom>
    </div>
</template>

<script>
  import Header from '../../components/Header/Header'
  import Bottom from '../index/Children/Bottom'
    export default {
        name: "user",
      components:{
          Header,
          Bottom
      },
      mounted(){
        this.$nextTick(function () {
          //设置padding-bottom为底部导航条的高
          let menu = this.$refs.user;
          menu.style.paddingBottom = this.$store.state.tabbarHeight  + 'px';
          menu.style.boxSizing = "border-box";
        });
      },
    }
</script>

<style scoped lang="less">
  .user{
    overflow: hidden;
    .user_top{
      width: 100%;
      height: 380px;
      background-color: whitesmoke;
      .user_pic{
        width: 200px;
        margin: 0 auto;
        img{
          margin-top: 100px;
          width: 200px;
          border-radius: 50%;
        }
      }
      .user_name{
        text-align: center;
        margin: 10px auto;
        height: 50px;
        font-size: 40px;
        color: black;
      }
    }
    .user_main{
      padding: 15px;
      .box{
        width: 100%;
        height: 300px;
        background-color: #78cc58;
        border-radius: 25px;
        list-style: none;
        .one{
          width: 48%;
          height: 100%;
          font-size: 100px;
          color: white;
          padding-top: 70px;
          text-align: center;
          box-sizing: border-box;
          display: inline-block;
          float: left;
          .one_text{
            font-size: 30px;
          }
        }
        .two{
          width: 48%;
          height: 100%;
          font-size: 100px;
          display: inline-block;
          float: right;
          text-align: center;
          color: white;
          padding-top: 70px;
          box-sizing: border-box;
          .money{
            font-size: 30px;
          }
        }
      }


    }
    .user_list{
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;
      padding-top: 50px;
      box-sizing: border-box;
      background-color: whitesmoke;
      li{
        width: 100%;
        line-height: 80px;
        padding:  15px;
        background-color: whitesmoke;
        box-sizing: border-box;
        &::after{
          font-family: iconfont;
          font-style: normal;
          content: '\347c';
          float: right;
        }
      }
    }
  }
</style>
