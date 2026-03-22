import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '@/locales/en/translation.json'
import ru from '@/locales/ru/translation.json'

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: 'en',
    resources: {
      ru: {
        translation: ru
      },
      en: {
        translation: en
      }
    }
  });


export default i18next;