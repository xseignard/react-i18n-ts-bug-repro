import "react-i18next";
import en from "./src/i18n/locales/en";

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: typeof en;
  }
}
