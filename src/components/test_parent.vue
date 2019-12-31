<template>
  <div>
    <h3>我是父级组件</h3>
    父组件值：{{$store.state.param1}}
    <test_child></test_child>
  </div>
</template>

<script>
import test_child from '@/test_child'
export default {
    components:{test_child}
}
</script>