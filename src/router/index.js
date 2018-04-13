import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Form from '@/components/Form'
import Profile from '@/components/Profile'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Form',
      component: Form
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
