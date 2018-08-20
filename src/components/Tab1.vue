<template>
  <div class="tabcontent">
    <h3 v-if="title != ''">{{title}}</h3>
    <div>
      <label>한글만 입력</label>
      <input type='text' placeholder="한글만 입력"  data-valid="kor" v-model="input1"/>
    </div>
    <div>
      <label>영문만 입력</label>
      <input type='text' placeholder="영문만 입력"  data-valid="eng"/>
    </div>
    <div>
      <label>한글 및 영문 입력</label>
      <input type='text' placeholder="한글 및 영문 입력" data-valid="kor_eng"/>
    </div>
    <div>
      <label>한글 및 영문, 특수문자 입력</label>
      <input type='text' placeholder="한글 및 영문, 특수문자 입력" data-valid="not_number"/>
    </div>
    <div>
      <label>숫자만 입력</label>
      <input type='text' placeholder="숫자만 입력" data-valid="number"/>
    </div>
    <div>
      <label>글자 수 제한(20자)</label>
      <input type='text' placeholder="글자 수 제한(20자)" data-valid="max_length"/>
    </div>
    <div>
      <label>byte 제한(50byte)</label>
      <input type='text' placeholder="byte 제한(50byte)" data-valid="max_byte"/>
    </div>
    <div>
      <label>URL 형식 체크</label>
      <input type='text' placeholder="URL 형식 체크" data-valid="url"/>
    </div>
  </div>
</template>

<script>

    import Vue from 'vue';
    import VueRx from 'vue-rx'
    import { Observable, Subscription, Subject } from 'rxjs';
    import { pluck } from 'rxjs/operators';
    Vue.use(VueRx, { Observable, Subscription, Subject });

    export default {
      name: "Tab1",
      data () {
        return {
          input1: '',
          title: ''
        }
      },

      beforeMount () {
        this.title = this.$route.query.title || 'Validation';
      },

      created () {
        this.$fromDOMEvent('input','keyup')
          .pipe(
            pluck('target')
          )
          .subscribe(
            (target) => {
              let val = target.value;
              let valid = target.dataset.valid;
              console.log(val + " , " + valid);
            }
          )
      }

      /*
      created () {
        this.$watchAsObservable('input1')
          .pipe(
            pluck('newValue')
          )
          .subscribe(
            (val)=>{ console.log( val); }
          )
      }
      */
    }
</script>

<style scoped>

</style>
