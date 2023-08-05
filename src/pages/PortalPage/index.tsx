
import logo from '@/assets/logo.png';
import gjlogo from '@/assets/gjlogo.png';
import styles from './index.less';
import Footer from './component/Footer';
import HomePage from './component/HomePage';
import { useState } from 'react';
import { history } from 'umi';
import AboutCompany from './component/AboutCompany';
import ContactUs from './component/ContactUs';
import { DownOutlined, MailOutlined, VerticalAlignTopOutlined } from '@ant-design/icons';
import { BackTop, Menu } from 'antd';


const TYPE_COLOR: { [key: number]: string; } = {
    1: '#1890ff',
    2: '#1890ff',
    3: '#1890ff',
    4: '#1890ff',
    5: '#1890ff',
};

const PortalPage = () => {

    const [currentPage, setCurrentPage] = useState<number>(1);

    const headClick = (e: any) => {
        console.log(e.target, e.target.nodeName, e.target.innerText,);
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
                    setCurrentPage(3);
                    break;
                case '关于艾普':
                    setCurrentPage(4);
                    break;
                case '联系我们':
                    setCurrentPage(5);
                    break;
                default:
                    break;
            };
        }
    };

    function getItem(
        label: React.ReactNode,
        key?: React.Key | null,
        icon?: React.ReactNode,
        children?: any[],
        theme?: 'light' | 'dark',
    ): any {
        return {
            key,
            icon,
            children,
            label,
            theme,
        } as any;
    }

    const items: any[] = [
        getItem(
            '解决方案',
            'sub1',
            <MailOutlined />,
            [getItem('Option 1', '1'), getItem('Option 2', '2'), getItem('Option 3', '3')],
            'light',
        ),
        // getItem('Option 5', '5'),
        // getItem('Option 6', '6'),
    ];

    const style: React.CSSProperties = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: '#1088e9',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    };

    return (
        <div className={styles['portalpage-wrap']}>
            <div className={styles['portalpage-head']}>
                <div className={styles['head-content']}>
                    <div className={styles['head-img']}>
                        {/* <img src={gjlogo}></img> */}
                        <img src={logo}></img>
                    </div>
                    <nav className={styles['head-nav']} onClick={headClick}>
                        <div style={{ color: currentPage === 1 ? '#1890ff' : '' }}>首页</div>
                        <div style={{ color: currentPage === 2 ? '#1890ff' : '' }}>产品介绍</div>
                        <div style={{ color: currentPage === 3 ? '#1890ff' : '' }} className='solution'>
                            解决方案
                            <DownOutlined className='solution-anticon-down' />
                        </div>
                        {/* <Menu
                            // onClick={onClick}
                            style={{ width: 256 }}
                            defaultOpenKeys={['sub1']}
                            // selectedKeys={[current]}
                            mode="vertical"
                            theme="light"
                            items={items}
                        /> */}
                        <div style={{ color: currentPage === 4 ? '#1890ff' : '' }}>关于艾普</div>
                        <div style={{ color: currentPage === 5 ? '#1890ff' : '' }}>联系我们</div>
                        {/* <span>首页</span>
                        <span>关于高捷</span>
                        <span>服务范围</span>
                        <span>新闻中心</span>
                        <span>招聘</span>
                        <span>联系我们</span> |
                        <span style={{ marginLeft: '20px' }}>在线下单</span> */}
                    </nav>
                </div>
            </div>
            <div className={styles['portalpage-allContent']}>
                {currentPage === 1 && <HomePage />}
                {currentPage === 4 && <AboutCompany />}
                {currentPage === 5 && <ContactUs />}
            </div>
            <BackTop>
                <VerticalAlignTopOutlined />
            </BackTop>
            <Footer />
        </div >
    );
};

export default PortalPage;