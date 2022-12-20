import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/js/bootstrap.js'
import 'flag-icon-css/css/flag-icons.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:['en','srb','ru'],
    fallbackLng: "en",
    detection:{
      order: ['cookie', 'htmlTag','localStorage', 'sessionStorage', 'navigator', 'querystring', 'path', 'subdomain'],
      caches:['cookie']
    },
    backend:{
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react:{
      useSuspense:false,
    },
    interpolation: {
      escapeValue: false
    }
  }); 


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
