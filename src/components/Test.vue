<template>
  <div>
    <p>{{message}}</p>
    <p>{{reverseMessage}}</p>
    <p v-html="message"></p>
    <hr>
    <button @click="toggleType">toggle type</button>
    <template v-if="loginType === 'username'">
      <label for="username">username</label>
      <input type="text" name="username" value="" placeholder="Enter your name" key="username">
    </template>
    <template v-if="loginType === 'email'">
      <label for="email">email</label>
      <input type="text" name="email" value="" placeholder="Enter your email" key="email">
    </template>
    <hr>
    <ul>
      <li v-for="item in items" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      message: '<span style="color: #f66;">Welcome to test view!</span>',
      loginType: 'username',
      items: [{id: 1, name: 'first'}, {id: 2, name: 'second'}, {id: 3, name: 'third'}]
    }
  },
  computed: {
    reverseMessage () {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    toggleType () {
      if (this.loginType === 'username') {
        this.loginType = 'email'
      } else {
        this.loginType = 'username'
      }
    }
  }
}
</script>
