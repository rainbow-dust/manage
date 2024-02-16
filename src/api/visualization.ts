import axios from 'axios';
import { GeneralChart } from '@/types/global';

export interface ChartDataRecord {
  x: string;
  y: number;
  name: string;
}
export interface DataChainGrowth {
  quota: string;
}

export interface DataChainGrowthRes {
  count: number;
  growth: number;
  chartData: {
    xAxis: string[];
    data: { name: string; value: number[] };
  };
}
export function queryDataChainGrowth(data: DataChainGrowth) {
  return axios.post<DataChainGrowthRes>('/api/data-chain-growth', data);
}

export interface PopularAuthorRes {
  list: {
    user: string;
    note_count: number;
    like_count: number;
  }[];
}

export function queryPopularAuthor() {
  return axios.post<PopularAuthorRes>('/api/statistics/popular-author/list');
}

export interface ContentPublishRecord {
  x: string[];
  y: number[];
  name: string;
}

export function queryContentPeriodAnalysis() {
  return axios.post<GeneralChart>('/api/statistics/period-grouped-notes');
}

export interface DataOverviewRes {
  xAxis: string[];
  data: Array<{ name: string; value: number[]; count: number }>;
}

export function queryDataOverview() {
  return axios.post<DataOverviewRes>('/api/statistics/data-overview');
}

export interface StatisticActionsRes {
  data: any[];
  totalCount: number;
}
