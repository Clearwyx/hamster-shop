<template>
  <div class="groupon">
    <!--顶部-->
    <div class="top">
      <!--logo，秒杀，场次-->
      <div class="text f-left">
        <span class="iconfont logo">&#xe611<i>拼团购物</i></span>
      </div>
      <!--更多-->
      <div class="more f-right">
        <span>更多</span>
        <span class="iconfont">&#x347c</span>
      </div>
    </div>

    <!--内容-->
    <div class="main">
      <ul class="goodsList" v-if="groupon_list">
        <a href="#" v-for="(item, index) in groupon_list.goods_list" :key="index">
          <li class="goods" >
            <img :src="item.pic">
            <div class="text">
              <p class="name">{{item.name}}</p>
              <p class="newMoney iconfont"><span>拼团价:</span>&#xe61d{{item.price}}</p>
              <p class="oldMoney">￥999</p>
              <p class="buy">已拼: {{item.sale_num}} 份</p>
            </div>
          </li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Groupon",
      computed:{
          groupon_list(){
            return this.$store.state.indexInfo.pintuan;
          }
     }
    }
</script>

<style scoped lang="less">
  .groupon{
    margin-top: 10px;
    background-color: #f5f5f5;
    font-size: 30px;
    overflow: hidden;
    /*顶部样式*/
    .top{
      width: 100%;
      height: 70px;
      line-height: 70px;
      color: white;
      padding: 0 15px;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      overflow: hidden;
      background-color: skyblue;
      /*设置左右字体图标大小*/
      .iconfont{
        font-size: 35px;
      }
      /*设置标题样式*/
      .text {
        margin-right: 10px;
        .logo {
          i {
            font-style: normal;
            margin-left: 15px;
          }
        }
      }
      /*设置 更多 样式*/
      .more{
        color: black;
      }
    }
    /*内容样式*/
    .main{
      padding: 0 15px;
      box-sizing: border-box;
      width: 100%;
      //让容器可以水平滚动
      overflow-x: scroll;
      //消除系统默认的水平滚动条
      &::-webkit-scrollbar{
        display: none;
      }
      ul{
        list-style: none;
        display: flex;
        li{
          border: 1px solid #ccc;
          width: 315px;
          text-align: center;
          margin: 5px 15px 5px 0;
          .name{
            display: -webkit-box;
            -webkit-line-clamp: 2; // 限定只显示2行  设置显示为几行
            text-overflow: ellipsis;// 超出的文本显示 "..."
            -webkit-box-orient: vertical;
            overflow: hidden;	//将超出的内容隐藏掉
          }
          .text{
            .newMoney{
              font-size: 30px;
              color: red;
            }
            .oldMoney{
              font-size: 25px;
              text-decoration: line-through;
            }
            .buy{
              padding-top: 20px;
              border-top: 1px solid #ccc;
            }
          }

        }

      }


    }
  }
</style>
