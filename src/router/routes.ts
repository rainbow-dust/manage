import type { RouteRecordRaw } from 'vue-router'

export const routeForMenu: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '首页',
    component: () => import('~/components/tobe-implemented/index.vue'),
    meta: {
      title: '首页',
      icon: 'home'
    }
  },
  {
    path: '/user',
    name: '用户信息表查询/管理',
    component: () => import('~/pages/manage-user/index.vue'),
    meta: {
      title: '用户信息表查询/管理',
      icon: 'user'
    }
  },
  {
    path: '/content',
    name: '内容表查询/管理',
    component: () => import('~/components/tobe-implemented/index.vue'),
    meta: {
      title: '内容表查询/管理',
      icon: 'file-text'
    }
  },
  {
    path: '/tag',
    name: '标签查询/手动调整',
    component: () => import('~/components/tobe-implemented/index.vue'),
    meta: {
      title: '标签查询/手动调整',
      icon: 'tag'
    }
  },
  {
    path: '/message',
    name: '消息',
    component: () => import('~/components/tobe-implemented/index.vue'),
    meta: {
      title: '消息',
      icon: 'message'
    }
  },
  {
    path: '/statistics',
    name: '统计/看板',
    component: () => import('~/components/tobe-implemented/index.vue'),
    meta: {
      title: '统计/看板',
      icon: 'pie-chart'
    }
  }
]

// ToBeImplemented

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: '登录',
    component: () => import('~/pages/sign/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    name: '首页',
    component: () => import('~/components/tobe-implemented/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/user',
    name: '用户信息表查询/管理',
    component: () => import('~/pages/manage-user/index.vue'),
    meta: {
      title: '用户信息表查询/管理'
    }
  },
  {
    path: '/content',
    name: '内容表查询/管理',
    component: () => import('~/components/tobe-implemented/index.vue'),
    meta: {
      title: '内容表查询/管理'
    }
  },
  {
    path: '/tag',
    name: '标签查询/手动调整',
    component: () => import('~/components/tobe-implemented/index.vue'),
    meta: {
      title: '标签查询/手动调整'
    }
  },
  {
    path: '/message',
    name: '消息',
    component: () => import('~/components/tobe-implemented/index.vue'),
    meta: {
      title: '消息'
    }
  },
  {
    path: '/statistics',
    name: '统计/看板',
    component: () => import('~/components/tobe-implemented/index.vue'),
    meta: {
      title: '统计/看板'
    }
  }
]
