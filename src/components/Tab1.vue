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
    import { checkValid } from '../js/util';

    Vue.use(VueRx);

    const TAG = '[Tab1.vue] ';

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

        const buttons$ = this.$fromDOMEvent('#form button','click')
          .pipe( // pipe 안쓰면 오류남.
            pluck('target') // target 만 추출.
          );
        buttons$.subscribe({
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

            //무조건 Valid N으로 세팅.
            target.dataset.validYn = 'N';

            //유효성 체크 함수.
            let error = checkValid(param);
            span.innerText='';

            let msg = '[오류] '+error;
            if(error != '') {
              this.error(msg,span);
            }

            //Valid 통과되면 Y로 세팅
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

        //모달 표시 여부 토글
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
        }

      }

    }
</script>

<style scoped>

  span.error{
    color : red;
  }
</style>
