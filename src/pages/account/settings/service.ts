import { request } from 'umi';
import type { CurrentUser, GeographicItemType } from './data';

export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  return request('https://mock.apifox.cn/m1/1401620-0-default/api/accountSettingCurrentUser');
}

export async function queryProvince(): Promise<{ data: GeographicItemType[] }> {
  return request('https://mock.apifox.cn/m1/1401620-0-default/api/geographic/province');
}

export async function queryCity(province: string): Promise<{ data: GeographicItemType[] }> {
  return request(`/api/geographic/city/${province}`);
}

export async function query() {
  return request('/api/users');
}
