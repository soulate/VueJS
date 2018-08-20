<template>
  <div class="tabcontent">
    <h3 v-if="title != ''">{{title}}</h3>
  </div>
</template>

<script>
  export default {
    name: "Tab2",
    data () {
      return {
        title: ''
      }
    },

    beforeMount () {
      this.title = this.$route.query.title || 'Mask';
    },

  }
</script>

<style scoped>

</style>
