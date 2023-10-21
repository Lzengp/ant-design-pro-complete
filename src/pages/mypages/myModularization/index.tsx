/*
 * @Description:
 * @Author: longwei
 * @Date: 2022-08-11 13:48:52
 * @LastEditors: longwei
 * @LastEditTime: 2022-10-11 10:45:46
 */
import styles from './index.less';
import IconPage from './components/IconPage';
import ReactToPrintPage from './components/ReactToPrintPage';
import ResizeTitle from './components/ResizeTitle';
import SpeakText from './components/SpeakText';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import { useEffect, useState } from 'react';
import VerifyClickText from './components/VerifyClickText';
import StockQuery from './components/StockQuery';
import PlayAudio from './components/PlayAudio';
import GoodTools from './components/GoodTools';
import UsefulGithubProject from './components/UsefulGithubProject';
import TypedJs from './components/TypedJs';
import Introduce from './components/Introduce';
import MultipleDateInput from './components/MultipleDateInput';
import ColumnsSets from './components/ColumnsSets';
// import DragVerificationCode from './components/DragVerificationCode';
import { Decimal } from 'decimal.js';
import MyCard from '@/components/Card';

interface ComponentsProps {
  dom: JSX.Element;
  height?: number;
  id: string; // 模块dom元素id
  name: string; //模块名称
}

// 模块化页面：不同的模块功能组成的一个大页面，用于一些小功能的展示
const myModularization = () => {
  const componentsList = [
    { dom: <MyCard logo={'https://static.wetools.com/assets/images/web/favicon.ico'} title={'微工具'} url={'https://www.wetools.com/'} description={'一个提供免费在线工具集合的网站，例如JSON 格式化校验工具、URL编码/解码等等'} />, id: 'Introduce1', name: '我的卡片' },
    // { dom: <DragVerificationCode />, id: 'DragVerificationCode', name: '拖动验证码', height: 400 },
    { dom: <Introduce />, id: 'Introduce', name: '自我介绍' },
    { dom: <TypedJs />, id: 'TypedJs', name: '打字效果' },
    { dom: <GoodTools />, id: 'GoodTools', name: '好用的工具网址' },
    { dom: <UsefulGithubProject />, id: 'UsefulGithubProject', name: '有意思的GitHub项目' },
    { dom: <IconPage />, id: 'IconPage', name: '图标的使用' },
    { dom: <ReactToPrintPage />, id: 'ReactToPrintPage', name: '打印生成条形码' },
    { dom: <ResizeTitle />, id: 'ResizeTitle', name: '监听窗口滚动' },
    { dom: <SpeakText />, id: 'SpeakText', name: '文字转语音' },
    { dom: <VerifyClickText />, id: 'VerifyClickText', name: '文字点击验证' },
    { dom: <StockQuery />, id: 'StockQuery', name: '股票计算' },
    { dom: <PlayAudio />, id: 'PlayAudio', name: '播放音频' },
    { dom: <MultipleDateInput />, id: 'MultipleDateInput', name: '时间多选控件' },
    { dom: <ColumnsSets />, id: 'ColumnsSets', name: '列缓存设置' },
  ];

  const goAnchor = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({
      behavior: 'smooth', // 平滑过度效果
      block: 'start',
    });
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // 快捷导航 - 鼠标移入触发事件
  useEffect(() => {
    //减法
    var a = 1.0;
    var b = 0.7;
    console.log('直接减法运算 a - b =', a - b);
    console.log('Decimal.js减法运算 a - b =', new Decimal(67126.35).add(new Decimal(-58922.35)).toNumber());
    console.log('Decimal.js惩法运算 a - b =', new Decimal(666.35).mul(new Decimal(100)).toNumber());
    window.localStorage.removeItem('customColumnSettings');
    const drawerMenu = document.getElementById('drawerMenu');
    drawerMenu?.addEventListener('mouseenter', () => {
      showDrawer();
    });
    return () => {
      drawerMenu?.removeEventListener('mouseenter', () => { });
    };


  }, []);

  return (
    <>
      <div style={{ position: 'fixed', top: '48px', right: 0, zIndex: 100 }} title="快捷导航">
        <MenuUnfoldOutlined style={{ fontSize: '25px' }} onClick={showDrawer} id="drawerMenu" />
        <Drawer title="快捷导航" placement="right" onClose={onClose} open={open}>
          <div style={{ display: 'flex', flexFlow: 'column' }}>
            {componentsList.map((item: ComponentsProps) => {
              return (
                <a
                  onClick={(e) => {
                    e.stopPropagation();
                    goAnchor(item.id);
                  }}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </Drawer>
      </div>
      {componentsList.map((item: ComponentsProps) => {
        return (
          <div
            id={item.id}
            className={styles.modularization}
            style={{ height: `${item.height}px` }}
            key={Math.ceil(Math.random() * 1000000)}
          >
            {item.dom}
          </div>
        );
      })}
    </>
  );
};

export default myModularization;
