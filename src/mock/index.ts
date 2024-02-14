import Mock from 'mockjs';

import './user';

/** simple */

import '@/views/system-setting/card/mock';
import '@/views/system-setting/step/mock';
import '@/views/profile/basic/mock';
import '@/views/dashboard/multi-dimension-data-analysis/mock';
import '@/views/user/info/mock';
import '@/views/user/setting/mock';
/** simple end */

Mock.setup({
  timeout: '600-1000',
});
