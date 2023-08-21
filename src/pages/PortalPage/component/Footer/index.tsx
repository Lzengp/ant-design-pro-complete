
import { PhoneOutlined } from '@ant-design/icons';
import styles from './index.less';


const Footer = () => {

    return (
        <div className={styles['footer-wrap']}>
            <div className={styles['footer-content']}>
                <div className={styles['content-item']}>
                    <div className={styles['content-item-title']}>了解艾普数智</div>
                    <div style={{ marginLeft: '16px' }}>
                        <div>艾普数智简介</div>
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
                        <PhoneOutlined />18802092056
                    </div>
                    <div>
                        总部：广州市黄埔区大沙北路12号
                    </div>
                </div>
            </div>
            <div className={styles['company-information']}>
                <span>广东艾普数智科技有限公司</span>
                <span className={styles['filing-number']} onClick={() => { window.open('https://tsm.miit.gov.cn/'); }}>粤ICP备2023052583号</span>
            </div>

        </div>
    );
};

export default Footer;