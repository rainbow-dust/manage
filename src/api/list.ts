import axios from 'axios';
import type { DescData } from '@arco-design/web-vue/es/descriptions/interface';

export interface ServiceRecord {
  id: number;
  title: string;
  description: string;
  name?: string;
  actionType?: string;
  icon?: string;
  data?: DescData[];
  enable?: boolean;
  expires?: boolean;
}
export function queryInspectionList() {
  return axios.get('/api/user/admin/query/list');
}

export function queryTheServiceList() {
  return axios.get('/api/note/the-service');
}

export function queryRulesPresetList() {
  return axios.get('/api/note/rules-preset');
}
