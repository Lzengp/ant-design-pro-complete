import { request } from 'umi';
import type { Params, ListItemDataType } from './data';

export async function queryFakeList(
  params: Params,
): Promise<{ data: { list: ListItemDataType[] } }> {
  return request('https://mock.apifox.cn/m1/1401620-0-default/api/fake_list', {
    params,
  });
}
