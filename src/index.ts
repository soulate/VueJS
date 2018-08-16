import Vue from 'vue';
import HelloComponent from './components/Hello.vue';
import TestComponent from './components/Test.vue';

new Vue({
  el: '#app',
  template: `
    <div>
      <!--
      <div>Hello {{name}}!</div>
      Name: <input type="text" v-model="name">
      <hello-component :name="name" :initialEnthusiasm="5" />
      -->
      <hello-component :name="name" :initialEnthusiasm="5" />
      <test-component/>
    </div>
  `,
  data: {
    name: 'World'
  },
  components: {
    HelloComponent,
    TestComponent
  }
})
