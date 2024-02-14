import axios from 'axios';

export interface NoticeRecord {
  _id: string;
  created: string;
  type: string;
  topic: string;
  description: string;

  from: {
    _id: string;
    name: string;
    avatar_url: string;
  };
  to: {
    _id: string;
    name: string;
    avatar_url: string;
  };
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
