import { request } from 'umi';
import type { BasicGood, BasicProgress } from './data.d';

export async function queryBasicProfile(): Promise<{
  data: {
    basicProgress: BasicProgress[];
    basicGoods: BasicGood[];
  };
}> {
  return request('https://mock.apifox.cn/m1/1401620-0-default/api/profile/basic');
}
