import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Example from '../components/Example.vue';
import WelcomePage from '../views/Client/Welcomepage.vue';
import LoginPage from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: Example,
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: 'home',
        name: 'home',
        component:HomePage,
      },
      {
        path: '/login',
        name: 'login', // Add a comma here
        component: LoginPage,
      },
      {
        path: 'consultation',
        component: () => import('../views/ConsultationPage.vue'),
      },
      {
        path: '/welcomepage',
        name: 'WelcomePage', // Add a comma here
        component: WelcomePage,
        meta: { requiresAuth: true },
      },
      {
        path: 'schedule',
        component: () => import('../views/SchedulePage.vue'),
      },
      {
        path: 'communication',
        component: () => import('../views/CommunicationPage.vue'),
      },
      {
        path: 'support',
        component: () => import('../views/SupportPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
