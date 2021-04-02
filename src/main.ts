import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue';
import Axios from 'axios';

Vue.use(BootstrapVue);
Vue.config.productionTip = false

Axios.defaults.baseURL = 'http://localhost:800';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
