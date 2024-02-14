import axios from 'axios';

export interface TagRecord {
  _id: string;
  name: string;
  created: string;
  description: string;
  heat: number;
  reference_count: number;
  cover?: string;
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
