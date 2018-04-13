const SAVE = 'user.save'
const user = {
  state: {
    username: '',
    password: ''
  },
  mutations: {
    [SAVE] (state, data) {
      state.username = data.username
    }
  }
}
export default user
