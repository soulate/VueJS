import Vue from 'vue';
import 'es6-promise/auto'; // IE 대응
import axios from 'axios';
import VueAxios from 'vue-axios'; //axios 추가.
import VueLodash from 'vue-lodash'; //lodash 추가.
import VueProgressBar from 'vue-progressbar'
import App from './App.vue';
import router from './js/router'; //라우터 설정.

Vue.use(VueAxios, axios);
Vue.use(VueLodash); //const options = { name: 'lodash' }; // custom use name,  default _

const options = {
  color: '#4AAE9B',
  failedColor: '#FFA500',
  thickness: '5px',
  transition: {
    speed: '0.3s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
};
Vue.use(VueProgressBar, options);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
