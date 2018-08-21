<template>
  <div class="tabcontent">
    <h3 v-if="title != ''">{{title}}</h3>
    <form onsubmit="return false;">
      <div class="valid">
        <!--<label>한글만 입력</label><br/>-->
        <input type='text' placeholder="한글만 입력"  data-valid="kor" v-model="input1"/>
        <button type="button" class='btn'>valid</button>
        <span class="error"></span>
      </div>
      <div class="valid">
        <!--<label>영문만 입력</label><br/>-->
        <input type='text' placeholder="영문만 입력"  data-valid="eng"/>
        <button type="button" class='btn'>valid</button>
        <span class="error"></span>
      </div>
      <div class="valid">
        <!--<label>한글 및 영문 입력</label><br/>-->
        <input type='text' placeholder="한글 및 영문 입력" data-valid="korEng"/>
        <button type="button" class='btn'>valid</button>
        <span class="error"></span>
      </div>
      <div class="valid">
        <!--<label>한글 및 영문, 특수문자 입력</label><br/>-->
        <input type='text' placeholder="한글 및 영문, 특수문자 입력" data-valid="notNumber"/>
        <button type="button" class='btn'>valid</button>
        <span class="error"></span>
      </div>
      <div class="valid">
        <!--<label>숫자만 입력</label><br/>-->
        <input type='text' placeholder="숫자만 입력" data-valid="number"/>
        <button type="button" class='btn'>valid</button>
        <span class="error"></span>
      </div>
      <div class="valid">
        <!--<label>글자 수 제한(20자)</label><br/>-->
        <input type='text' placeholder="글자 수 제한(20자)" data-valid="maxLength" data-maxlength="20"/>
        <button type="button" class='btn'>valid</button>
        <span class="error"></span>
      </div>
      <div class="valid">
        <!--<label>byte 제한(50byte)</label><br/>-->
        <input type='text' placeholder="byte 제한(50byte)" data-valid="maxByte" data-maxbyte="50"/>
        <button type="button" class='btn'>valid</button>
        <span class="error"></span>
      </div>
      <div class="valid">
        <!--<label>URL 형식 체크</label><br/>-->
        <input type='text' placeholder="URL 형식 체크" data-valid="url"/>
        <button type="button" class='btn'>valid</button>
        <span class="error"></span>
      </div>
      <br/>
      <button type="submit" class="btn_submit">전송</button>
    </form>
  </div>
</template>

<script>

    import Vue from 'vue';
    import VueRx from 'vue-rx'
    import { pluck } from 'rxjs/operators';
    Vue.use(VueRx);

    export default {
      name: "Tab1",
      data () {
        return {
          input1: '',
          title: '',
          noData:'입력된 데이터가 없습니다.'
        }
      },

      beforeMount () {
        this.title = this.$route.query.title || 'Validation';
      },

      created () {
        /*
        this.$fromDOMEvent('input','keyup')
          .pipe(
            pluck('target')
          )
          .subscribe(
            (target) => {
              let val = target.value;
              let valid = target.dataset.valid;
              console.log(val + " , " + valid);
              if(val.length > 2){
                target.nextElementSibling.nextElementSibling.innerText = val;
              }else{
                target.nextElementSibling.nextElementSibling.innerText = '';
              }
            }
          );
        */

        this.$fromDOMEvent('button','click')
          .pipe(
            pluck('target') // target 만 추출.
          )
          .subscribe(
            (target) => {

              if(target.type != 'button'){
                this.validAll();
                return;
              }

              let val = target.previousElementSibling.value; // value 추출
              let valid = target.previousElementSibling.dataset.valid; //valid 속성 추출
              let placeHolder = target.previousElementSibling.placeholder; // placeholder 속성 추출
              let span = target.nextElementSibling; // 다음 엘리먼트 span tag

              let error = this.valid(valid,val,placeHolder,target.previousElementSibling);
              if(error!='') error = '[오류] '+error ;
              span.innerText = error;

            }
          );
      },

      /*
      created () {
        this.$watchAsObservable('input1')
          .pipe(
              pluck('newValue') //oldValue,newValue 두개 넘어오는데 newValue 만 뽑아냄.
          )
          .subscribe(
            (val)=>{ console.log( val); }
          )
      },
      */

      methods: {

        validAll(){

          let buttons = document.querySelectorAll(".btn");
          for(let i in buttons){
            if(buttons[i].tagName == 'BUTTON') {
              buttons[i].click();
            }
          }
        },

        valid(valid,value,error,target){

          if(value=='') return this.noData;

          if(valid=='kor'){

            let pattern = /[^ㄱ-ㅎ가-힣]/;
            if(pattern.test(value)){
              return error;
            }
          }
          if(valid=='eng'){
            let pattern = /[^a-z]/i;
            if(pattern.test(value)){
              return error;
            }
          }
          if(valid=='korEng'){
            let pattern = /[^ㄱ-ㅎ가-힣a-z]/i;
            if(pattern.test(value)){
              return error;
            }
          }
          if(valid=='notNumber'){
            let pattern = /[0-9]/;
            if(pattern.test(value)){
              return error;
            }
          }
          if(valid=='number'){
            let pattern = /[^0-9]/;
            if(pattern.test(value)){
              return error;
            }
          }
          if(valid=='maxLength'){
            let len = value.length;
            if(len > target.dataset.maxlength){
              return error;
            }
          }
          if(valid=='maxByte'){

            let byte = 0;
            for(let i = 0 ; i < value.length ; i++){
              if(escape(value.charAt(i)).length >= 4)
                byte += 3;
              else if(escape(value.charAt(i)) == "%A7") //§기호는 3Byte.
                byte += 3;
              else
              if(escape(value.charAt(i)) != "%0D") // Carriage Return 제외.
                byte++;
            }
            if(byte > target.dataset.maxbyte){
              return error;
            }
          }
          if(valid=='url'){
            let pattern = /^http(s)?:\/\/(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
            if(!pattern.test(value)){
              return error;
            }
          }
          return '';
        }
      }

    }
</script>

<style scoped>

  span.error{
    color : red;
  }
</style>
