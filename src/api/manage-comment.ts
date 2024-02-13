import axios from 'axios';

export interface CommentRecord {
  id: string;
  number: number;
  name: string;
}

export interface CommentParams extends Partial<CommentRecord> {
  pageCurrent: number;
  pageSize: number;
}

export interface CommentListRes {
  list: CommentRecord[];
  totalCount?: number;
}

export function queryCommentList(params: CommentParams) {
  return axios.post<CommentListRes>('/api/Comment/admin/query/list', {
    ...params,
  });
}
