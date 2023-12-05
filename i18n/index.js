let en = require('./translations.en.json')
let ja = require('./translations.ja.json')
let ro = require('./translations.ro.json')

const i18n = {
  translations: {
    en: en.i18n,
    ja: ja.i18n,
    ro: ro.i18n,
  },
  defaultLang: 'ja',
  useBrowserDefault: true
}

module.exports = i18n
