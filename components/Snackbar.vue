<template>
  <div v-if="show" :class="'mt-2 alert alert-dismissible fade show alert-' + color" role="alert">
    <span class="alert-inner--text"><strong>Aviso!</strong> {{message}}</span>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          show: false,
          message: '',
          color: ''
        }
      },
      created: function () {
        this.$store.watch(state => state.snack, () => {
          const msg = this.$store.state.snack
          if (msg !== '') {
            this.show = true
            this.message = this.$store.state.snack
            this.color = this.$store.state.color
            this.$store.commit('setSnack', '')
          }
        })
      }
    }
</script>
