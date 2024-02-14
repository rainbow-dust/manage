import axios from 'axios';

export interface CommentRecord {
  _id: string;
  content: string;
  like_count: number;
  post_id: string;
  created_at: string;
  child_comment_count?: number;
  root_comment_id?: string;
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

export function blockComment(id: string) {
  return axios.post(`/api/Comment/admin/block/${id}`);
}

export function unblockComment(id: string) {
  return axios.post(`/api/Comment/admin/unblock/${id}`);
}
