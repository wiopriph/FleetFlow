import { type App } from 'vue';
import { createI18n } from 'vue-i18n';

import enUS from '@/locales/en-US';
import jaCH from '@/locales/ja-CH';

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: enUS,
    ja: jaCH,
  },
});

export default (app: App<Element>) => {
  app.use(i18n);
};
