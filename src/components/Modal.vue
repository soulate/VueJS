<template>

  <div class="modal-backdrop" @click="fnDimClose">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          {{param.title}}
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          {{param.contents}}
        </slot>
      </section>
      <footer class="modal-footer">
        <slot name="footer">

          <div class="buttons" v-if="buttons">

            <button type="button"
                    :class="'button'"
                    :style="buttonStyle"
                    v-for="button in buttons"
                    @click="button.closeFunc">
              {{button.title}}
            </button>

          </div>

        </slot>
      </footer>
    </div>
  </div>

</template>
<script>

  export default {
    name: 'modalComponent',

    props:{
      param : {
        type : Object
      },
    },

    data (){
      return {
        defaultButtons : [{ title:'확인', closeFunc:this.close }] //기본 버튼
      }
    },
    computed : {
      buttons() {
        return this.param.buttons.length > 0 ? this.param.buttons : this.defaultButtons;
      },

      buttonStyle() {
        return {
          flex: `1 1 ${100 / this.buttons.length}%`
        }
      }
    },
    methods: {
      fnDimClose(){
        //Dim 영역 클릭시 닫기 여부
        if(this.param.dimClose){
          this.$emit('close'); // $emit > 이벤트 트리거
        }
      }
    }
  };

</script>
<style scoped>

  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 25%;
  }

  .modal-header,
  .modal-footer {
    padding: 10px;
    display: flex;
    font-size: 10px;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: orange;
    font-weight: bold;
    justify-content: space-between;
    font-size: 20px;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: center;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
    height: 70px;
    font-size: 18px;
  }

  .buttons {
    display: flex;
    flex: 0 1 auto;
    width: 100%;
  }

  .button {
    font-size: 15px !important;
    background: transparent;
    padding: 0;
    margin: 0;
    border: 0;
    cursor: pointer;
    box-sizing: border-box;
    height: 30px;
    color: inherit;
    font: inherit;
    outline: none;
  }

  .button:hover {
    background: rgba(0, 0, 0, 0.10);
  }

  .button:active {
    background: rgba(0, 0, 0, 0.025);
  }

  .button:not(:first-of-type) {
    border-left: 1px solid #eee;
  }

</style>
