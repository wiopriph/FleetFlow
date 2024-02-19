import { type App } from 'vue';
import VueI18n from 'vue-i18n'

export default (app: App<Element>) => {
  app.use(VueI18n)
};
