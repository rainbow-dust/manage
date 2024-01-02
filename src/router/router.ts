import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import { routes } from './routes'

export const router = createRouter({
  history: __DEV__ ? createWebHistory() : createWebHashHistory(),
  routes
})
