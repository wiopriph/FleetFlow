import { type App } from 'vue';
import { createPinia } from 'pinia';
import router from '@/router';
import antdPlugin from '@/plugins/antdPlugin';
import firebasePlugin from '@/plugins/firebasePlugin';
import i18nPlugin from '@/plugins/i18nPlugin';

export default (app: App<Element>) => {
  app.use(createPinia());
  app.use(router);

  antdPlugin(app);
  firebasePlugin(app);
  i18nPlugin(app);
};
