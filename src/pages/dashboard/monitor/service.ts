import { request } from 'umi';
import type { TagType } from './data';

export async function queryTags(): Promise<{ data: { list: TagType[] } }> {
  return request('https://mock.apifox.cn/m1/1401620-0-default/api/tags');
}
