import { request } from 'umi';
import type { CurrentUser, ListItemDataType } from './data.d';

export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  return request('https://mock.apifox.cn/m1/1401620-0-default/api/currentUserDetail');
}

export async function queryFakeList(params: {
  count: number;
}): Promise<{ data: { list: ListItemDataType[] } }> {
  return request('https://mock.apifox.cn/m1/1401620-0-default/api/fake_list_Detail', {
    params,
  });
}
