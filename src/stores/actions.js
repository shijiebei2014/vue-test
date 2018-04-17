export function user_save_action ({commit, state}, data) {
  setTimeout(() => commit('user_save', data), 2000)
}
