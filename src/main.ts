import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue';
import Axios from 'axios';
import store from './store';
import 'vue-toast-notification/dist/theme-default.css';

Vue.use(BootstrapVue);
Vue.config.productionTip = false

Axios.defaults.baseURL = 'http://localhost:8000';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
