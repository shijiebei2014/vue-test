<template>
  <div class="hello">
    <label for="username">用户名:</label>
    <input type="text" name="username" v-model="username">
    <br>
    <br>
    <label for="username">密码:</label>
    <input type="password" name="password" v-model="password">
    <br>
    <br>
    <input type="submit" name="submit" @click="submit2">
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'Form',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submit2 () {
      // this.$store.commit('user_save_action', {username: this.username, password: this.password})
      // this.$store.dispatch('user_save_action', {username: this.username, password: this.password})
      this.submit({username: this.username, password: this.password})
      console.log('commit:', this.$store.state)
      this.$router.push({path: '/profile'})
    },
    ...mapActions({
      submit: 'user_save_action'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
