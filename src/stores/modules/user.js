import {userSave} from '../mutations'
import {userSaveAction} from '../actions'
const user = {
  state: {
    username: '',
    password: ''
  },
  mutations: { // 直接更改state(一定是同步)
    userSave
  },
  actions: { // 需要通过mutations更改state(可以是异步)
    userSaveAction
  }
}
export default user
