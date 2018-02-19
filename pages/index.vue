<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        Index Page
      </div>
      <app-signin></app-signin>
    </v-flex>
  </v-layout>
</template>

<script>
import * as firebase from 'firebase'
import Signin from '../components/Signin';

export default {
  components: {
    appSignin: Signin
  },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyC61qoH8POsOd51vjB5LyFL6tiefOnRcGY',
      authDomain: 'react-firebase-starter-c28c7.firebaseapp.com',
      databaseURL: 'https://react-firebase-starter-c28c7.firebaseio.com',
      projectId: 'react-firebase-starter-c28c7',
      storageBucket: 'react-firebase-starter-c28c7.appspot.com',
      messagingSenderId: '271307299986'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
}
</script>

