<template>
  <div>
    <router-link :to="{name:'parent'}">测试1</router-link>
    <router-link :to="{name:'parent2'}">测试2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};

import test_parent from "@/test_parent";
import test_parent2 from "@/test_parent2";

export let test_router = {
  children: [
    { path: "", name: "parent", component: test_parent },
    { path: "parent2", name: "parent2", component: test_parent2 }
  ]
};
</script>