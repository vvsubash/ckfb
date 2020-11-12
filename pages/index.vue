<template>
  <div>
    <v-btn @click="logIn">{{ $fire.auth.currentUser || 'hi' }}</v-btn>
  </div>
</template>

<script>
import firebase from 'firebase/app'
export default {
  methods: {
    async logIn() {
      try {
        const authProvider = await $fire.GoogleAuthProvider()

        await this.$fire.auth
          .signInWithRedirect(authProvider)
          .then((result) => {
            alert(result.uid)
          })
      } catch (error) {
        alert(error)
      }
    },
  },
}
</script>
