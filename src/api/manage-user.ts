import axios from 'axios';

type CollectionStatus = 'normal' | 'deleted' | 'blocked';
export interface UserRecord {
  _id: string;
  username: string;
  count: number;
  status: CollectionStatus;
  createdTime: string;
}

export interface UserParams extends Partial<UserRecord> {
  pageCurrent: number;
  pageSize: number;
  username?: string;
  registerTime?: [string, string];
  status?: CollectionStatus;
  sort?: {
    orderKey: string;
    orderType: string;
  }[];
}

export interface UserListRes {
  list: UserRecord[];
  totalCount?: number;
}

export function queryUserList(params: UserParams) {
  return axios.post<UserListRes>('/api/user/admin/query/list', {
    ...params,
  });
}
