<template>
  <div class="tabcontent">
    <h2 v-if="title != ''">{{title}}</h2>
    <span id="txt"></span>
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

      const api = 'https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json';
      this.axios.get(api).then((response) => {
        document.getElementById('txt').innerText = JSON.stringify(response.data);
      })

    },

  }

</script>

<style scoped>

</style>
