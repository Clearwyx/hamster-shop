<template>
    <div class="cat"  ref="cat">
      <!--<mt-header fixed title="商品分类" ref="header">-->
        <!--<router-link to="/" slot="left">-->
          <!--<mt-button icon="back">返回</mt-button>-->
        <!--</router-link>-->
        <!--<mt-button icon="more" slot="right"></mt-button>-->
      <!--</mt-header>-->
      <Header title="商品分类"></Header>
      <!--菜单-->
      <div class="menu">
        <!--左侧列表-->
        <div class="menu_left" v-if="catInfo">
          <ul>
            <li v-for="(item, index) in catInfo.list" :key="index" :class="{active: index == num}" v-on:click="change(index)">
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
        <!--右侧列表-->
        <div class="menu_right" v-if="catInfo.list">
          <ul class="menu_ul">
            <li v-for="(item, index) in catInfo.list[num].list" :key="index">
              <a href="#">
                <img :src="item.pic_url">
                <p>{{item.name}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import BScroll from 'better-scroll'
  import Header from '../../components/Header/Header'

    export default {
        name: "cat",
      created(){
        this.$store.dispatch('requestCat');
      },
      mounted(){
          this.$nextTick(function () {
            //设置padding-bottom为底部导航条的高
            let menu = this.$refs.cat;
            menu.style.paddingBottom = this.$store.state.tabbarHeight + 'px';
            menu.style.boxSizing = "border-box";
          });
     },
      data(){
        //创建一个私有数据,对菜单进行布局的关键
        return{
          num: 0
        }
      },
      computed: mapState(['catInfo']),
      watch:{
          "catInfo": function () {
            //实现右侧滚动,必须在这里写
            this.$nextTick(function () {
              new BScroll(".menu_left");
              new BScroll(".menu_right");
            })
          }
      },
      methods:{
          change(index){
            this.num = index;
          }
      },
      components:{
          Header
      }
    }
</script>

<style scoped lang="less">

  .cat{
    width: 100%;
    height: 100%;
    overflow: hidden;
    //菜单
    .menu{
      height: 100%;
      display: flex;
      .menu_left{
        width: 180px;
        background-color: #f8f8f8;
        ul{
          li{
            font-size: 30px;
            line-height: 120px;
            text-align: center;
            color: #666;
          }
          .active{
            color: red;
            background-color: white;
            border-left: 2px solid red;
            box-sizing: border-box;
          }
        }
      }
      .menu_right{
        width: 100%;
        height: 100%;
        flex: 1;
        padding: 15px;
        box-sizing: border-box;
        ul{
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          li{
            display: inline-block;
            width: 30%;
            margin-right: 5px;
            text-align: center;
          }
        }
      }
    }
  }

</style>

<style>
  .mintui{
    font-size:40px;
  }
</style>
