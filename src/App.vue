<template>
  <div id="app">
    <router-link to="/">    <button class="tablink">{{home}}</button></router-link>
    <router-link to="/tab1"><button class="tablink">{{tab1}}</button></router-link>
    <router-link to="/tab2"><button class="tablink">{{tab2}}</button></router-link>
    <router-link to="/tab3"><button class="tablink">{{tab3}}</button></router-link>

    <!-- 라우터가 컴포넌트 그리는 영역 -->
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>

  import Vue from 'vue';
  import HomeComponent from './components/Home.vue';
  import Tab1Component from './components/Tab1.vue';
  import Tab2Component from './components/Tab2.vue';
  import Tab3Component from './components/Tab3.vue';
  import ModalComponent from './components/Modal.vue';

  //modal 컴포넌트 전역 컴포넌트로 등록.
  Vue.component('modal-component', ModalComponent);

  const Tag = '[App.vue] ';

  export default {

    name: 'app',

    //컴포넌트 추가. ( router.js 에서 사용 )
    components:{
      'home':HomeComponent,
      'tab1':Tab1Component,
      'tab2':Tab2Component,
      'tab3':Tab3Component
    },

    data(){
      return {
        //화면별 타이틀
        'home' : 'Home',
        'tab1' : 'Validation',
        'tab2' : 'Mask',
        'tab3' : 'Modal',
      }
    },

    beforeCreate(){
      console.log(Tag,"beforeCreate..");
    },
    created(){
      console.log(Tag,"created..");
    },

    beforeMount(){
      console.log(Tag,"beforeMount..");
    },
    mounted(){
      console.log(Tag,"mounted..");
    },

    beforeUpdate(){
      console.log(Tag,"beforeUpdate..");
    },
    updated(){
      console.log(Tag,"updated..");
    },

    beforeDestroy(){
      console.log(Tag,"beforeDestroy..");
    },
    destroyed(){
      console.log(Tag,"destroyed..");
    },
  }

</script>

<style>

  .btn {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
    font-size: 18px;
    height: 30px;
    width: 80px;
    cursor:pointer;
  }

  .btn_submit {
    color: white;
    background: orange;
    border: 1px solid orange;
    border-radius: 2px;
    font-size: 18px;
    height: 30px;
    width: 80px;
    cursor:pointer;
  }

  .valid{
    margin-top: 20px;
  }

  input[type=text]{
    height: 25px;
    width: 350px;
  }

  span.error{
    color : red;
  }

</style>

<style scoped>

  .tabcontent {
    padding-left: 15px;
    padding-top: 40px;
  }

  .tablink {
    background-color: #555;
    color: white;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    font-size: 17px;
    width: 25%;
  }

  .tablink:hover {
    background-color: #777;
  }

</style>

