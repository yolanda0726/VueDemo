<template>
  <div>
    <router-link :to="{name:'index'}">首页</router-link>
    <router-link :to="{name:'parent'}">测试</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>

export default {};
</script>