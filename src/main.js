import Vue from 'vue';
import 'es6-promise/auto';
import axios from 'axios';
import VueAxios from 'vue-axios'; //axios 추가.
import VueLodash from 'vue-lodash'; //lodash 추가.
import App from './App.vue';
import router from './js/router'; //라우터 설정.

Vue.use(VueAxios, axios);
Vue.use(VueLodash); //const options = { name: 'lodash' }; // custom use name,  default _

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
