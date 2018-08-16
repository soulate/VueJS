import Vue from 'vue'
import HelloComponent from './components/Hello.vue';

new Vue({
  el: '#app',
  template: `
    <div>
      <div>Hello {{name}}!</div>
      Name: <input type="text" v-model="name">
      <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
  `,
  data: {
    name: 'World'
  },
  components: {
    HelloComponent
  }
})
