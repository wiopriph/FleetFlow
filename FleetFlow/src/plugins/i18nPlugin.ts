import { type App } from 'vue';
import { createI18n } from 'vue-i18n';

import en from '@/locales/en.json';
import ja from '@/locales/ja.json';

const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
    ja,
  },
});

export default (app: App<Element>) => {
  app.use(i18n);
};
