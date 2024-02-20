import { type App } from 'vue';
import { initializeApp } from 'firebase/app';
import { VueFire } from 'vuefire';

const firebaseApp = initializeApp({
  // your application settings
});

export default (app: App<Element>) => {
  app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
    ],
  });
};
