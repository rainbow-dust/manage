import localeLogin from '@/views/login/locale/zh-CN';

/** simple */

import localeCardList from '@/views/system-setting/card/locale/zh-CN';
import localeStepForm from '@/views/system-setting/step/locale/zh-CN';

import localeMultiDAnalysis from '@/views/dashboard/multi-dimension-data-analysis/locale/zh-CN';

import localeUserSetting from '@/views/user/setting/locale/zh-CN';
/** simple end */

import localeManageUser from '@/views/manage/user/locale/zh-CN';
import localeManageTag from '@/views/manage/tag/locale/zh-CN';
import localeManageNote from '@/views/manage/note/locale/zh-CN';
import localeManageNotice from '@/views/manage/notice/locale/zh-CN';
import localeManageComment from '@/views/manage/comment/locale/zh-CN';

import localeSettings from './zh-CN/settings';

export default {
  'menu.dashboard': '仪表盘',
  'menu.server.dashboard': '仪表盘-服务端',
  'menu.server.workplace': '工作台-服务端',
  'menu.server.monitor': '实时监控-服务端',
  'menu.list': '列表页',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': '常见问题',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  'menu.manage': '管理页',
  'menu.system-setting': '系统设置',
  ...localeManageUser,
  ...localeManageTag,
  ...localeManageNote,
  ...localeManageNotice,
  ...localeManageComment,
  ...localeSettings,
  ...localeLogin,
  /** simple */
  ...localeCardList,
  ...localeStepForm,
  ...localeMultiDAnalysis,
  ...localeUserSetting,
  /** simple end */
};
