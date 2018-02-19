import Vuex from 'vuex'
import user from './user'
import shared from './shared'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    modules: {
      user: user,
      shared: shared
    }
  })
}

/*
import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      counter: 0
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
}

export default store
*/