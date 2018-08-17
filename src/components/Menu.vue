<template>
  <div>
    <button class="tablink" v-on:click="goPage(tab1,tab1Color)">{{tab1}}</button>
    <button class="tablink" v-on:click="goPage(tab2,tab2Color)">{{tab2}}</button>
    <button class="tablink" v-on:click="goPage(tab3,tab3Color)">{{tab3}}</button>
    <button class="tablink" v-on:click="goPage(tab4,tab4Color)">{{tab4}}</button>
  </div>
</template>

<script>


  export default {

    data(){

      return {
        'tab1' : 'Home',
        'tab2' : 'Tab1',
        'tab3' : 'Tab2',
        'tab4' : 'Tab3',

        'tab1Color' : 'red',
        'tab2Color' : 'green',
        'tab3Color' : 'blue',
        'tab4Color' : 'orange'
      }
    },

    methods:{
        goPage(tabName,color){
          alert(tabName + " , " + color);
        }
    }
  }


</script>

<style scoped>
  * {box-sizing: border-box}

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

  /* Style the tab content (and add height:100% for full page content) */
  .tabcontent {
    color: white;
    display: none;
    padding: 100px 20px;
    height: 100%;
  }

  #Home {background-color: red;}
  #Tab1 {background-color: green;}
  #Tab2 {background-color: blue;}
  #Tab3 {background-color: orange;}
</style>
