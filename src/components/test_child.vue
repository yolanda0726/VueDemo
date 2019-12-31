<template>
  <div>
    <h3>我是子组件</h3>
    <button @click="add()">+5</button>
  </div>
</template>
<script>
export default {
  methods: {
    add() {
      //  this.$store.commit('add', 5);
      this.$store.dispatch("add", 5);
    }
  }
};
</script>