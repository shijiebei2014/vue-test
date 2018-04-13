import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
Vue.use(Vuex)

const UserStore = new Vuex.Store({
  modules: {
    user
  }
})
export default UserStore
