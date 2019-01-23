<template>
      <mt-header fixed :title="title" ref="header">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>

</template>

<script>
    export default {
        name: "Header",
      props:['title'],
      mounted(){
        //从头部组件中设置其父组件的内边距
        let headerHeight = this.$el.offsetHeight;
        let parentEle = this.$parent.$el;
        parentEle.style.paddingTop = headerHeight + 'px';
        parentEle.style.boxSizing = 'border-box'
      }
    }
</script>

<style scoped lang="less">
    //头部
    .mint-header{
      height: 80px;
      line-height: 80px;
      font-size: 40px;
      color: #666;
      background-color: white;
      border-bottom: 1px solid #ccc;
      .mint-button{
        overflow: unset;
      }
    }

</style>

<style>
  .mintui{
    font-size:40px;
  }
</style>
