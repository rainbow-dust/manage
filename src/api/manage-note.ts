import axios from 'axios';

export interface NoteRecord {
  _id: string;
  status: number;
  like_count: number;
  comment_count: number;
  read_count: number;
  title: string;
  content: string;
  pic_list: [];
  created: string;
  author: {
    _id: string;
    name: string;
    avatar_url: string;
  };
}

export interface NoteParams extends Partial<NoteRecord> {
  pageCurrent: number;
  pageSize: number;
}

export interface NoteListRes {
  noteList: NoteRecord[];
  totalCount?: number;
}

export function queryNoteList(params: NoteParams) {
  return axios.post<NoteListRes>('/api/note/query/list', {
    ...params,
  });
}
