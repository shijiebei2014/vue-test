<template>
  <div>{{text}}{{count}}</div>
</template>
<script>
export default {
  name: 'my_child',
  props: ['text', 'count'],
  mounted () {
    console.log(this.$attrs)
  }
}
</script>
