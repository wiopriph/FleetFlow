import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import ErrorLayout from '@/layouts/ErrorLayout.vue';
import Page500 from '@/views/error/Page500.vue';
import Page404 from '@/views/error/Page404.vue';
import mainPage from '@/router/mainPage';

import {RouterNames} from '@/router/constants';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        mainPage,
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: ErrorLayout,
      children: [
        {
          path: '',
          name: RouterNames.ERROR_404,
          component: Page404,
        },
        {
          path: '500',
          name: RouterNames.ERROR_500,
          component: Page500,
        },
      ],
    },
  ]
})

export default router
