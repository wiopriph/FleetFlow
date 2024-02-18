import { type App } from 'vue';
import { createPinia } from 'pinia'
import router from '@/router'
import antdPlugin from '@/plugins/antdPlugin';
import firebasePlugin from '@/plugins/firebasePlugin';

export const initPlugins = (app: App<Element>) => {
  app.use(createPinia());
  app.use(router);

  antdPlugin(app);
  firebasePlugin(app);
};
