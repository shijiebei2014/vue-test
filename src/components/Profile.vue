<template>
  <div class="hello">
    欢迎{{user.username}} 登陆成功!
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      username: '',
      passwork: ''
    }
  },
  computed: {
    user () {
      console.log('user:', this.$store.state.user)
      return this.$store.state.user
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
