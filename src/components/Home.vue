<template>
  <div class="tabcontent">
    <h2 v-if="title != ''">{{title}}</h2>
    <span v-html="txt"></span>
  </div>
</template>

<script>

  export default {

    data () {
      return {
        title: '',
        txt:''
      }
    },

    beforeMount () {

      this.title = this.$route.query.title || 'Home';

      this.$Progress.start();
      const api = 'https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json';
      this.axios.get(api).then((res) => {

        this.txt = JSON.stringify(res.data);
        console.log("!!!!!!!!! ", this._.random(20) );
        
        this.$Progress.finish();

      }).catch((error) => {
          console.log("[ catch ] ",error);
          this.$Progress.fail();
      }).finally(()=>{
          console.log("[ finally ] ");

      });

    },

  }

</script>

<style scoped>

</style>
