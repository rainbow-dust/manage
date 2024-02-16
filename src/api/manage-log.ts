import axios from 'axios';

export interface ActionRecord {
  _id: string;
  user: string;
  device: string;
  time_stamp: string;
  page_url: string;
  type: string;
  action: string;
  extra_data_for_event: string;
  patch_id: string;
}

export interface ActionParams extends Partial<ActionRecord> {
  pageCurrent: number;
  pageSize: number;
}

export interface StatisticActionsRes {
  list: ActionRecord[];
  totalCount?: number;
}

export function queryStatisticActions(param: ActionParams) {
  return axios.post<StatisticActionsRes>(
    '/api/statistics/statistic-actions/query/list',
    param
  );
}
