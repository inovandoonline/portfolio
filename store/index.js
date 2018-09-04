import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      snack: '',
      color: '',
      icon: ''
    },
    getters: {
      activeUser: (state, getters) => {
        return state.user
      }
    },
    mutations: {
      setUser (state, payload) {
        state.user = payload
      },
      setSnack (state, snack) {
        state.snack = snack
      },
      setColor (state, color) {
        state.color = color
      },
      setIcon (state, icon) {
        state.icon = icon
      }
    }
  })
}

export default createStore
