import Vue from 'vue';

import MenuComponent from './components/Menu.vue';

new Vue({

  template:
      `
        <div>
          <menu-component></menu-component>
        </div>
       `,

  components: {
    MenuComponent
  }
}).$mount("#app")
