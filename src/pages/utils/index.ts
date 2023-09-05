import moment from 'moment';
import ScrollReveal from 'scrollreveal';

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



// blob转码成JSON
export const bufferToJSON = (buffer: any) => {
  let array = new Uint8Array(buffer);
  let out, i, len, c;
  let char2, char3;
  out = '';
  len = array.length;
  i = 0;
  while (i < len) {
    c = array[i++];
    switch (c >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        out += String.fromCharCode(c);
        break;
      case 12:
      case 13:
        char2 = array[i++];
        out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
        break;
      case 14:
        char2 = array[i++];
        char3 = array[i++];
        out += String.fromCharCode(
          ((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0)
        );
        break;
      default:
        break;
    }
  }
  try {
    return JSON.parse(out);
  } catch (e) {
    return {};
  }
};

// const blob = new Blob([response.data]);
//     //错误判断
//     const res = bufferToJSON(response.data)
//     if (res && res.code === 500) {
//         message.error(res.message || '操作失败！');
//         return
//     }

// 判断是手机还是pc
export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent);
};

export const initScrollReveal = () => {
  const scrollReveal = new ScrollReveal();
  const config = (origin: string, duration: number = 2000) => {
    return {
      duration,
      origin,
      reset: false, // 动画是否重复
      mobile: true,
      distance: '500px',
      opacity: 0, // 初始透明度
      // viewOffset: {//可看到的范围，全屏往里缩
      //   top: 150,
      //   right: 0,
      //   bottom: 150,
      //   left: 0
      // },
    };
  };
  scrollReveal.reveal('.left', {
    ...config('left')
  });
  scrollReveal.reveal('.right', {
    ...config('right')
  });
  scrollReveal.reveal('.top', {
    ...config('top')
  });
  scrollReveal.reveal('.bottom', {
    ...config('bottom')
  });
  scrollReveal.reveal('.bottom-duration-2500', {
    ...config('bottom', 2500)
  });
  scrollReveal.reveal('.bottom-duration-3000', {
    ...config('bottom', 3000)
  });
};


// 动态替换浏览器tab页签名称
export const setBrowserTabTitle = (name: string) => {
  const title = document.getElementsByTagName('title')[0];
  if (title && name) {
    title.innerText = name;
  }
}