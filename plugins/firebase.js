import * as firebase from 'firebase'
import config from './config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default (context) => {
  const {
    store
  } = context

  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => {
      store.commit('setUser', user)
      resolve()
    })
  })
}
