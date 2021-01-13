import "@foundant/redirector/types/vue";

/* eslint-disable prettier/prettier */
import Vue from "vue";

import i18n from "@/plugins/i18n";
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import store from "@/store";

import App from "@/App.vue";
/* eslint-enable prettier/prettier */

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
