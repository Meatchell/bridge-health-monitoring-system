import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import changecode from './modules/changecode'

Vue.use(Vuex)
export default new Vuex.Store({
  getters,
  actions,
  modules: {
    changecode
  }
})
