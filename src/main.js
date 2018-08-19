import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import {routes} from './router'; //라우터 설정

//라우터 추가.
Vue.use(VueRouter);

//mode: 'history' > URL 에 # 제거
let router = new VueRouter({mode: 'history', routes });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
