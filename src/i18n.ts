import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n
  .use(HttpApi)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "fr", // if you're using a language detector, do not define the lng option
    fallbackLng: "fr",
    ns: ["translations"],
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
