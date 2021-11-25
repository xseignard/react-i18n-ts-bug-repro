import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  ns: Object.keys(en),
  debug: true,
  resources: {
    en
  },
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});
