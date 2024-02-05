import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const MANAGE: AppRouteRecordRaw = {
  path: '/manage',
  name: 'manage',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.manage',
    requiresAuth: true,
    icon: 'icon-apps',
    order: 2,
  },
  children: [
    {
      path: 'user',
      name: 'User',
      component: () => import('@/views/manage/user/index.vue'),
      meta: {
        locale: 'menu.manage.user',
        requiresAuth: true,
        icon: 'icon-user-group',
        roles: ['*'],
      },
    },
    {
      path: 'tag',
      name: 'Tag',
      component: () => import('@/views/manage/tag/index.vue'),
      meta: {
        locale: 'menu.manage.tag',
        requiresAuth: true,
        icon: 'icon-tag',
        roles: ['*'],
      },
    },
    {
      path: 'note',
      name: 'Note',
      component: () => import('@/views/manage/note/index.vue'),
      meta: {
        locale: 'menu.manage.note',
        requiresAuth: true,
        icon: 'icon-book',
        roles: ['*'],
      },
    },
    {
      path: 'notice',
      name: 'Notice',
      component: () => import('@/views/manage/notice/index.vue'),
      meta: {
        locale: 'menu.manage.notice',
        requiresAuth: true,
        icon: 'icon-info',
        roles: ['*'],
      },
    },

    {
      path: 'comment',
      name: 'Comment',
      component: () => import('@/views/manage/comment/index.vue'),
      meta: {
        locale: 'menu.manage.comment',
        icon: 'icon-message',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default MANAGE;
