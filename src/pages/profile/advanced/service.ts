import { request } from 'umi';

export async function queryAdvancedProfile() {
  return request('https://mock.apifox.cn/m1/1401620-0-default/api/profile/advanced');
}
