import Vue from 'vue';
import 'es6-promise/auto';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './js/router'; //라우터 설정.

Vue.use(VueAxios, axios);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
