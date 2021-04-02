import Vue from 'vue';
import Vuex from 'vuex';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
// import router from  './router';
Vue.use(VueToast);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    IsUserLoggedIn: localStorage.getItem('user') ? true : false,
    User: '',
    Loading: false,
    isActive: true,
    printData:[],
  },
  mutations: {
    logout(state){
      localStorage.clear();
      window.location.href = '/accounts'

    }
  },
  actions: {
    showSuccessMsg(context, message) {
      (Vue as any).$toast.success(message);
    },
    showErrorMsg(context, message) {
      (Vue as any).$toast.error(message);
    }
  },
  getters: {
  },
});
