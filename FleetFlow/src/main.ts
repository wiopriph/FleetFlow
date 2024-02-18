import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { initPlugins } from '@/plugins';

const app = createApp(App);

initPlugins(app);

app.mount('#app');
