<template>
  <div id="app">
    <router-link to="/">    <button class="tablink">{{home}}</button></router-link>
    <router-link to="/tab1"><button class="tablink">{{tab1}}</button></router-link>
    <router-link to="/tab2"><button class="tablink">{{tab2}}</button></router-link>
    <router-link to="/tab3"><button class="tablink">{{tab3}}</button></router-link>

    <!-- 라우터가 컴포넌트 그리는 영역 -->
    <router-view></router-view>
  </div>
</template>

<script>

  import Vue from 'vue';
  import HomeComponent from './components/Home.vue';
  import Tab1Component from './components/Tab1.vue';
  import Tab2Component from './components/Tab2.vue';
  import Tab3Component from './components/Tab3.vue';
  import ModalComponent from './components/Modal.vue';

  const Tag = '[App.vue] ';

  Vue.component('modal', ModalComponent);

  export default {

    name: 'app',

    components:{
      'home':HomeComponent,
      'tab1':Tab1Component,
      'tab2':Tab2Component,
      'tab3':Tab3Component
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
      //document.getElementById('default').click();
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

    data(){

      return {

        'home' : 'Home',
        'tab1' : 'Validation',
        'tab2' : 'Mask',
        'tab3' : 'Modal',

        'homeColor' : 'red',
        'tab1Color' : 'green',
        'tab2Color' : 'blue',
        'tab3Color' : 'orange'
      }
    },

    methods:{
      goPage(index,color){

      }
    }

  }

</script>

<style scoped>
  * {box-sizing: border-box}

  .tabcontent {
    padding-left: 15px;
    padding-top: 40px;
  }

  /* Set height of body and the document to 100% */
  body, html {
    height: 100%;
    margin: 0;
    font-family: Arial;
  }

  /* Style tab links */
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

