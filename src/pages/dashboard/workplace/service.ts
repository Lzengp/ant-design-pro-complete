import { request } from 'umi';
import type { NoticeType, ActivitiesType, AnalysisData } from './data';

export async function queryProjectNotice(): Promise<{ data: NoticeType[] }> {
  return request('https://mock.apifox.cn/m1/1401620-0-default/api/project/notice');
}

export async function queryActivities(): Promise<{ data: ActivitiesType[] }> {
  return request('https://mock.apifox.cn/m1/1401620-0-default/api/activities');
}

export async function fakeChartData(): Promise<{ data: AnalysisData }> {
  return request('https://mock.apifox.cn/m1/1401620-0-default/api/fake_workplace_chart_data');
}
