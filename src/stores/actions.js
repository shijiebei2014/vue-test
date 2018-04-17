export function userSaveAction ({commit, state}, data) {
  setTimeout(() => commit('userSave', data), 2000)
}
