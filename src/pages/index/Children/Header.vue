<template>
    <div class="index" ref="header">
      <a href="#" class="logo">
        <img src="../../../assets/images/logo_ss.png" height="157" width="157"/>
      </a>
      <form action="" class="search">
        <span>|</span>
        <input type="text"  placeholder="新年快乐! 祝您身体健康,万事如意!">
      </form>
      <a href="#" class="login">登录</a>
    </div>

</template>

<script>
    export default {
        name: "Header",
      //设置index界面中的组件效果
      mounted(){
        let header = this.$refs.header;
        let headerHeight = header.offsetHeight;
        // let banner = this.$refs.banner.$el;
        // let notice = this.$refs.notice.$el;

        //1.设置顶部header的颜色变化效果
        //获取网页偏移距离
        window.onscroll = function(){
          let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          //将获得的偏移除以header的高度,得到一个最小0的值
          let colorA = top/headerHeight;
          //将colorA的值设置给header的背景属性,根据rgb的透明特效,设置顶部应该在什么时候不透明
          header.style.background = "rgba(228, 56, 58, "+colorA+")";

          // //设置公告的吸顶效果
          // //当scrolltop发生变化就获取header和banner的高度
          // let headerHeight1 = header.offsetHeight;
          // let bannerHeight = banner.offsetHeight;
          // //banner-header 得到"公告"在scrolltop等于多少的时候吸顶
          // let ifwidth = bannerHeight - headerHeight1;
          // //当top = ifwidth "公告"既可以固定,达到吸顶效果
          // if (top > ifwidth){
          //   notice.style.position= "fixed";
          //   notice.style.top = headerHeight1 + 'px';
          //   notice.style.background = "rgb(228, 56, 58)"
          //   notice.style.color = 'white'
          // }else{
          //   //不达到则 恢复/不变
          //   notice.style.position= "unset"
          //   notice.style.background = "#f5f5f5"
          //   notice.style.color = 'black'
          // }
        }
      }
    }
</script>

<style scoped lang="less">
  .index{
    width: 100%;
    line-height: 110px;
    background-color: transparent;
    display: flex;
    box-sizing: border-box;
    padding: 0 10px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    .logo{
      display: flex;
      align-items: center;
      img{
        width: 45px;
        height: 45px;
      }
    }
    .search{
      flex: 1;
      padding: 0 15px;
      display: flex;
      align-items: center;
      position: relative;
      input{
        width: 100%;
        height: 50px;
        border-radius: 25px;
        font-size: 15px;
        //"文本缩进"让内容前面空出40px
        text-indent: 50px;

      }
      &::before{
        font-family: iconfont;
        font-style: normal;
        font-size: 20px;
        content: '\e60f';
        position: absolute;
        top: 1px;
        left: 25px;
        justify-content: center;
      }
      span{
        color: #ccc;
        display: inline-block;
        position: absolute;
        left: 50px;
        font-size: 15px;
      }
    }
    .login{
      text-align: center;
      font-size: 18px;
      color: white;
    }

  }
</style>
