import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import ru from "./locales/ru/translation.json";

const isReturningUser = "lang" in localStorage;
const savedLanguage = JSON.parse(localStorage.getItem("lang"));

const language = isReturningUser ? savedLanguage : "ru";

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  keyseparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
