import Vue from 'vue';
import App from './App.vue';
import router from './js/router'; //라우터 설정.

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
