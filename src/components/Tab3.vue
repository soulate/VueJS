<template>
  <div class="tabcontent">
    <h3>Modal</h3>

    <button class="btn-green" @click="openAlert">{{alert}}</button>
    <button class="btn-green" @click="openConfirm">{{confirm}}</button>

    <modal v-if="show" :param="modal" @close="show = false">

      <!--
      <div slot="header">
        <h3 style="color: red;">커스텀 타이틀</h3>
      </div>
      <div slot="body">
        <h4 style="color:blue;">커스텀 컨텐츠</h4>
      </div>
      -->

    </modal>

  </div>
</template>

<script>

    const Tag = '[Tab3.vue] ';

    export default {

      name: "Tab3",

      data(){
        return{
          alert:'Alert',
          confirm:'Confirm',
          show: false,
          modal : {
            title : '',
            contents : '',
            dimClose : false,
            buttons : []
          },
        }
      },

      methods: {
        toggle(){
          if(this.show) this.show = false;
          else this.show = true;
        },

        openAlert : function (){
            this.modal.title = 'Alert';
            this.modal.contents = '완료 되었습니다.';
            this.modal.dimClose = true;
            this.modal.buttons = [
              { title : '닫기', closeFunc : () => { this.toggle(); } }
            ];
            this.toggle();
        },
        openConfirm : function (){
          this.modal.title = 'Confirm';
          this.modal.contents = ' 종료 하시겠습니까?';
          this.modal.dimClose = false;
          this.modal.buttons = [
            { title : '확인', closeFunc : () => { this.toggle(); } },
            { title : '취소', closeFunc : () => { this.toggle(); } },
            //{ title : '기타', closeFunc : () => { this.toggle(); } },
          ];
          this.toggle();
        }
      }

    }
</script>

<style scoped>

  .tabcontent {
    background-color: darkseagreen;
    padding-left: 15px;
    padding-top: 40px;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
    font-size: 10px;
    height: 25px;

  }

</style>
