


import styles from './index.less';
import { Carousel, Col, Row, Button, Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import Title from '../Title';
import MapEchart from '../MapEchart';
import aircraft from '../../../../assets/aircraft.svg';
import HomeHannerOne from '@/assets/home-banner-one.png';
import HomeHannerTwo from '@/assets/home-banner-two.png';
import HomeHannerThree from '@/assets/home-banner-three.png';
import HomeHannerFour from '@/assets/home-banner-four.png';
import HomeHannerFive from '@/assets/home-banner-five.png';
import HomeHanner from '@/assets/home-banner-one.png';
import aboutUs from '@/assets/about-us.png';
import SmartSupplyChain from '@/assets/smart-supply-chain.png';
import Omnichannel from '@/assets/omnichannel.png';
import IntelligentManufacturin from '@/assets/intelligent-manufacturing.png';

const { Paragraph } = Typography;

const HomePage = () => {

    const carouselImgList = [
        HomeHannerOne,
        HomeHannerTwo,
        HomeHannerThree,
        HomeHannerFour,
        HomeHannerFive
        // HomeHanner
        // HomeHannerThree,
        // "https://www.walltechsystem.cn/upload/2023-02/167687813995203800.jpg",
        // "https://www.walltechsystem.cn/upload/2022-08/166064706418675300.png",
        // "https://www.walltechsystem.cn/upload/2022-08/166070601401522300.png",
    ];


    const coreServicesList = [
        {
            title: '智能制造',
            describe: '智能制造是智能资源协同平台的关键组成部分，我们可以提供智能工厂一体化解决方案，实现资源高效协同、数据共享、降本增效等，支持企业个性化定制、智能生产、全球工厂联动、阿米巴经营，助力企业数智化转型，打造智能工厂。',
            href: '',
            src: IntelligentManufacturin,
        },
        {
            title: '智慧供应链',
            describe: '智能资源协同平台实现从订单源头就开始切入算法和智能合约，贯穿所有操作环节，以BOM、销售订单、生产计划、生产工单作为核心基础要素，通过人工智能贯穿整个系统主线，简化全链路流程及作业，整合相关部门及操作人员，重构业务流程，提升整个产业链、供应链的性能和价值，推动企业管理变革和商业创新。',
            href: '',
            src: SmartSupplyChain,
        },
        {
            title: '全球贸易与跨境物流',
            describe: '智能资源协同平台提供“全球部署、统一入口，智能协同，业务整合，数据驱动”，为货主、货代、电商企业、贸易商、报关企业、物流企业，仓储企业、场站企业、港口、监管单位等提供“一站式”科技赋能。实现全链路资源高效协同及整合，促进全链路服务标准化，操作自动化，贸易便利化，资源共享最大化，达到“提质、降本、增效”的效果，形成良好的贸易生态圈及体系，助力中国商品及品牌走向全球和优质商品引进中国。',
            href: '',
            src: SmartSupplyChain,
        },
        {
            title: '全渠道管理',
            describe: '实现公域、私域、门店连通，对接公域（淘宝/京东/抖音/快手/拼多多/TiktoK等）及私域（官网，小程序、企微等），实现全渠道订单智能路由，多渠道订单统一快速流转，生成最优派单路线，提高订单处理速度，自动优选物流，节约运营成本，提升整体效能及顾客体验。向上解决多渠道订单汇总，实现订单数据一体化、可视化管理，向下精益管理门店、仓储、物流、财务等，提供精准数据支撑和智能决策。',
            href: '',
            src: Omnichannel,
        }
    ];

    return (
        <>
            <div className={styles['portalpage-content']}>
                <div className={styles['portalpage-carousel']}>
                    <Carousel autoplay>{carouselImgList.map((item) => <div> <img src={item} /></div>)}</Carousel>
                </div>
                <div className='global-content'>
                    <div className={styles['core-services']}>
                        <Title title='服务范围' />
                        <Row className={styles['core-services-row']}>
                            {
                                coreServicesList.map(item => {
                                    return (
                                        <Col>
                                            <div className={styles['core-services-card']}>
                                                <img src={item.src} />
                                                <div className={styles['first-level-title']}>{item.title}</div>
                                                <div className={styles['core-services-desc']}>
                                                    {item.describe}
                                                    {/* <div className={styles['core-services-btn']}>
                                                    <Button type="primary">查看更多</Button>
                                                </div> */}
                                                </div>
                                            </div>
                                        </Col>
                                    );
                                })
                            }
                            {/* <Col> */}
                            {/* <div className={styles['core-services-card']}>
                                <img src={aircraft} />
                                <div className={styles['first-level-title']}>干线运输</div>
                                <div className={styles['core-services-desc']}>
                                    海运、陆运、空运、铁路等多式联运国际物流解决方案
                                    <div className={styles['core-services-btn']}>
                                        <Button type="primary">查看更多</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className={styles['core-services-card']}>
                                <img src={aircraft} />
                                <div className={styles['first-level-title']}>跨境电商物流</div>
                                <div className={styles['core-services-desc']}>
                                    提供跨境保税、海外直邮、海外仓、专线、小包等进出口全链路物流服务
                                    <div className={styles['core-services-btn']}>
                                        <Button type="primary">查看更多</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className={styles['core-services-card']}>
                                <img src={aircraft} />
                                <div className={styles['first-level-title']}>报关报检服务</div>
                                <div className={styles['core-services-desc']}>
                                    提供高效便捷的报关、报检服务
                                    <div className={styles['core-services-btn']}>
                                        <Button type="primary">查看更多</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className={styles['core-services-card']}>
                                <img src={aircraft} />
                                <div className={styles['first-level-title']}>配套服务</div>
                                <div className={styles['core-services-desc']}>
                                    仓储配送、地面服务、空运打板、国外清关派送等
                                    <div className={styles['core-services-btn']}>
                                        <Button type="primary">查看更多</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className={styles['core-services-card']}>
                                <img src={aircraft} />
                                <div className={styles['first-level-title']}>外贸综合服务</div>
                                <div className={styles['core-services-desc']}>
                                    提供一站式的物流、通关、外汇、出口退税、信保融资等外贸交易所需的进出口服务
                                    <div className={styles['core-services-btn']}>
                                        <Button type="primary">查看更多</Button>
                                    </div>
                                </div>
                            </div>
                        </Col> */}
                        </Row>
                    </div>
                    <div className={styles['about-gaojet']}>
                        <Title title='关于艾普' />
                        <Row className={styles['about-gaojet-content']} gutter={24}>
                            <Col span={24} className={classNames(styles['about-gaojet-text'])}>
                                <div style={{ textIndent: '3em' }}>广东艾普数智科技有限公司（简称：艾普数智）是国内领先的企业数智化转型服务商，公司成立于2021年，总部位于广州，由国家“千人计划”特聘专家林熹教授和人工智能科学家、产业专家组成，核心成员来自头部互联网企业和咨询企业。</div>
                                <div style={{ textIndent: '3em' }}>
                                    艾普数智基于云原生互联网架构，综合云计算、大数据、人工智能、物联网、区块链等新技术，打造智能引擎和高度灵活扩展的产业智能资源协同平台产品（简称：ARP)，为企业提供全场景数智服务。
                                </div>
                                {/* <Button type='primary'>了解更多<RightOutlined /></Button> */}
                            </Col>
                            {/* <Col span={12}>
                                <img src={HomeHanner} style={{ width: '100%' }} />
                            </Col> */}
                        </Row>
                        <div className={styles['about-gaojet-thought']}>
                            <div className={styles['thought-content']}>
                                <div className={styles['thought-content-item']}>
                                    <div className={styles['item-title']}>愿景</div>
                                    <div className={styles['item-desc']}>让人生活更美好</div>
                                </div>
                                <div className={styles['thought-content-item']}>
                                    <div className={styles['item-title']}>使命</div>
                                    <div className={styles['item-desc']}>帮助企业数智化转型，实现全链路24小时库存和资源高效配置</div>
                                </div>
                                <div className={styles['thought-content-item']}>
                                    <div className={styles['item-title']}>价值观</div>
                                    <div className={styles['item-desc']}>
                                        诚实守信：诚实、道德规范及高尚情操是我们做事的准则。<br />
                                        客户至上：以客户为中心，满足或超越客户期望的产品与服务。<br />
                                        创新思维：不断创新是令客户满意的基石，更会推动我们发展和提高竞争力。<br />
                                        追求极致：我们无论做任何事都要精益求精，尽善尽美，用心把事情做到极致。<br />
                                        快速响应：响应速度决定工作态度，我们要养成立即执行的工作习惯及提高灵活性。<br />
                                        团队合作：建立相互信任，尊敬互爱的人际关系。
                                    </div>
                                </div>
                                <div className={styles['thought-content-item']}>
                                    <div className={styles['item-title']}>行为准则</div>
                                    <div className={styles['item-desc']}>实干激情、负责担当、专注简单、共享透明、充分授权!</div>
                                </div>
                            </div>
                            <div>
                                <img src="https://bitsun-website.oss-cn-shanghai.aliyuncs.com/img/product/val.png" />
                            </div>
                        </div>
                    </div>
                    <div className={styles['serviceability']}>
                        <Title title='技术能力' />
                        <div className={classNames(styles['serviceability-content'], 'padding-50')}>
                            <div className={styles['serviceability-item']}>
                                <div className={styles['serviceability-content-title']}>
                                    {/* 超<span className={styles['number-title']}>2997</span>万票 */}
                                    <span>技术领先性</span>
                                </div>
                                <div className="font-style">
                                    1、基于云原生的数智化技术底座和低代码开发平台，开发效率提升40%左右，可支持SAAS、公有云和自建IDC部署。<br />
                                    2、平台化架构及DDD模型搭建，中心层的复用性、灵活性及扩展性能力领先，支持快速迭代。<br />
                                    3、彻底解决复杂性的系统架构问题，适应产业集群及多集团组织模型，可以按照不同的行业、业务及应用划分，总体灵活又统一，架构风格统一。
                                </div>
                            </div>
                            <div className={styles['serviceability-item']}>
                                <div className={styles['serviceability-content-title']}>
                                    {/* 超<span className={styles['number-title']}>2998</span>家 */}
                                    <span>产品先进性</span>
                                </div>
                                <div className="font-style">
                                    1、实现一个集团公司一个操作运营平台和一个数据库（分布式），真正实现操作系统大统一，可以干掉周边的卫星系统，同时支持多集团多组织等。<br />
                                    2、可以支持不同行业不同场景搭建应用，业务协同更加高效透明，企业内部、上下游、产业生态等都可以支持，真正实现一个平台和一个数据库（分布式）。
                                </div>
                            </div>
                            <div className={styles['serviceability-item']}>
                                <div className={styles['serviceability-content-title']}>
                                    {/* 超<span className={styles['number-title']}>8</span>万平方米 */}
                                    <span>场景智能化</span>
                                </div>
                                <div className="font-style">
                                    实现智能引擎、AIGC、智慧预测及高效协同，包括：订单多级智能预测、全链路零库存协同、实时生产拉动补给，场景AIGC化，真正为企业降本增效，提高企业核心竞争力和实现更多社会价值，同时降低碳排放，实现资源低碳高效利用及低碳供应链。
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['global-logistics-coverage']}>
                        <Title title='全球贸易与跨境电商物流' />
                        {/* <MapEchart /> */}
                    </div>
                    {/* <img style={{ width: '100%' }} src="https://files.axshare.com/gsc/EI6QAV/a5/53/82/a55382653e6348bab95fa2dbdb57f043/images/%E5%85%B3%E4%BA%8E%E8%89%BE%E6%99%AE/u200.png?pageId=6c73d544-2b6a-48ab-89af-0720db628798" /> */}
                    <div className={styles['news-information']} style={{ display: 'none' }}>
                        <Title title='新闻资讯' />
                        <div className={classNames(styles['news'], 'padding-50')}>
                            <div className={styles['news-item']}>
                                <div>
                                    <img src={"https://www.walltechsystem.cn/upload/2023-02/167687813995203800.jpg"} />
                                </div>
                                <div className={styles['news-desc']}>
                                    过去至少2~3年才能铺开的渠道，现在通过平台3个月就跑得通。
                                    合作签约到首单产品交付最快20天，让中小企业专注创新和营销
                                </div>
                            </div>
                            <div className={styles['news-item']}>
                                <div>
                                    <img src={"https://www.walltechsystem.cn/upload/2023-02/167687813995203800.jpg"} />
                                </div>
                                <div className={styles['news-desc']}>
                                    过去至少2~3年才能铺开的渠道，现在通过平台3个月就跑得通。
                                    合作签约到首单产品交付最快20天，让中小企业专注创新和营销
                                </div>
                            </div>
                            <div className={styles['news-item']}>
                                <div>
                                    <img src={"https://www.walltechsystem.cn/upload/2023-02/167687813995203800.jpg"} />
                                </div>
                                <div className={styles['news-desc']}>
                                    过去至少2~3年才能铺开的渠道，现在通过平台3个月就跑得通。
                                    合作签约到首单产品交付最快20天，让中小企业专注创新和营销
                                </div>
                            </div>
                            <div className={styles['news-item']}>
                                <div>
                                    <img src={"https://www.walltechsystem.cn/upload/2023-02/167687813995203800.jpg"} />
                                </div>
                                <div className={styles['news-desc']}>
                                    过去至少2~3年才能铺开的渠道，现在通过平台3个月就跑得通。
                                    合作签约到首单产品交付最快20天，让中小企业专注创新和营销
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['partners']}>
                        <Title title='合作伙伴' />
                        <Row className={styles['partners-logo']}>
                            <Col>
                                <img src="https://www.hjlingxi.com/static/8.3cac1b74.png" />
                            </Col>
                            <Col>
                                <img src="https://www.hjlingxi.com/static/7.22402ea2.png" />
                            </Col>
                            <Col>
                                <img src="https://www.hjlingxi.com/static/5.68b11218.png" />
                            </Col>
                            <Col>
                                <img src="https://www.hjlingxi.com/static/2.4251c2a5.png" />
                            </Col>
                            <Col>
                                <img src="https://www.hjlingxi.com/static/9.9b25a964.png" />
                            </Col>
                            <Col>
                                <img src="https://www.hjlingxi.com/static/3.137aba0e.png" />
                            </Col>
                            <Col>
                                <img src="https://www.hjlingxi.com/static/1.3e6b5345.png" />
                            </Col>
                            <Col>
                                <img src="https://www.hjlingxi.com/static/6.6ea280f9.png" />
                            </Col>
                        </Row>
                    </div>
                </div>


                {/* <div style={{ height: '1000px' }}></div> */}
            </div>

        </>
    );
};

export default HomePage;