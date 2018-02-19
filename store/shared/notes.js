import { firebaseAction } from 'vuexfire'

const state = {
  notes: []
}

const getters = {
  getAllUserNotes: state => state.menuItems
}

const mutations = {

}

const actions = {
  setNotes: firebaseAction(({ bindFirebaseRef }, { ref }) => { 
    bindFirebaseRef('menuItems', ref) // binds firebase "menuItems" db collection to the state
  })
}

export default {
  state,
  mutations,
  getters,
  actions
}