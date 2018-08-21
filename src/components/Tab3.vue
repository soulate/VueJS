<template>
  <div class="tabcontent">
    <h2 v-if="title != ''">{{title}}</h2>

    <button class='btn' @click="openAlert">{{alert}}</button>
    <button class='btn' @click="openConfirm">{{confirm}}</button>

    <modal v-if="modal.show" :param="modal" @close="modal.show = false">

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

    const TAG = '[Tab3.vue] ';

    export default {

      name: "Tab3",

      data(){
        return{
          alert:'Alert',
          confirm:'Confirm',
          title:'',

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
        this.title = this.$route.query.title || 'Modal';
      },

      methods: {

        toggle(){
          this.modal.show = !this.modal.show;
        },

        openAlert(){
            this.modal.title = 'Alert';
            this.modal.contents = '완료 되었습니다.';
            this.modal.dimClose = true;
            this.modal.buttons = [
              { title : '닫기', closeFunc : () => {
                  this.toggle();
              } }
            ];
            this.toggle();
        },
        openConfirm(){
          this.modal.title = 'Confirm';
          this.modal.contents = ' 종료 하시겠습니까?';
          this.modal.dimClose = false;
          this.modal.buttons = [
            { title : '확인', closeFunc : () => {
                this.toggle();
            } },
            { title : '취소', closeFunc : () => {
                this.toggle();
            } },
            //{ title : '기타', closeFunc : () => { this.toggle(); } },
          ];
          this.toggle();
        }
      }

    }
</script>

<style scoped>


</style>
