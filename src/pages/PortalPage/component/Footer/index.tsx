
import { PhoneOutlined } from '@ant-design/icons';
import styles from './index.less';


const Footer = () => {

    return (
        <div className={styles['footer-wrap']}>
            <div className={styles['footer-content']}>
                <div className={styles['content-item']}>
                    <div className={styles['content-item-title']}>了解高捷</div>
                    <div style={{ marginLeft: '16px' }}>
                        <div>高捷简介</div>
                        <div>发展历程</div>
                        <div>企业文化</div>
                        <div>荣誉资质</div>
                        <div>社会责任</div>
                    </div>
                </div>
                <div className={styles['content-item']}>
                    <div className={styles['content-item-title']}>我们的业务范围</div>
                    <div style={{ marginLeft: '16px' }}>
                        <div>干线运输</div>
                        <div>跨境电商</div>
                        <div>报关报检服务</div>
                        <div>配套服务</div>
                        <div>外贸综合服务</div>
                    </div>
                </div>
                <div className={styles['contact']}>
                    <div className={styles['contact-title']}>欢迎联系</div>
                    <div className={styles['company-phone']}>
                        <PhoneOutlined />86-20-66616988
                    </div>
                    <div>
                        总部：广州市白云区云城东路559 - 571号宏鼎.云璟汇1栋13楼
                    </div>
                </div>
            </div>
            <div className={styles['company-information']}>
                <span>广东高捷航运物流有限公司</span>
                <span className={styles['filing-number']} onClick={() => { window.open('https://tsm.miit.gov.cn/'); }}>粤ICP备2023080911号</span>
                {/* <span className={styles['filing-number']} onClick={() => { window.open('https://tsm.miit.gov.cn/'); }}>粤ICP备2023052583号</span> */}
            </div>

        </div>
    );
};

export default Footer;