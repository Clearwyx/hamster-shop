<template>
  <div class="coupon">
    <!--顶部-->
    <div class="top">
      <!--logo，秒杀，场次-->
      <div class="text f-left">
        <span class="iconfont logo">&#xe65d<i>超值优惠券</i></span>

      </div>

      <!--更多-->
      <div class="more f-right">
        <span>更多</span>
        <span class="iconfont">&#x347c</span>
      </div>
    </div>

    <!--内容-->
    <div class="main">
      <ul class="List" ref="goodsList">
        <a href="#">
          <li class="goods">
          <img src="../../../assets/images/coupon.png">
          <span class="money">￥188</span>
          <span class="meet">满200可用</span>
          <span class="get">点击领取</span>
        </li>
        </a>
        <a href="#">
          <li class="goods">
            <img src="../../../assets/images/coupon.png">
            <span class="money">￥188</span>
            <span class="meet">满200可用</span>
            <span class="get">点击领取</span>
          </li>
        </a>
        <a href="#">
          <li class="goods">
            <img src="../../../assets/images/coupon.png">
            <span class="money">￥188</span>
            <span class="meet">满200可用</span>
            <span class="get">点击领取</span>
          </li>
        </a>
        <a href="#">
          <li class="goods">
            <img src="../../../assets/images/coupon.png">
            <span class="money">￥188</span>
            <span class="meet">满200可用</span>
            <span class="get">点击领取</span>
          </li>
        </a>
        <a href="#">
          <li class="goods">
            <img src="../../../assets/images/coupon.png">
            <span class="money">￥188</span>
            <span class="meet">满200可用</span>
            <span class="get">点击领取</span>
          </li>
        </a>
        <a href="#">
          <li class="goods">
            <img src="../../../assets/images/coupon.png">
            <span class="money">￥188</span>
            <span class="meet">满200可用</span>
            <span class="get">点击领取</span>
          </li>
        </a>


      </ul>

    </div>
  </div>
</template>

<script>
    export default {
        name: "Coupon"
    }
</script>

<style scoped lang="less">
  .coupon {
    margin-top: 10px;
    background-color: #f5f5f5;
    font-size: 30px;
    overflow: hidden;
    /*顶部样式*/
    .top {
      width: 100%;
      height: 70px;
      line-height: 70px;
      color: white;
      padding: 0 15px;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      overflow: hidden;
      background-color: #fe8f34;
      /*设置左右字体图标大小*/
      .iconfont {
        font-size: 35px;
      }
      /*设置‘秒杀专场’‘场次’ 样式*/
      .text {
        margin-right: 10px;
        .logo{
          i{
            font-style: normal;
            margin-left: 15px;
          }
        }

      }
      /*设置 更多 样式*/
      .more {
        color: black;
      }
    }
    /*内容样式*/
    .main{
      padding: 0 15px;
      box-sizing: border-box;
      width: 100%;
      overflow: hidden;
      //让容器可以水平滚动
      overflow-x: scroll;
      //消除系统默认的水平滚动条
      &::-webkit-scrollbar{
        display: none;
      }
      ul{
        list-style: none;
        display: flex;
        text-align: center;
        li{
          width: 330px;
          text-align: center;
          float: left;
          margin: 5px 5px 5px 0;
          position: relative;
          margin-right: 15px;
          .money{
            position: absolute;
            top: 26px;
            left: 66px;
            color: white;
            font-size: 50px;
          }
          .meet{
            position: absolute;
            bottom: 20px;
            left: 60px;
            color: white;
            font-size: 30px;
          }
          .get{
            width: 10px;
            position: absolute;
            top: 18px;
            right: 38px;
            color: white;
            font-size: 25px;
          }
        }

      }


    }
  }
</style>
