const state = {
  sendmsglength: 0
}
// 返回的数据
const getters = {
  sendmsglength (state) {
    return state.sendmsglength
  }
}
// 接收components里面传过来的方法并提交给mutations执行
const actions = {
  sendmsglength: ({commit}, length) => {
    commit('SEDMSG_LENGTH', length)
  }
}
// 执行具体动作
const mutations = {
  SEDMSG_LENGTH: (state, length) => {
    state.sendmsglength = length
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
