import axios from 'axios';

export interface TagRecord {
  id: string;
  number: number;
  name: string;
}

export interface TagParams extends Partial<TagRecord> {
  pageCurrent: number;
  pageSize: number;
}

export interface TagListRes {
  list: TagRecord[];
  totalCount?: number;
}

export function queryTagList(params: TagParams) {
  return axios.post<TagListRes>('/api/tag/admin/query/list', {
    ...params,
  });
}
