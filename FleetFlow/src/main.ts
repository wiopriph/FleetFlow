import './assets/main.css';

import { createApp } from 'vue';
import initPlugins from '@/plugins';
import App from './App.vue';

const app = createApp(App);

initPlugins(app);

app.mount('#app');
