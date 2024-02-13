import axios from 'axios';

export interface NoteRecord {
  id: string;
  number: number;
  name: string;
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
