import Vue from "vue";
import VueI18n, {LocaleMessages} from "vue-i18n";

Vue.use(VueI18n);

function loadLocaleMessages(): LocaleMessages {
  // Because require.context doesn't work in jest (it's a webpack construct)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (require.context === undefined) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const messages = require("@/locales/en.json");
    return {
      en: messages,
    };
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const locales = require.context(
    "@/locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i,
  );
  const messages: LocaleMessages = {};
  locales.keys().forEach((key: string) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

let i18n: VueI18n;

export function setupI18n(): VueI18n {
  i18n = new VueI18n({
    // TODO, why doesn't it just detect the navigator language?
    locale: process.env.VUE_APP_I18N_LOCALE || "en",
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
    messages: loadLocaleMessages(),
  });
  // TODO, needs to be more robust for other dialects etc.
  const lang = navigator.language;
  switch (lang) {
    default:
    case "en":
    case "en-us":
      i18n.locale = "en";
      break;
    case "es":
    case "es-es":
      i18n.locale = "es";
      break;
  }
  return i18n;
}

i18n = setupI18n();

export default i18n;
