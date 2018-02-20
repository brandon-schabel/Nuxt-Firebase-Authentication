<template>
  <v-layout>
    <h1>Login</h1>
    <app-signin></app-signin>
  </v-layout>
</template>

<script>
import Signin from '../components/Signin';
export default {
  components: {
    appSignin: Signin
  },
}
</script>
