import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {I18nextProvider} from 'react-i18next'
import i18next from 'i18next'
import global_en from '../src/translations/en/global.json'
import global_es from '../src/translations/es/global.json'

i18next.init({
  lng : 'es',
  interpolation : {escapeValue: false},
  resources: {
    es : {
      global : global_es
    },
    en: {
      global : global_en
    },
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)