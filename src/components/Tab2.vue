<template>
  <div class="tabcontent">
    <h2 v-if="title != ''">{{title}}</h2>


    <div class="valid">
      <the-mask type="text" mask="KKKKKKKKKKKKKKKKKKKKKKK" :tokens="myTokens.kor" placeholder="한글만 입력"></the-mask>
    </div>

    <div class="valid">
      <the-mask type="text" mask="SSSSSSSSSSSSSSSSSSSSSS" placeholder="영문만 입력"></the-mask> <!-- 'S': {pattern: /[a-zA-Z]/}, -->
    </div>

    <div class="valid">
      <the-mask type="text" mask="EEEEEEEEEEEEEEEEEEEEEE" :tokens="myTokens.korEng" placeholder="한글 및 영문 입력"></the-mask>
    </div>

    <div class="valid">
      <the-mask type="text" mask="AAAAAAAAAAAAAAAAAAAAAA" :tokens="myTokens.notNumber" placeholder="한글 및 영문, 특수문자 입력"></the-mask>
    </div>

    <div class="valid">
      <the-mask type="text" mask="######################" placeholder="숫자만 입력"></the-mask>  <!-- '#': {pattern: /\d/}, -->
    </div>

  </div>
</template>

<script>

  import { TheMask } from 'vue-the-mask';

  const TAG = '[Tab2.vue] ';

  export default {
    name: "Tab2",

    data () {
      return {
        title: '',

        //커스텀 토큰
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

    //콤포넌트 추가.
    components: {
      TheMask
    },

    beforeMount () {
      this.title = this.$route.query.title || 'Mask';
    },

  }

</script>

<style scoped>

</style>
