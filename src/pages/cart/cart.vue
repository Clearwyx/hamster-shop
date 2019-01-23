<template>
    <div class="cart"  >
      <!--购物车头部-->
      <Header title="购物车"></Header>

      <!--商品清单模块-->
      <div class="cart_list" ref="list">
        <!--清单头部-->
          <div class="list_title">
            <div class="iconfont" @click="change_all()">{{flag ? '&#xe60e' : '&#xe602'}}</div>
            <div class="title_text">仓鼠自营</div>
          </div>
        <!--清单主体-->
          <ul class="xxx">
            <li class="list_main" v-for="(item, index) in cartlist.list" :key="index">
              <!--清单左侧 '选择 + 商品图片'-->
              <div class="main_left">
                <div class="iconfont" @click="change(index)">{{checkState[index] ? '&#xe60e' : '&#xe602'}}</div>
                <img :src="item.goods_pic" alt="">
              </div>

              <!--清单右侧 '商品名称 + 类型 + 价格'-->
              <div class="main_right">
                <div class="goods_name">{{item.goods_name}}</div>
                <div class="goods_option">{{item.attr_list | dispose}}</div>
                <div class="money" ref="money">{{item.price}}</div>
              </div>

              <!--定位流 '商品数量计数器'-->
              <div class="counter">
                <button @click="minus(index)" ref="button">-</button>
                <input type="text" :value="item.num" ref="bit"  disabled="disabled">
                <button @click="add(index)" ref="button">+</button>
              </div>
            </li>
            <bottom></bottom>
          </ul>
      </div>

      <!--结算模块-->
      <div class="buy" ref="buy">
        <span class="buy_left iconfont" @click="change_all()">
          {{flag ? '&#xe60e' : '&#xe602'}} 全选
        </span>
        <span class="buy_center">总价: <span class="all_money" ref="all_money">0.00</span></span>
        <span class="buy_right">
          <span class="change" @click="set()" ref="set">编辑</span><span class="pay">付款</span>
        </span>
      </div>
    </div>
</template>

<script>
  import Header from '../../components/Header/Header'
  import { mapState } from 'vuex'
  import Bottom from '../index/Children/Bottom'

    export default {
        name: "cart",
      created(){
        this.$store.dispatch('requestCart');
      },
      mounted(){
        this.$nextTick(function () {
          let buyHeight = this.$refs.buy.offsetHeight;
          //设置padding-bottom为底部导航条的高
          let menu = this.$refs.list;
          menu.style.paddingBottom = this.$store.state.tabbarHeight + buyHeight + 'px';
          menu.style.boxSizing = "border-box";
        });
      },
      //过滤属性,用于手机的选项
      filters:{
        dispose(value){
          let src = "";
          value.forEach(function (item, index) {
            src += item.attr_group_name + ":" + item.attr_name + "  "
          });
          return src
        }
      },
      components:{
        Header,
        Bottom
      },
      computed: {
        ...mapState(['cartlist']),
        //关于全选单选的代码
        checkState: {
          get: function(){
            //定义一个数组
            let arr = [];
            //遍历数组,默认将每个数组中都填入false(因为默认未选中)
            this.cartlist.list.forEach(function (item, index) {
              arr.push(false);
            });
            //返回数组
            return arr;
          },
          //当页面进行点击后传入index,如果当前index的为false, 则让其等于 非false(也就是true)
          set: function(index){
            this.checkState[index] = !this.checkState[index];
          }

        }
      },
      methods:{
        //关于全选单选的代码
        change(index){

          //叠加被选中商品的价格
          //因为是点击的时候判断当前值(准确来说是点击之前的值)所以为假,则增加当前的价格
          //为真则减去当前的价格
          if(this.checkState[index] == false){
            this.gross += parseInt(this.$refs.money[index].innerText);
          }else if(this.checkState[index] == true){
            this.gross -= parseInt(this.$refs.money[index].innerText);
          };
          //将总数写入总金额
          this.$refs.all_money.innerText = this.gross + ".00";

          //this.cheskState是一个数组
          //将点击的值(index)传给cheskState,
          // 再由cheskState中的set对这个index的值就行修改,最后存入this.cheskState中
          this.checkState = index;

          //定义个值记录
          let self = this;
          // let num = this.num;
          let num = 0;
          // console.log(num);
          //遍历数组,如果数组中有值为 false 则num -= 1
          //当forEach遍历完数组后,num就等于 -6 (因为数组中一共有6个数据)
          //当其中任意一个变为true的时候,num就等于 -5 (以此类推)

          this.checkState.forEach(function (item, index) {
            if (item == false){
              num -= 1;
            }
          });

          //当num==0 的时候,falg就为true,否则flag则为false
          if (num == 0){
            this.flag = true;
          }else {
            this.flag = false;
          }
          //强制刷新界面
          this.$forceUpdate();

        },

        //全选反选依赖于change(), 全选相当于把所有的index都调用一遍
        //所以在全选中遍历数组,调用change()
        //因为每次调用change(),change()都会进行计算num是否为0,所以解决了是否要勾上全选的问题
        //(等于还是通过change()来判断)
        change_all(){
          let self = this;
          //定义一个数组存储数据
          let arr =[];

          this.checkState.forEach(function (item, index) {
            //当item为真的时候,将其index写入到arr数组中
            if (item == true){
              arr.push(index);
            } else if (item == false){
              //为假则调用change
              self.change(index)
            }
          });

          //判断数组的长度是否达到与this.checkState数组相等
          //只有一种情况就是所有为真才能填满arr数组,使其达到相等
          if (arr.length == this.checkState.length){
            //相等则再执行一次所有的change调用
            this.checkState.forEach(function (item, index) {
              self.change(index)
            })
          }

        },

        //计数器
        //增加
        add(index){
          //1.获取对于点击index的input中的值
          let num = parseInt(this.$refs.bit[index].value);
          let oldGoods = 0;

          //3.此段为计算价格(因为初始价格不规则,所以要多一步计算
          //获取当前价格
          let goods = parseInt(this.$refs.money[index].innerText);
          //用当前的价格 / 当前的num(个数) = 当前商品单价
          goods = goods / num;

          //2.此处接1后面,只实现计数器的加减
          //点击一次num+1
          //然后将num值写入到input中
          num += 1;
          this.$refs.bit[index].value = num;

          //4.等所有的值都确定后
          //用当前商品单价 * 当前商品个数 = 需要显示的价格
          //再将价格写入到对应位置
          goods = goods * num;
          this.$refs.money[index].innerText = goods;


        },
        //减少
        minus(index){
          let num = parseInt(this.$refs.bit[index].value);
          if (num >= 2){
            let goods = parseInt(this.$refs.money[index].innerText);
            goods = goods / num;

            num -= 1;
            this.$refs.bit[index].value = num;

            goods = goods * num;
            this.$refs.money[index].innerText = goods;
          }
        },

        //编辑
        set(){
          let self = this;
          //点击编辑或完成
          if (self.$refs.button[0].style.display == 'block'){
            self.$refs.set.style.width = '';
            self.$refs.set.style.position = 'unset';
            self.$refs.set.innerText = '编辑';
            self.$refs.set.style.backgroundColor = '';
            //隐藏计数按钮
            self.$refs.button.forEach(function (item, index) {
              item.style.display = 'none'
            })
          }else{
            self.$refs.set.style.width = '100%';
            self.$refs.set.style.position = 'absolute';
            self.$refs.set.style.left = 0;
            self.$refs.set.style.right = 0;
            self.$refs.set.style.backgroundColor = 'orange';
            self.$refs.set.innerText = '完成';
            //显示计数按钮
            self.$refs.button.forEach(function (item, index) {
              item.style.display = 'block';
            })
          }
        }

      },

      data(){
          return{
            //用于判断是否勾选(全选)
            flag: false,
            //计算价格
            gross: 0,
          }
      }
    }
