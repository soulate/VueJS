<template>
  <div class="tabcontent">
    <h2 v-if="title != ''">{{title}}</h2>
    <form id="form" onsubmit="return false;">
      <div class="valid">
        <!--<label>한글만 입력</label><br/>-->
        <input type='text' placeholder="한글만 입력" data-valid="kor" v-model="input1"/>
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
      <button type="submit" class="btn_submit" @click="validAll">전송</button>
    </form>
    <modal v-if="modal.show" :param="modal" @close="modal.show = false">

    </modal>
  </div>
</template>

<script>

    import Vue from 'vue';
    import VueRx from 'vue-rx'
    import { pluck } from 'rxjs/operators';

    Vue.use(VueRx);

    const TAG = '[Tab1.vue] ';

    console.clear();

    export default {
      name: "Tab1",
      data () {
        return {
          input1: '',
          title: '',
          noData:'입력된 데이터가 없습니다.',

          modal : {
            title : '',
            contents : '',
            dimClose : false,
            buttons : [],
            show: false
          },


        }
      },

      beforeMount () {
        this.title = this.$route.query.title || 'Validation';
      },

      created () {

        const $this = this;
        const buttons = this.$fromDOMEvent('#form button','click')
          .pipe(
            pluck('target') // target 만 추출.
          );
        buttons.subscribe({
          next(target){

            if (target.type == 'submit') return;

            let value = target.previousElementSibling.value; // value 추출
            let valid = target.previousElementSibling.dataset.valid; //valid 속성 추출
            let placeHolder = target.previousElementSibling.placeholder; // placeholder 속성 추출
            let span = target.nextElementSibling; //error 문구 span

            let param = {
              'valid': valid,
              'value': value,
              'error': placeHolder,
              'target': target.previousElementSibling
            };

            //let error = $this.valid(valid,value,placeHolder,target.previousElementSibling);
            let error = $this.valid(param);
            span.innerText='';

            target.dataset.validYn = 'N';

            let msg = '[오류] '+error;
            if(error != '') {
              this.error(msg,span);
            }
            else if (error == ''){
              target.dataset.validYn = 'Y';
            }
          },
          error(error,span){
            span.innerText = error;
            console.log(TAG + ' ERROR >>> ', error);
          }
        });
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

        toggle(){
          this.modal.show = !this.modal.show;
        },

        save(){
          this.modal.title = 'Confirm';
          this.modal.contents = ' 전송 하시겠습니까?';
          this.modal.dimClose = false;
          this.modal.buttons = [
            { title : '확인', closeFunc : () => {
                this.toggle();
            }},
            { title : '취소', closeFunc : () => {
                this.toggle();
            }},

          ];
          this.toggle();
        },

        validAll(){

          let isValid = true;
          //btn 클래스 click 이벤트 발생.
          let buttons = document.querySelectorAll(".btn");
          for(let i in buttons){
            if(buttons[i].tagName == 'BUTTON') {
              buttons[i].click();
              if( buttons[i].dataset.validYn == 'N'){
                isValid = false;
              }
            }
          }

          //valid가 모두 통과 됐을 경우.
          if (isValid) {
            this.save();
          }
        },

        valid(obj){

          let valid = obj.valid;
          let value = obj.value;
          let error = obj.error;
          let target = obj.target;

          if(value=='') return this.noData;

          if(valid=='kor'){

            let pattern = /[^ㄱ-ㅎ가-힣]/g;
            if(pattern.test(value)){
              return error;
            }
          }
          if(valid=='eng'){
            let pattern = /[^a-z]/gi;
            if(pattern.test(value)){
              return error;
            }
          }
          if(valid=='korEng'){
            let pattern = /[^ㄱ-ㅎ가-힣a-z]/gi;
            if(pattern.test(value)){
              return error;
            }
          }
          if(valid=='notNumber'){
            let pattern = /[0-9]/g;
            if(pattern.test(value)){
              return error;
            }
          }
          if(valid=='number'){
            let pattern = /[^0-9]/g;
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
