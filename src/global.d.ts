import "react-i18next";
import en from "./i18n/locales/en";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: 'ns0',
    resources: typeof en;
  }
}