</script>

<style scoped lang="less">
  .cart{
    width: 100%;
    height: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    .cart_list{
      .list_title{
        line-height: 90px;
        border-bottom: 1px solid #ccc;
        .iconfont, .title_text{
          font-size: 30px;
          display: inline-block;
          margin-right: 10px;
        }
      }
      //底部清除
      .xxx{
        overflow: hidden;
      }
      .list_main{
        border-bottom: 1px solid #ccc;
        display: flex;
        height: 200px;
        position: relative;
        .main_left{
          display: flex;
          align-items: center;
          margin-right: 20px;
          .iconfont{
            font-size: 30px;
            display: inline-block;
            margin-right: 20px;
          }
          img{
            width: 150px;
          }
        }
        .main_right{
          padding-top: 20px;
          box-sizing: border-box;
          .goods_name{
            font-size: 20px;
            width: 100%;
            display: -webkit-box;
            -webkit-line-clamp: 2; // 限定只显示2行  设置显示为几行
            text-overflow: ellipsis;// 超出的文本显示 "..."
            -webkit-box-orient: vertical;
            overflow: hidden;	//将超出的内容隐藏掉
          }
          .goods_option{
            font-size: 13px;
            color: #666;
          }
          .money{
            padding-top: 10px;
            color: red;
            &::before{
              font-family: iconfont;
              font-style: normal;
              content: '\e61d';
            }
          }

        }
        .counter {
          position: absolute;
          bottom: 5px;
          right: 10px;
          display: flex;
          button, input {
            font-size: 25px;
            display: inline-block;
            width: 45px;
            height: 50px;
            text-align: center;
            background-color: whitesmoke;
            border: none;
          }
          button{
            display: none;
          }
          }

        }
      }

    }
    .buy{
      width: 100%;
      line-height: 120px;
      position: fixed;
      left: 0;
      bottom: 106px;
      background-color: white;
      padding-left: 20px;
      box-sizing: border-box;
      z-index: 2;
      .buy_left{
        font-size: 35px;
      }
      .buy_center{
        color: red;
      }
      .buy_right{
        color: white;
        font-size: 25px;
        height: 100%;
        text-align: center;
        float: right;
        .change{
          display: inline-block;
          width: 160px;
          background-color: #3c8bea;
        }
        .pay{
          display: inline-block;
          width: 160px;
          background-color: #fd4344;
        }
      }
    }

</style>
