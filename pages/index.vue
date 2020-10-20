<template>
  <div>
    <v-btn @click="logIn">{{ $fireAuth.currentUser || 'hi' }}</v-btn>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
export default {
  methods: {
    async logIn() {
      try {
        const authProvider = new firebase.auth.GoogleAuthProvider()

        await this.$fireAuth
          .signInWithRedirect(authProvider)
          .then((result) => {
            alert(result.uid)
          })
          .catch((err) => {})
      } catch (error) {
        alert(error)
      }
    },
  },
}
</script>
