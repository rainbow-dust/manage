import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const SYSTEMSETTING: AppRouteRecordRaw = {
  path: '/system-setting',
  name: 'system-setting',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.system-setting',
    icon: 'icon-settings',
    requiresAuth: true,
    order: 3,
  },
  children: [
    {
      path: 'step',
      name: 'Step',
      component: () => import('@/views/system-setting/step/index.vue'),
      meta: {
        locale: 'menu.form.step',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
    {
      path: 'card',
      name: 'Card',
      component: () => import('@/views/system-setting/card/index.vue'),
      meta: {
        locale: 'menu.list.cardList',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default SYSTEMSETTING;
