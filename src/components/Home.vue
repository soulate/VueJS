<template>
  <div class="tabcontent">
    <h2 v-if="title != ''">{{title}}</h2>
  </div>
</template>

<script>

  export default {

    data () {
      return {
        title: ''
      }
    },

    beforeMount () {
      this.title = this.$route.query.title || 'Home';
    },

  }

</script>

<style scoped>

</style>
