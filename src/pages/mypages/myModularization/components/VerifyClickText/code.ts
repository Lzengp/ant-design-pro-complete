export const code = `
~~~tsx
import { ReloadOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { useEffect, useState } from 'react';
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
    </div>
  );
};

export default VerifyClickText;

~~~

index.less
~~~css
.verifyClickText {
    padding: 20px;
  
    .box {
      position: relative;
      width: 420px;
      height: 420px;
      border: 10px solid #c1c1c1;
      border-radius: 10px;
  
      .showTextStyle {
        position: absolute;
        z-index: 20;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        user-select: none;
  
        .serialNo {
          position: absolute;
          left: 20px;
          width: 20px;
          height: 20px;
          font-size: 15px;
          line-height: 20px;
          text-align: center;
          background-color: #1abd6c;
          border-radius: 50%;
        }
      }
      // 背景图 模糊
      .bgImg {
        width: 100%;
        height: 100%;
        background: url('https://img2.baidu.com/it/u=2248863795,4033026016&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800')
          no-repeat;
        background-position: center;
        background-size: cover;
        // 模糊滤镜
        filter: blur(10px);
      }
    }
  
    // 底部提示区
    .titBox {
      width: 420px;
      height: 50px;
      margin-top: 15px;
      color: #333;
      font-size: 26px;
      line-height: 50px;
      text-align: center;
      background-color: #c1c1c1;
      border-radius: 10px;
  
      // 文字区
      .titBoxText {
        color: #6097eb;
        font-weight: bold;
      }
  
      .reload {
        margin-left: 30px;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
  
~~~

config.tsx
~~~tsx
export const dic = '的一是在不了有和人这中大为上个国我以要他
时来用们生到作地于出就分对成会可主发年动
同工也能下过子说产种面而方后多定行学法所
民得经十三之进着等部度家电力里如水化高自
二理起小物现实加量都两体制机当使点从业本
去把性好应开它合还因由其些然前外天政四日
那社义事平形相全表间样与关各重新线内数正
心反你明看原又么利比或但质气第向道命此变
条只没结解问意建月公无系军很情者最立代想
已通并提直题党程展五果料象员革位入常文总
次品式活设及管特件长求老头基资边流路级少
图山统接知较将组见计别她手角期根论运农指
几九区强放决西被干做必战先回则任取据处队
南给色光门即保治北造百规热领七海口东导器
压志世金增争济阶油思术极交受联什认六共权
收证改清己美再采转更单风切打白教速花带安
场身车例真务具万每目至达走积示议声报斗完
类八离华名确才科张信马节话米整空元况今集
温传土许步群广石记需段研界拉林律叫且究观
越织装';

export const exampleText = [
  '先入为主',
  '骑马找马',
  '张灯结彩',
  '一言为定',
  '取长补短',
  '水秀山明',
  '古今中外',
  '瓜田李下',
  '先来后到',
  '前思后想',
  '桃红柳绿',
  '回天无力',
  '先人后己',
  '你追我赶',
  '深情厚谊',
  '顶天立地',
  '一团和气',
  '万水千山',
  '千军万马',
  '马到成功',
  '贪生怕死',
  '柳绿花红',
  '一事无成',
  '美中不足',
  '落地生根',
  '走马观花',
  '坐井观天',
];

~~~
`;
