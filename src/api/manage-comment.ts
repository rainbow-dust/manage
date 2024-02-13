import axios from 'axios';
import type { DescData } from '@arco-design/web-vue/es/descriptions/interface';

export interface PolicyRecord {
  id: string;
  number: number;
  name: string;
  contentType: 'img' | 'horizontalVideo' | 'verticalVideo';
  filterType: 'artificial' | 'rules';
  count: number;
  status: 'online' | 'offline';
  createdTime: string;
}

export interface PolicyParams extends Partial<PolicyRecord> {
  pageCurrent: number;
  pageSize: number;
  [key: string]: any;
}

export interface PolicyListRes {
  list: PolicyRecord[];
  noteList: [];
  totalCount?: number;
}

export function queryPolicyList(params: PolicyParams) {
  return axios.post<PolicyListRes>('/api/comment/admin/query/list', {
    ...params,
  });
}

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
