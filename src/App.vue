<template>
  <div>
    <div class="pageTitle">
        <span @click="goback()">&lt;返回 </span>
        <span>测试页面</span>
    </div>
    <hr>
    <router-link :to="{name:'index'}">首页</router-link>
    <router-link :to="{name:'parent'}">测试</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  methods:{
    goback(){
     window.history.back()
    }
  }
};
</script>

<style scoped>
  .pageTitle{
    width: 100%;
    height: 40px;
    background: #eeeeee;
    text-align: center;
    position: relative;
  }

  .pageTitle span{
    line-height: 40px;
  }
  .pageTitle span:first-child{
    position: absolute;
    left: 15px;
    top: 0;
  }
</style>