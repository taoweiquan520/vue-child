import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import store from './store';
import routes from './router';
// import "./public-path";

Vue.config.productionTip = false

let instance = null;
let router = null;

function render() {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/demo1' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  
  // Array.isArray(props.data.fns) && props.data.fns.map(i => {
  //   console.log(i)
  //   Vue.prototype[`$${i.name}`] = i
  // });
  render();
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}