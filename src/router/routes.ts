import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'cabinet',
        component: () => import('pages/CabinetPage.vue'),
      },
      {
        path: 'order',
        component: () => import('pages/OrderPage.vue'),
      },
      {
        path: 'chat',
        component: () => import('pages/ChatPage.vue'),
      },
      {
        path: 'tatoo',
        component: () => import('pages/TatooPage.vue'),
      },
      {
        path: 'profs',
        component: () => import('pages/ProfessionalPage.vue'),
      },
      {
        path: 'settings',
        component: () => import('pages/SettingsPage.vue'),
      },
      {
        path: 'feedback',
        component: () => import('pages/FeedbackPage.vue'),
      },
      {
        path: 'help',
        component: () => import('pages/HelpPage.vue'),
      },
    ],
  },
  // Always leave this as last one
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
