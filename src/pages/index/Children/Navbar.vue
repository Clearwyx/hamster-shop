
<template>
    <div class="navbar">

      <div class="nav" v-for="(item, index) in navpic" :key = index>
        <img :src="item.pic_url"/>
        <p>{{item.name}}</p>
      </div>

    </div>
</template>

<script>
  import '../../../assets/js/WebP'
    export default {
        name: "Navbar",
      computed:{
          //显示不全,放弃使用
        // nav_icon_list(){
        //   return this.$store.state.indexInfo.nav_icon_list;
        // },
        //自己在state中写的数据
        navpic(){
          return this.$store.state.navphoto;
        }
      }
    }
</script>

<style scoped lang="less">
  .navbar{
    border-top: 1px solid #cccccc;
    width: 100%;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    padding: 8px 0;
    .nav{
      width: 25%;
      display: inline-block;
      text-align: center;

      img{
        width: 50%;
        margin-bottom: 5px;
      }
      p{
        color: #666;
        font-size: 25px;
        margin-bottom: 10px;
        color: #ff726b;
      }
    }
  }
</style>
