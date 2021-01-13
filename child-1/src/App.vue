<template>
  <v-app id="app">
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; 2020 Foundant Technologies</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import "@/assets/styles/base.css";
export default {
  name: "app",
  props: {},
  data: () => ({
    dialog: false,
    langs: [{ flag: "us", lang: "en" }],
  }),
  methods: {
    // eslint-disable-next-line
    setLang: ($root: any, $vuetify: unknown, lang: string) => {
      $root.$i18n.locale = lang;
      // TODO: $vuetify.lang = lang
    },
  },
};

/* eslint-disable */
// Walkme script
(function () {
  if (
      typeof process.env.VUE_APP_WALKME_URI !== "undefined" &&
      process.env.VUE_APP_WALKME_URI !== "" &&
      process.env.VUE_APP_WALKME_URI !== null
  ) {
    const walkme = document.createElement("script");
    walkme.type = "text/javascript";
    walkme.async = true;
    walkme.src = process.env.VUE_APP_WALKME_URI;
    const s = document.getElementsByTagName("script")[0];
    s.parentNode?.insertBefore(walkme, s);
    (window as any)._walkmeConfig = { smartLoad: true };
  }
})();
/* eslint-enable */
</script>
