import {user_save} from '../mutations'
import {user_save_action} from '../actions'
const user = {
  state: {
    username: '',
    password: ''
  },
  mutations: { // 直接更改state(一定是同步)
    user_save
  },
  actions: { // 需要通过mutations更改state(可以是异步)
    user_save_action
  }
}
export default user
