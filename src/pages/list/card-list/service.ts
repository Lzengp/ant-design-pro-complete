import { request } from 'umi';
import type { CardListItemDataType } from './data.d';

export async function queryFakeList(params: {
  count: number;
}): Promise<{ data: { list: CardListItemDataType[] } }> {
  return request('https://mock.apifox.cn/m1/1401620-0-default/api/card_fake_list', {
    params,
  });
}
