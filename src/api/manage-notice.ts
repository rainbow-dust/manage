import axios from 'axios';

export interface NoticeRecord {
  id: string;
  number: number;
  name: string;
}

export interface NoticeParams extends Partial<NoticeRecord> {
  pageCurrent: number;
  pageSize: number;
}

export interface NoticeListRes {
  list: NoticeRecord[];
  totalCount?: number;
}

export function queryNoticeList(params: NoticeParams) {
  return axios.post<NoticeListRes>('/api/Notice/admin/query/list', {
    ...params,
  });
}
