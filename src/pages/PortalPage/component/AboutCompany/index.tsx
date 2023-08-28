import classNames from 'classnames';
import styles from './index.less';
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Col, Row, Steps } from 'antd';
import AboutUs from '@/assets/about-us.png';
import AboutUs1 from '@/assets/about-us1.png';
import LTextTitleRImg from '@/components/LTextTitleRImg';
import Qualifications from '@/assets/qualifications.png';


const AboutCompany = () => {

    const [currentTab, setCurrentTab] = useState<number>(1);

    const goAnchor = (id: string) => {
        document.querySelector(`#${id}`)?.scrollIntoView({
            behavior: 'smooth', // 平滑过度效果
            block: 'center',
        });
    };

    const headClick = (e: any) => {
        console.log(e.target, e.target.nodeName, e.target.innerText,);
        if (e.target.nodeName === 'SPAN') {
            switch (e.target.innerText) {
                case '艾普简介':
                    setCurrentTab(1);
                    goAnchor('IntroductionToEpp');
                    break;
                case '企业文化':
                    setCurrentTab(2);
                    goAnchor('CorporateCulture');
                    break;
                case '发展历程':
                    setCurrentTab(3);
                    goAnchor('DevelopmentHistory');
                    break;
                case '资质认证':
                    setCurrentTab(4);
                    goAnchor('HonoraryQualifications');
                    break;
                default:
                    break;
            };
        }
    };

    return (
        <div className={styles['about-company-warp']}>

            <div className={styles['official-img']}>
                <img src={AboutUs} style={{ height: '500px' }} />
            </div>
            <div className='global-content'>
                <div className={styles['company-tab']}>
                    <div className={styles['company-tab-title']} onClick={headClick} >
                        <span className={classNames(currentTab === 1 && styles['select-title'])}>艾普简介</span>
                        <span className={classNames(currentTab === 2 && styles['select-title'])}>企业文化</span>
                        <span className={classNames(currentTab === 3 && styles['select-title'])}>发展历程</span>
                        <span className={classNames(currentTab === 4 && styles['select-title'])}>资质认证</span>
                    </div>
                    <div className={styles['grey-line']} />
                </div>
                <div className={styles['about-company-content']}>
                    <div>
                        <div className={styles['about-company-title']}>
                            <div id="IntroductionToEpp">艾普简介</div>
                            <DownOutlined />
                        </div>
                        <div style={{ lineHeight: '35px' }}>
                            <div style={{ textIndent: '2em' }}>广东艾普数智科技有限公司（简称：艾普数智）是国内领先的企业数智化转型服务商，公司成立于2021年，总部位于广州，由国家“千人计划”特聘专家林熹教授和人工智能科学家、产业专家组成，核心成员来自头部互联网企业和咨询企业。</div>
                            <div style={{ textIndent: '2em' }}>
                                艾普数智基于云原生互联网架构，综合云计算、大数据、人工智能、物联网、区块链等新技术，打造智能引擎和高度灵活扩展的产业智能资源协同平台产品（简称：ARP)，为企业提供全场景数智服务。
                            </div>
                        </div>
                        <img src={AboutUs1} style={{ width: '100%', padding: '20px 0' }} />
                        <Row className={styles['brief-introduction-row']} gutter={24} style={{ display: 'none' }}>
                            <Col span={12}>
                                <img src="http://open.freightower.com/_nuxt/img/company.0f92d42.jpg" />
                                <div className={styles['brief-introduction-desc']}>总部</div>
                            </Col>
                            <Col span={12}>
                                <img src="https://img2.baidu.com/it/u=2306566074,929922694&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500" />
                                <div className={styles['brief-introduction-desc']}>南沙仓</div>
                            </Col>
                            <Col span={12}>
                                <img src="https://objectmc.oss-cn-shenzhen.aliyuncs.com/yhdoc/20230530/202305301014502036649945.jpeg" />
                                <div className={styles['brief-introduction-desc']}>白云机场仓</div>
                            </Col>
                            <Col span={12}>
                                <img src="https://img1.baidu.com/it/u=3153631330,3167330606&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=445" />
                                <div className={styles['brief-introduction-desc']}>香港仓</div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className={styles['about-company-content']}>
                    <div className={styles['about-company-title']}>
                        <div id="CorporateCulture">企业文化</div>
                        <DownOutlined />
                    </div>
                    <LTextTitleRImg title={''} img={''} list={[
                        { title: '愿景', desc: '让人生活更美好' },
                        { title: '使命', desc: '帮助企业数智化转型，实现全链路24小时库存和资源高效配置' },
                        {
                            title: '价值观', desc: `
                        诚实守信：诚实、道德规范及高尚情操是我们做事的准则。<br />
                        客户至上：以客户为中心，满足或超越客户期望的产品与服务。<br />
                        创新思维：不断创新是令客户满意的基石，更会推动我们发展和提高竞争力。<br />
                        追求极致：我们无论做任何事都要精益求精，尽善尽美，用心把事情做到极致。<br />
                        快速响应：响应速度决定工作态度，我们要养成立即执行的工作习惯及提高灵活性。<br />
                        团队合作：建立相互信任，尊敬互爱的人际关系。
                        ` },
                        { title: '行为准则', desc: '实干激情、负责担当、专注简单、共享透明、充分授权!' },
                    ]} />
                </div>
                <div className={styles['about-company-content']}>
                    <div className={styles['about-company-title']}>
                        <div id="DevelopmentHistory">发展历程</div>
                        <DownOutlined />
                    </div>
                    <div style={{ marginLeft: '45%' }}>
                        <Steps
                            direction="vertical"
                            progressDot
                            current={11}
                            className="steps-vertical"
                            items={[
                                {
                                    title: '2016年',
                                    description: '智能制造构想与论证',
                                },
                                {
                                    title: '2018年',
                                    description: '智慧供应链顶层设计与规划',
                                },
                                {
                                    title: '2020年',
                                    description: '智能资源协同平台起航',
                                },
                                {
                                    title: '2022',
                                    description: '产品研发加速打磨',
                                },
                                {
                                    title: '2023年',
                                    description: '启动融资与创新发展',
                                },
                                {
                                    title: '2024',
                                    description: '品牌打造与全速前进',
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className={styles['about-company-content']}>
                    <div className={styles['about-company-title']}>
                        <div id="HonoraryQualifications">资质认证</div>
                        <DownOutlined />
                    </div>
                    <img src={Qualifications} style={{ width: '100%' }} />
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;