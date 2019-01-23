<template>
    <div class="seckill">
      <!--顶部-->
      <div class="top">
        <!--logo，秒杀，场次-->
        <div class="text f-left">
          <span class="iconfont logo">&#xe634</span>
          <span>秒杀专场</span>
          <span class="index" ref="index">-</span>
        </div>
        <!--时间-->
        <div class="time f-left">
          <span ref="hour">00</span>
          :
          <span ref="min">00</span>
          :
          <span ref="sec">00</span>
        </div>
        <!--更多-->
        <div class="more f-right">
          <span>更多</span>
          <span class="iconfont">&#x347c</span>
        </div>
      </div>

      <!--内容-->
      <div class="main">
        <ul class="goodsList" v-if="scekill">
          <a href="#" v-for="(item, index) in scekill.goods_list" :key="index">
            <li class="goods" >
              <img :src="item.pic">
              <p class="newMoney iconfont">&#xe61d {{item.miaosha_price}}</p>
              <p class="oldMoney iconfont">&#xe61d 999</p>
            </li>
          </a>
          <a href="#" v-for="(item, index) in scekill.goods_list" :key="index + 3">
            <li class="goods" >
              <img :src="item.pic">
              <p class="newMoney iconfont">&#xe61d {{item.miaosha_price}}</p>
              <p class="oldMoney iconfont">&#xe61d 999</p>
            </li>
          </a>
        </ul>
      </div>
    </div>
</template>

<script>
  //导入计算时间的工具
  import Tools from '../../../assets/js/Tools'

    export default {
        name: "Seckill",
      //方法
      methods:{
        //设置倒计时的代码封装为一个方法
        startTime(){
          //获取需要操作的元素
          let hourEle = this.$refs.hour;
          let minEle = this.$refs.min;
          let secEle = this.$refs.sec;
          let index = this.$refs.index;

          //获取"场次"的数据,并设置给元素
          let name = this.scekill.name;
          let num = parseInt(name) + 1;
          name = num + "点场";
          index.innerText = name;

          //获取倒计时的时间
          let restTime = this.scekill.rest_time;
          //判断倒计时是否为0, 为0则直接返回0不执行后续操作
          if (restTime == 0){
            return 0;
          }else{
            //设置定时器1s执行一次, 并传入我们获取的倒计时剩余时间
          setInterval(function(){
              //传入我们的Tools工具中进行转换
              let time = Tools.getTime(restTime);
              //将转换的值设置到界面元素中
              hourEle.innerText = time.hour;
              minEle.innerText = time.min;
              secEle.innerText = time.sec;
              //每转换一次倒计时事件减少1s
              restTime -= 1;
            }, 1000)
          }
        }
      },
      computed:{
          //获取数据
          scekill(){
            return this.$store.state.indexInfo.miaosha
          }
      },
    //监听界面动态,自动排序后失效,改为在mounted(){}中操作
      // watch:{
      //     //监听界面的写法，并且function有两个参数 newValue 与 oldValue
      //     "scekill": function(){
      //       //1.设置倒计时
      //       this.startTime();
      //
      //       //2.根据goods的个数设置ul的长度
      //       //为了避免切换屏幕时造成的延迟设置大小BUG,
      //       // 故将设置ul长度放到了设置倒计时中一起监听
      //
      //
      //     }
      // }, //
      mounted(){
        this.startTime();
      }
    }

</script>

<style scoped lang="less">
  .seckill{
    background-color: whitesmoke;
    font-size: 30px;
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
      background-color: #e4383a;
      /*设置左右字体图标大小*/
      .iconfont{
        font-size: 35px;
      }
      /*设置‘秒杀专场’‘场次’ 样式*/
      .text{
        margin-right: 10px;
        .index{
          font-size: 25px;
          color: black;
        }
      }
      /*设置时间样式*/
      .time{
        color: black;
        span{
          font-size: 23px;
          border-radius: 30%;
          background-color: white;
          padding: 6px;
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
          width: 215px;
          text-align: center;
          margin: 5px 15px 5px 0;
          img{
            width: 210px;
            border: 1px solid #ccc;
          }
          .newMoney{
            font-size: 30px;
            color: red;
          }
          .oldMoney{
            font-size: 25px;
            text-decoration: line-through;
          }
        }

      }


    }
  }
</style>
