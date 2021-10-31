import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageUA from './assets/locale/ua.json';
import languageRU from './assets/locale/ru.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      UA: languageUA,
      RU: languageRU,
    },
    lng: localStorage.getItem('lang') || 'UA',
    fallbackLng: 'UA',
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
      useSuspense: true,
    },
  });

export default i18n;
