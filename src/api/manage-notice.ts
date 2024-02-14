import axios from 'axios';

export interface NoticeRecord {
  _id: string;
  created: string;
  type: string;
  topic: string;
  description: string;
  is_read: boolean;
  from:
    | {
        _id: string;
        name: string;
        avatar_url: string;
      }
    | string;
  to:
    | {
        _id: string;
        name: string;
        avatar_url: string;
      }
    | string;
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

export type NoticeCreateP = Omit<NoticeRecord, '_id' | 'created'>;

export function createSysNotice(notice: NoticeCreateP) {
  return axios.post('/api/Notice/admin/add', notice);
}
