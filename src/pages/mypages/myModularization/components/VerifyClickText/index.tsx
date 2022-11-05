import ProCardCode from '@/components/ProCardCode';
import { ReloadOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { useEffect, useState } from 'react';
import { code } from './code';
import { dic, exampleText } from './config';
import styles from './index.less';

// 文字依次点击验证
const VerifyClickText = () => {
  const [idiomText, setIdiomText] = useState<string>(''); // 需要选择的成语
  const [needClickText, setNeedClickText] = useState<any>([]); // 成语+ 混淆字
  const [selectText, setSelectText] = useState<any>(''); // 点击选择的字

  useEffect(() => {
    start();
  }, []);

  const refresh = () => {
    setSelectText('');
    start();
  };

  // 获取随机混淆汉字，并且不能是成语里面的字
  const uniqueness = (bigObj: string, smallObj: string) => {
    const data = bigObj.split('');
    data.forEach((item, index) => {
      if (smallObj.includes(item)) {
        delete data[index];
      }
    });
    return data.map((item) => item).join('');
  };

  const start = () => {
    // 获取随机成语
    const math = exampleText[Math.floor(Math.random() * exampleText.length)];
    setIdiomText(math);
    const uniquenessData = uniqueness(dic, math);
    // 获取随机混淆汉字，并且不能是成语里面的字
    let extraStr: any = '';
    for (let i = 0; i < 5; i++) {
      extraStr += uniquenessData[Math.floor(Math.random() * uniquenessData.length)];
    }
    extraStr = math + extraStr;
    const data = [];
    for (let i in extraStr) {
      // i 是 0 - 8
      let left = Math.floor(Math.random() * 300) + 5;
      let top = Math.floor(Math.random() * 300) + 5;
      data.push({
        left: left + 'px',
        top: top + 'px',
        text: extraStr[i],
      });
    }
    setNeedClickText(data);
  };

  // 点击字体事件
  const clickText = (text: string) => {
    const result = {
      ...selectText,
      [text]: Object.keys(selectText).length + 1,
    };
    const textArr = Object.keys(result);
    // 已经点击的字不能再次点击, 超过4个也不能点击
    if (selectText[text] || textArr.length > 4) {
      return;
    }

    setSelectText({ ...result });
    if (textArr.length >= 4) {
      // 开始校验，如果对，直接提交，如果错了刷新重新选
      if (textArr.join('') == idiomText) {
        message.success('恭喜选对了！');
      } else {
        message.error('选错了');
      }
      setTimeout(() => {
        refresh();
      }, 1000);
      return;
    }
  };

  return (
    <div className={styles.verifyClickText}>
      <div className={styles.box}>
        {needClickText.map((item: any) => {
          return (
            <span
              className={styles.showTextStyle}
              style={{
                left: item.left,
                top: item.top,
              }}
              onClick={() => clickText(item.text)}
            >
              {selectText[item.text] && (
                <div className={styles.serialNo}>{selectText[item.text]}</div>
              )}
              {item.text}
            </span>
          );
        })}
        <div className={styles.bgImg}></div>
      </div>
      <div className={styles.titBox}>
        请依次点击: <span className={styles.titBoxText}>{idiomText}</span>
        <ReloadOutlined className={styles.reload} title="刷新" onClick={() => refresh()} />
      </div>
      <ProCardCode code={code} />
    </div>
  );
};

export default VerifyClickText;
