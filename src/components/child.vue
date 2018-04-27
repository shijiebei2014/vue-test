<template>
  <div>
    <my_child v-bind="$attrs"></my_child>
  </div>
</template>
<script>
import myChild from './my_child'
export default {
  name: 'child',
  props: ['text'],
  components: {
    'my_child': myChild
  },
  /*
  * 父组件props = 子组件中的props用到的属性(通过inheritAttrs为true,直接挂在子组件的props上,通过挂载,使深层的组件可以使用) + 子组件的$attrs(通过v-bind="$attr",使深层的组件可以使用属性)
  */
  inheritAttrs: false, //不继承父组件传过来的属性(text,count),即child组件的props为{},不需要通过props传递,通过$attrs(child中的props属性未用到的属性)来传递给my_child组件
  mounted () {
    console.log(this.$attrs)
  }
}
</script>
