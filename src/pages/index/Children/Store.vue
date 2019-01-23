<template>
  <div class="seckill" v-if="goods">
    <div class="seckill_in" v-for="(item, index) in goods">
      <!--顶部-->
      <div class="top">
        <!--logo-->
        <div class="text f-left">
          <span class="iconfont logo">&#xe621</span>
          <span>{{item.name}}</span>
        </div>

        <!--更多-->
        <div class="more f-right">
          <span>更多</span>
          <span class="iconfont">&#x347c</span>
        </div>
      </div>
      <!--内容-->
      <div class="main">
        <ul class="goodsList" ref="goodsList">
          <a href="#"  v-for="(item, index) in item.goods_list">
            <li class="goods">
              <img :src="item.pic_url">
              <p class="name">{{item.name}}</p>
              <p class="money iconfont">&#xe61d{{item.price}}</p>
              <p class="sales">剩余{{item.sales}}</p>
            </li>
          </a>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Story",
      mounted(){

      },
      computed:{
          goods(){
            return this.$store.state.indexInfo.cat_list
          }
      }
    }
</script>

<style scoped lang="less">
  .seckill{

    font-size: 30px;
    overflow: hidden;
    .seckill_in{
      margin-top: 10px;
      background-color: #f5f5f5;
      border-bottom: 1px solid #ccc;
      /*顶部样式*/
      .top{
        width: 100%;
        height: 70px;
        line-height: 70px;
        color: #e4383a;
        padding: 0 15px;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        overflow: hidden;
        /*设置左右字体图标大小*/
        .iconfont{
          font-size: 40px;
        }
        /*设置精美物品*/
        .text{
          margin-left: 250px;
          font-size: 40px;
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
        overflow: hidden;
        ul{
          list-style: none;
          text-align: center;
          display: flex;
          flex-wrap: wrap;
          li{
            display: inline-block;
            width: 350px;
            text-align: center;
            margin: 10px 5px 5px 0;
            .name{
              width: 100%;
              display: -webkit-box;
              -webkit-line-clamp: 2; // 限定只显示2行  设置显示为几行
              text-overflow: ellipsis;// 超出的文本显示 "..."
              -webkit-box-orient: vertical;
              overflow: hidden;	//将超出的内容隐藏掉
            }
            .money{
              color: red;
              font-size: 35px;
            }
          }
        }
      }
    }
  }
</style>
