import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

axios.defaults.baseURL = 'https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json';

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
