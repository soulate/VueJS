import Vue from 'vue';
//import HelloComponent from './components/Hello.vue';
//import TestComponent from './components/Test.vue';
import MenuComponent from './components/Menu.vue';

new Vue({

  template:
      `
        <div>
          <menu-component></menu-component>
          <test-component></test-component>
        </div>
       `,

  components: {
    MenuComponent
  }
}).$mount("#app")
