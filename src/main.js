import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.scss'; // global css

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
