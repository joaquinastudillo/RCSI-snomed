import Vue from "vue";
import App from "./App.vue";


import "bulma";
import "bulma/css/bulma.min.css";
import router from './router'
import store from './store/store'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
