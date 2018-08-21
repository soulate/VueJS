<template>
  <div class="tabcontent">
    <h3 v-if="title != ''">{{title}}</h3>


    <div class="valid">
      <the-mask type="text" mask="KKKKKKKKKKKKKKKKKKKKKKK" :tokens="myTokens.kor" placeholder="한글만 입력"></the-mask>
    </div>

    <div class="valid">
      <the-mask type="text" mask="SSSSSSSSSSSSSSSSSSSSSS" placeholder="영어만 입력"></the-mask> <!-- 'S': {pattern: /[a-zA-Z]/}, -->
    </div>

    <div class="valid">
      <the-mask type="text" mask="EEEEEEEEEEEEEEEEEEEEEE" :tokens="myTokens.korEng" placeholder="한글 및 영어 입력"></the-mask>
    </div>

    <div class="valid">
      <the-mask type="text" mask="AAAAAAAAAAAAAAAAAAAAAA" :tokens="myTokens.notNumber" placeholder="한글 및 영어, 특수문자 입력"></the-mask>
    </div>

    <div class="valid">
      <the-mask type="text" mask="######################" placeholder="숫자만 입력"></the-mask>  <!-- '#': {pattern: /\d/}, -->
    </div>

  </div>
</template>

<script>

  import { TheMask } from 'vue-the-mask';

  export default {
    name: "Tab2",

    data () {
      return {
        title: '',

        myTokens:{

          kor: {
            'K' : { pattern: /[ㄱ-ㅎ가-힣]/ }
          },

          korEng: {
            'E' : { pattern: /[ㄱ-ㅎ가-힣a-z]/i }
          },

          notNumber: {
            'A' : { pattern: /[^0-9]/ }
          }
        },
      }
    },

    components: { TheMask },

    beforeMount () {
      this.title = this.$route.query.title || 'Mask';
    },

  }

</script>

<style scoped>

</style>
