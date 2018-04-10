<template>
  <v-container>
    <!-- <login-form></login-form> -->
    <login-form-all></login-form-all>
  </v-container>
</template>

<script>
// import LoginForm from '~/components/LoginForm' // Original Version
import LoginFormAll from '~/components/LoginFormAll' // Firebase UI Version

export default {
  components: {
    // LoginForm // Original Version
    LoginFormAll // Firebase UI Version
  }
}
</script>

<style lang="css">
</style>
