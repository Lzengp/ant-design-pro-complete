import { request } from 'umi';
import type { AnalysisData } from './data';

export async function fakeChartData(): Promise<{ data: AnalysisData }> {
  return request('https://mock.apifox.cn/m1/1401620-0-default/api/fake_analysis_chart_data');
}
