<template>
  <div id="app">
    <fade-transition origin="center" mode="out-in" :duration="250">
      <nuxt/>
    </fade-transition>
  </div>
</template>

<script>
  import {FadeTransition} from "vue2-transitions"

  export default {
    components: {
      FadeTransition,
    }
  }
</script>
