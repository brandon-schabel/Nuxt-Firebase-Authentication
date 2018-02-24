import Vuex from 'vuex'

import user from './user'
import shared from './shared'

const store = () => {
  return new Vuex.Store({
    modules: {
      user: user,
      shared: shared
    }
  })
}

export default store;
