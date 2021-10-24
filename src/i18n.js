import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
// import XHR from 'i18next-xhr-backend';
import languageUA from './assets/locale/ua.json';
import languageRU from './assets/locale/ru.json';

i18n
//   .use(XHR)
//   .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      UA: languageUA,
      RU: languageRU,
    },
    /* default language when load the website in browser */
    lng: localStorage.getItem('lang') || 'UA',
    /* When react i18next not finding any language to as default in borwser */
    fallbackLng: 'UA',
    /* debugger For Development environment */
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      // wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
      useSuspense: true,
    },
  });

export default i18n;
