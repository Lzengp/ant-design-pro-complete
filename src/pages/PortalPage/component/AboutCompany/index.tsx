import classNames from 'classnames';
import styles from './index.less';
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Col, Row, Steps } from 'antd';
import MapEchart from '../MapEchart';
import AboutUs from '@/assets/about-us.png';
import AboutUs1 from '@/assets/about-us1.png';
import LTextTitleRImg from '@/components/LTextTitleRImg';


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
                    // history.replaceState('');
                    // history.replace({ pathname: '/portalPage/home' });
                    // onClick={(e) => {
                    //     e.stopPropagation();
                    //     goAnchor(item.id);
                    //   }}
                    break;
                case '企业文化':
                    setCurrentTab(2);
                    goAnchor('CorporateCulture');
                    // history.replace({ pathname: '/portalPage/desc' });
                    break;
                case '发展历程':
                    setCurrentTab(3);
                    goAnchor('DevelopmentHistory');
                    break;
                case '荣誉资历':
                    setCurrentTab(4);
                    goAnchor('HonoraryQualifications');
                    break;
                // case '社会责任':
                //     setCurrentTab(5);
                //     goAnchor('SocialResponsibility');
                //     break;
                default:
                    break;
            };
        }
    };

    return (
        <div className={styles['about-company-warp']}>

            <div className={styles['official-img']}>
                {/* <img src={"https://www.walltechsystem.cn/upload/2023-01/167498305603816400.jpg"} />
                <div className={styles['official-phone-number']}>官方电话：18802092056</div> */}
                <img src={AboutUs} style={{ height: '500px' }} />
            </div>
            <div className='global-content'>
                <div className={styles['company-tab']}>
                    <div className={styles['company-tab-title']} onClick={headClick} >
                        <span className={classNames(currentTab === 1 && styles['select-title'])}>艾普简介</span>
                        <span className={classNames(currentTab === 2 && styles['select-title'])}>企业文化</span>
                        <span className={classNames(currentTab === 3 && styles['select-title'])}>发展历程</span>
                        <span className={classNames(currentTab === 4 && styles['select-title'])}>荣誉资历</span>
                        {/* <span className={classNames(currentTab === 5 && styles['select-title'])}>社会责任</span> */}
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
                        {/* <img className={styles['video-img']} src="https://www.walltechsystem.cn/upload/2022-08/166070601401522300.png" /> */}

                        {/* <div className={styles['global-logistics-coverage']}>
                        <div>全球物流网络覆盖</div>
                        <div className={styles['border-line-style']}></div>
                    </div>
                    <MapEchart /> */}
                        {/* <img style={{ width: '100%' }} src="https://files.axshare.com/gsc/EI6QAV/a5/53/82/a55382653e6348bab95fa2dbdb57f043/images/%E5%85%B3%E4%BA%8E%E8%89%BE%E6%99%AE/u200.png?pageId=6c73d544-2b6a-48ab-89af-0720db628798" /> */}
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
                    {/* <div className={styles['about-gaojet-real']}>
                        <div className={styles['real-module']}>
                            <div style={{ fontSize: '20px', fontWeight: 600 }}>愿景</div>
                            <div >让人生活更美好</div>
                        </div>

                        <div className={styles['real-module']}>
                            <div style={{ fontSize: '20px', fontWeight: 600 }}>使命</div>

                            <div >帮助企业数智化转型，实现全链路24小时库存和资源高效配置</div>
                        </div>
                        <div className={styles['real-module']}>
                            <div style={{ fontSize: '20px', fontWeight: 600 }}>价值观</div>
                            <div >诚实守信、客户至上、创新思维、追求极致、快速响应、团队合作</div>
                        </div>
                        <div className={styles['real-module']}>
                            <div style={{ fontSize: '20px', fontWeight: 600 }}>行为准则</div>
                            <div >实干激情、负责担当、专注简单、共享透明、充分授权</div>
                        </div>
                    </div> */}
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
                        <div id="HonoraryQualifications">荣誉资质</div>
                        <DownOutlined />
                    </div>
                    <Row className={styles['honorary-qualifications']} gutter={24}>
                        <Col span={6}>
                            <img src="https://img2.baidu.com/it/u=305846362,3743396175&fm=253&fmt=auto&app=138&f=JPEG?w=746&h=500" />
                            <div className={styles['img-desc']}>图片标题图片标题</div>
                        </Col>
                        <Col span={6}>
                            <img src="https://img2.baidu.com/it/u=147248514,2024900162&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500" />
                            <div className={styles['img-desc']}>图片标题图片标题</div>
                        </Col>
                        <Col span={6}>
                            <img src="https://img2.baidu.com/it/u=278848341,3027290350&fm=253&fmt=auto&app=138&f=JPEG?w=678&h=460" />
                            <div className={styles['img-desc']}>图片标题图片标题</div>
                        </Col>
                        <Col span={6}>
                            <img src="https://img2.baidu.com/it/u=1291305328,1917502649&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=343" />
                            <div className={styles['img-desc']}>图片标题图片标题</div>
                        </Col>
                    </Row>
                </div>
                {/* <div className={styles['about-company-content']}>
                    <div className={styles['about-company-title']}>
                        <div id="SocialResponsibility">社会责任</div>
                        <DownOutlined />
                    </div>
                    <Row className={styles['honorary-qualifications']} gutter={24}>
                        <Col span={6}>
                            <img src="https://p9.itc.cn/q_70/images01/20210518/314ec68fea4d4588970cce0128ba8a98.jpeg" />
                            <div className={styles['img-desc']}>图片标题图片标题</div>
                        </Col>
                        <Col span={6}>
                            <img src="https://img1.baidu.com/it/u=4066929762,1587647599&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=533" />
                            <div className={styles['img-desc']}>图片标题图片标题</div>
                        </Col>
                        <Col span={6}>
                            <img src="https://mzj.wuhan.gov.cn/mzdt_912/tpxw_916/202009/W020200909571525754089.jpg" />
                            <div className={styles['img-desc']}>图片标题图片标题</div>
                        </Col>
                        <Col span={6}>
                            <img src="https://img.rednet.cn/2021/06-28/82e5cf59-3c9a-4ebb-8589-8b7cce5babd5.jpg" />
                            <div className={styles['img-desc']}>图片标题图片标题</div>
                        </Col>
                    </Row>
                </div> */}
            </div>
        </div>
    );
};

export default AboutCompany;