import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Form from '@/components/Form'
import Profile from '@/components/Profile'
import Test from '@/components/Test'

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
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
