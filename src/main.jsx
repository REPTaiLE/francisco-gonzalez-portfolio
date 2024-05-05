import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';

import translationEN from './locales/en.json';
import translationES from './locales/es.json';

i18n.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      translation: translationEN
    },
    es: {
      translation: translationES
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
)
