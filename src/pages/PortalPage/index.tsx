import logo from '@/assets/logo.png';
import styles from './index.less';
import Footer from './component/Footer';
import HomePage from './component/HomePage';
import { useEffect, useState } from 'react';
import AboutCompany from './component/AboutCompany';
import ContactUs from './component/ContactUs';
import { DownOutlined, VerticalAlignTopOutlined } from '@ant-design/icons';
import { BackTop, message } from 'antd';
import ProductIntroduction from './component/ProductIntroduction';
import Solution from './component/Solution';
import { initScrollReveal } from '../utils';

const PortalPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const setScrollIntoView = () => {
    document.querySelector(`#anchorPoint`)?.scrollIntoView({
      behavior: 'smooth', // 平滑过度效果
      block: 'start',
    });
  };

  const headClick = (e: any) => {
    setScrollIntoView();
    if (e.target.nodeName === 'DIV') {
      switch (e.target.innerText) {
        case '首页':
          setCurrentPage(1);
          // history.replaceState('');
          // history.replace({ pathname: '/portalPage/home' });
          break;
        case '产品介绍':
          setCurrentPage(2);
          // history.replace({ pathname: '/portalPage/desc' });
          break;
        case '解决方案':
          // setCurrentPage(3);
          break;
        case '关于艾普':
          setCurrentPage(4);
          break;
        case '联系我们':
          setCurrentPage(5);
          break;
        default:
          break;
      }
    }
  };

  const messageInfo = () => {
    message.destroy();
    message.info('更多内容正在更新中，敬请期待！');
  };

  useEffect(() => {
    initScrollReveal();
  }, [currentPage]);

  return (
    <div className={styles['portalpage-wrap']}>
      <div className={styles['portalpage-head']}>
        <div className={styles['head-content']}>
          <div className={styles['head-img']}>
            {/* <img src={gjlogo}></img> */}
            <img src={logo} onClick={() => {
              setScrollIntoView();
              setCurrentPage(1);
            }}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <nav className={styles['head-nav']} onClick={headClick}>
            <div style={{ color: currentPage === 1 ? '#1890ff' : '' }}>首页</div>
            <div style={{ color: currentPage === 2 ? '#1890ff' : '' }}>产品介绍</div>
            <div
              style={{ color: currentPage === 3 ? '#1890ff' : '' }}
              className={styles['solution']}
            >
              解决方案
              <DownOutlined className="solution-anticon-down" />
              <div className={styles['solution-detail']}>
                <div className={styles['solution-detail-item']}>
                  <a onClick={() => { setCurrentPage(3); }}>
                    国际智慧供应链
                  </a>
                  <a onClick={messageInfo}>
                    国内智慧供应链
                  </a>
                  <a onClick={messageInfo}>
                    全球贸易
                  </a>
                  <a onClick={messageInfo}>
                    智能制造
                  </a>
                  <a onClick={messageInfo}>
                    全渠道管理
                  </a>
                </div>
              </div>
            </div>
            <div style={{ color: currentPage === 4 ? '#1890ff' : '' }}>关于艾普</div>
            <div style={{ color: currentPage === 5 ? '#1890ff' : '' }}>联系我们</div>
          </nav>
        </div>
      </div>
      <div className={styles['portalpage-allContent']} id="anchorPoint">
        {currentPage === 1 && <HomePage />}
        {currentPage === 2 && <ProductIntroduction />}
        {[3, 6].includes(currentPage) && <Solution currentPage={currentPage} />}
        {currentPage === 4 && <AboutCompany />}
        {currentPage === 5 && <ContactUs />}
      </div>
      <BackTop>
        <VerticalAlignTopOutlined />
      </BackTop>
      <Footer />
    </div>
  );
};

export default PortalPage;
