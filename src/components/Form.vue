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

    <div>
      <child :text="text" :count="count"></child>
    </div>

     <router-link to="/test">跳转到test页面</router-link>
  </div>
</template>

<script>
import child from './child'
import {mapActions} from 'vuex'
export default {
  name: 'Form',
  data () {
    return {
      username: '',
      password: '',
      text: 'text',
      count: '123456'
    }
  },
  methods: {
    submit2 () {
      // this.$store.commit('userSaveAction', {username: this.username, password: this.password})
      // this.$store.dispatch('userSaveAction', {username: this.username, password: this.password})
      this.submit({username: this.username, password: this.password})
      console.log('commit:', this.$store.state)
      this.$router.push({path: '/profile'})
    },
    ...mapActions({
      submit: 'userSaveAction'
    })
  },
  components: {
    'child': child
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
