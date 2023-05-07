import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { history, useSelector } from 'umi';
import { Button, Input, Modal } from 'antd';
// import './index.less';
import logo from '@/assets/logo.png';
import f01 from '@/assets/f01.jpg';
import { AlertFilled, AndroidFilled, CloudFilled, EnvironmentOutlined, FieldTimeOutlined, FundFilled, HourglassFilled, PhoneFilled, PhoneOutlined, PushpinFilled, RightOutlined, SettingFilled, ShoppingFilled, SignalFilled, SketchCircleFilled, TagFilled, WhatsAppOutlined } from '@ant-design/icons';


let timer: any = null;
let currentMaxTime = 100;
const CustomerPortal = () => {
  const [minutes, setMinutes] = useState<string>('00');
  const [seconds, setSeconds] = useState<string>('00');
  const [visible, setVisible] = useState<boolean>(false);


  const serviceList = [
    { id: 1, icon: <CloudFilled className={styles['service_item--icon']} />, title: '多页面工作', desc: '标签栏可切换，不必为了新内容而被迫跳转界面，多项工作内容并行处理' },
    { id: 2, icon: <AndroidFilled className={styles['service_item--icon']} />, title: '多页面工作', desc: '标签栏可切换，不必为了新内容而被迫跳转界面，多项工作内容并行处理' },
    { id: 3, icon: <PushpinFilled className={styles['service_item--icon']} />, title: '多页面工作', desc: '标签栏可切换，不必为了新内容而被迫跳转界面，多项工作内容并行处理' },
    { id: 4, icon: <ShoppingFilled className={styles['service_item--icon']} />, title: '多页面工作', desc: '标签栏可切换，不必为了新内容而被迫跳转界面，多项工作内容并行处理' }
  ];

  return (
    <div className={styles.customerPortalWrap}>
      <div className={styles.header}>
        <div className={styles.iconAndName} onClick={() => {
          // history.push('/welcome');
        }}>
          <img
            className={styles.websiteIcon}
            alt="logo"
            // src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            src={logo}
          />
          {/* <span className={styles.name}>四川XXXX有限公司</span> */}
        </div>
        <div className={styles.headerMid}>
          <div className={styles.headerItem}>
            <PhoneOutlined className={styles.headerIcon} />
            <div className={styles.item}>
              <strong>15284734573</strong>
              <div>周一 ~ 周五, 8:30 - 17:30</div>
            </div>
          </div>
          <div className={styles.headerItem}>
            <EnvironmentOutlined className={styles.headerIcon} />
            <div className={styles.item}>
              <strong>四川省成都市高新区</strong>
              <div>四川XXXX有限公司</div>
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <Button>联系我们</Button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.navWrapper}>
          <div className={styles.nav}>
            <ul className={styles.amNavJustify}>
              <li>网站首页</li>
              <li>产品中心</li>
              <li>客户案例</li>
              <li>公司动态</li>
              <li>关于我们</li>
            </ul>
          </div>
        </div>
        <div className={styles['am-tabs']}>
          <div className={styles['am-tabs-item']}>
            <SettingFilled className={styles['am-tabs-item-icon']} />
            <div className={styles['am-tabs-item-title']} >
              <strong>家用电梯</strong>
              <div className={styles['am-tabs-item-desc']} >一句话概述特点</div>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles['am-tabs-item']}>
            <AlertFilled className={styles['am-tabs-item-icon']} />
            <div className={styles['am-tabs-item-title']} >
              <strong>别墅电梯</strong>
              <div className={styles['am-tabs-item-desc']} >一句话概述特点</div>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles['am-tabs-item']}>
            <FundFilled className={styles['am-tabs-item-icon']} />
            <div className={styles['am-tabs-item-title']} >
              <strong>观光电梯</strong>
              <div className={styles['am-tabs-item-desc']} >一句话概述特点</div>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles['am-tabs-item']}>
            <HourglassFilled className={styles['am-tabs-item-icon']} />
            <div className={styles['am-tabs-item-title']} >
              <strong>关于我们</strong>
              <div className={styles['am-tabs-item-desc']} >一句话概述特点</div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.container}>
            <div className={styles['section--header']}>
              <h2 className={styles['section--title']}>核心优势</h2>
              <p className={styles['section--description']}> 全球领先HTML5企业移动化解决方案供应商，由前微软美国总部IE浏览器核心研发团队成员及移动互联网行业专家在美国西雅图创立,获得了微软创投的扶持以及晨兴资本、IDG资本、天创资本等国际顶级风投机构的投资。 </p>
            </div>
            <div className={styles['index-container']}>
              <div className={styles['am-g']}>
                {
                  new Array(4).fill('').map(() => (
                    <div className={styles['am-u-md-3']}>
                      <div className={styles['features_item']}>
                        <img src={f01}></img>
                        <h3 className={styles['features_item--title']}>简单的适配过程</h3>
                        <p className={styles['features_item--text']}>
                          用户可快速学习适配开发，通过丰富的组件库完成页面功能的移动化适配。
                        </p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.container}>
            <div className={styles['section--header']}>
              <h2 className={styles['section--title']}>我们的服务</h2>
              <p className={styles['section--description']}> 全球领先HTML5企业移动化解决方案供应商，由前微软美国总部IE浏览器核心研发团队成员及移动互联网行业专家在美国西雅图创立
                获得了微软创投的扶持以及晨兴资本、IDG资本、天创资本等国际顶级风投机构的投资。</p>
            </div>
            <div className={styles['index-container']}>
              <div className={styles['am-g']}>
                {
                  serviceList.map((d) => (
                    <div className={styles['am-u-md-3']}>
                      <div className={styles['service_item']}>
                        {/* <SketchCircleFilled  /> */}
                        {d.icon}
                        <h3 className={styles['service_item--title']}>{d.title}</h3>
                        <p className={styles['service_item--text']}>
                          {d.desc}
                        </p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>


      </div>

      <div className={styles.footer}>
        <div className={styles['footer--bg']}>

        </div>

        <div className={styles['footer--inner']}>
          <div className={styles['am-g']}>
            <div className={styles['am-u-md-3']}>
              <div className={styles['footer_main--column']}>

                <strong className={styles['footer_main--column_title']}>产品中心</strong>
                <div className={styles['footer_navigation']}>
                  {
                    new Array(3).fill('').map(() => (
                      <div className={styles['footer_navigation--item']}>
                        <div>家用电梯</div>
                        <RightOutlined />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className={styles['am-u-md-6']}>
              <div className={styles['footer_main--column_title']}>关于我们</div>
              <p>云适配(AllMobilize Inc.) 是全球领先的HTML5企业移动化解决方案供应商，由前微软美国总部IE浏览器核心研发团队成员及移动互联网行业专家在美国西雅图创立.</p>
            </div>
            <div className={styles['am-u-md-3']}>
              <div className={styles['footer_main--column_title']}>联系详情</div>
              <div className={styles['footer_address-detail']}>
                <div><PhoneOutlined className={styles['footer_address-detail-icon']} />服务专线：15284734274</div>
                <div><EnvironmentOutlined className={styles['footer_address-detail-icon']} />四川省成都市高新区</div>
                <div><FieldTimeOutlined className={styles['footer_address-detail-icon']} />周一 ~ 周日, 8:00 - 23:00</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPortal;
