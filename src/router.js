import App from './App.vue';

const home = App.components.home;
const tab1 = App.components.tab1;
const tab2 = App.components.tab2;
const tab3 = App.components.tab3;

/*
const home = { template: `<div>Home</div>`};
const t1 = { template: `<div>Tab1</div>`};
const t2 = { template: `<div>Tab2</div>`};
const t3 = { template: `<div>Tab3</div>`};

*/

const notFound = { template: `<div>Page Not Found</div>`};

/*
const routes = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home},
    { path: '/tab1', component: t1 },
    { path: '/tab2', component: t2 },
    { path: '/tab3', component: t3 },
    { path: '*', component: notFound }
  ]
})

export default routes;

*/

export const routes = [
    { path: '/', component: home},
    { path: '/tab1', component: tab1 },
    { path: '/tab2', component: tab2 },
    { path: '/tab3', component: tab3 },
    { path: '*', component: notFound }
    ];
