import axios from 'axios';
import { Sorter } from '@/types/global';

type CollectionStatus = 'normal' | 'deleted' | 'blocked';
export interface UserRecord {
  _id: string;
  username: string;
  status: CollectionStatus;
  createdTime: string;
  be_liked_count: number;
  be_collected_count: number;
  note_count: number;
}

export interface UserParams extends Partial<UserRecord> {
  pageCurrent: number;
  pageSize: number;
  username?: string;
  registerTime?: [string, string];
  status?: CollectionStatus;
  sort?: Sorter[];
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
