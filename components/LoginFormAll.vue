<template>
  <div class="container">
    <div id="firebase-ui-auth-container"></div>
  </div>
</template>

<script>
  import {ui, uiconfig} from "@/services/fireinit";

  export default {
    mounted() {
      ui.start("#firebase-ui-auth-container", uiconfig)
      ui.disableAutoSignIn()
    }
  }
</script>

<style lang="css">

</style>
