<template>
  <div class="tabcontent">
    <h3 v-if="title != ''">{{title}}</h3>
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
