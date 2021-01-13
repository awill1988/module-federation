import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

let vuetify: Vuetify;

export function setupVuetify(): Vuetify {
  vuetify = new Vuetify({});
  return vuetify;
}

vuetify = setupVuetify();

export default vuetify;
