import moment from 'moment';

export const isEmpty = (value: any) => {
  if (Array.isArray(value) && value.length) {
    return false;
  }
  if (value && Object.keys(value).length) {
    return false;
  }
  return true;
};

// 时间换成 今天 昨天
export const TimeToText = (time: string) => {
  let timeText = moment(time).format('YYYY-MM-DD');
  if (moment(time).format('YYYY-MM-DD') == moment().format('YYYY-MM-DD')) {
    timeText = '今天';
  }
  if (moment(time).format('YYYY-MM-DD') == moment().add(-1, 'd').format('YYYY-MM-DD')) {
    timeText = '昨天';
  }
  if (moment(time).format('YYYY-MM-DD') == moment().add(1, 'd').format('YYYY-MM-DD')) {
    timeText = '明天';
  }
  return timeText;
};
