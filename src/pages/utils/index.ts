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
  let timeText = FormatTime(time, 'YYYY-MM-DD');
  if (timeText == moment().format('YYYY-MM-DD')) {
    timeText = '今天';
  }
  if (timeText == moment().add(-1, 'd').format('YYYY-MM-DD')) {
    timeText = '昨天';
  }
  if (timeText == moment().add(1, 'd').format('YYYY-MM-DD')) {
    timeText = '明天';
  }
  return timeText;
};

export const FormatTime = (time: string, format: string = 'YYYY-MM-DD HH:mm:ss') => {
  return moment(time).add(-8, 'h').format(format);
};
