<template>
  <div class="notice">
    <span class="index">
      公告:
    </span>

    <span class="text" ref="tbw">
          <span class="t" ref="tw">
            ^_^ ~家人在身边 爱就在身边~ ^_^
          </span>
    </span>


  </div>
</template>

<script>
  import velocity from 'velocity-animate'
    export default {
        name: "Notice",
      methods:{
        go(text, tbw){
          let t_length = text.innerText.length * 666;
          let self = this;
          Velocity(text, {
            //动画: 左边距设置为文本宽度(也就是让文本消失)
            marginLeft: -text.offsetWidth,
          }, {
            duration: t_length,
            delay: 2000,
            easing: 'linear',
            begin: text.style.marginLeft = tbw + 'px',
            complete:function () {
              self.go(text,tbw)
            }
          });
        }
      },
      mounted(){
        //获取文本
        let text = this.$refs.tw;
        //获取公告文本所占的宽度
        let tbw = this.$refs.tbw.offsetWidth;
        this.go(text, tbw)
      },
    }
</script>

<style scoped lang="less">
  .notice{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: white;
    background-color: #fd5579;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    position: relative;
    /*z-index: 2;*/
    .index{
      font-size: 27px;
      line-height: 80px;
      padding-right: 5px;
    }

    .text{
      flex: 1;
      line-height: 80px;
      overflow: hidden;
      .t{
        display: inline-block;
        white-space: nowrap;
      }
    }
    &::before{
      font-family: "iconfont";
      font-style: normal;
      content: '\e63a';
      padding-right: 5px;
      padding-left: 10px;
      line-height: 80px;
    }
    &::after{
      font-family: "iconfont";
      font-style: normal;
      content: '\347c';
      padding-right: 5px;
      padding-left: 10px;
      line-height: 80px;

    }

    

  }

</style>
