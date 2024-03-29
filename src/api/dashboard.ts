import axios from 'axios';
import type { TableData } from '@arco-design/web-vue/es/table/interface';

export interface ContentDataRecord {
  x: string;
  y: number;
}

export function queryContentData() {
  return axios.get<ContentDataRecord[]>('/api/content-data');
}

export interface PopularRecord {
  key: number;
  clickNumber: string;
  title: string;
  increases: number;
}
export interface PopularNoteRes {
  list: PopularRecord[];
}

export function queryPopularList() {
  return axios.post<PopularNoteRes>('/api/statistics/popular-note/list');
}

export function queryPopularRequestList() {
  return axios.post<any>('/api/statistics/popular-request/list');
}
