import localeLogin from '@/views/login/locale/en-US';

/** simple */
import localeCardList from '@/views/system-setting/card/locale/en-US';

import localeStepForm from '@/views/system-setting/step/locale/en-US';

// import localeMultiDAnalysis from '@/views/visualization/multi-dimension-data-analysis/locale/en-US';

import localeUserSetting from '@/views/user/setting/locale/en-US';
/** simple end */

import localeManageUser from '@/views/manage/user/locale/en-US';
import localeManageTag from '@/views/manage/tag/locale/en-US';
import localeManageNote from '@/views/manage/note/locale/en-US';
import localeManageNotice from '@/views/manage/notice/locale/en-US';
import localeManageComment from '@/views/manage/comment/locale/en-US';

import localeSettings from './en-US/settings';

export default {
  'menu.dashboard': 'Dashboard',
  'menu.server.dashboard': 'Dashboard-Server',
  'menu.server.workplace': 'Workplace-Server',
  'menu.server.monitor': 'Monitor-Server',
  'menu.list': 'List',
  'menu.result': 'Result',
  'menu.exception': 'Exception',
  'menu.form': 'Form',
  'menu.profile': 'Profile',
  'menu.visualization': 'Data Visualization',
  'menu.user': 'User Center',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': 'FAQ',
  'navbar.docs': 'Docs',
  'navbar.action.locale': 'Switch to English',
  'menu.manage': 'Manage Page',
  'menu.system-setting': 'System Setting',
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
  // ...localeMultiDAnalysis,
  ...localeUserSetting,
  /** simple end */
};
