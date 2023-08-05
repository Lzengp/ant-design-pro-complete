


import styles from './index.less';
import { Carousel, Col, Row, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import Title from '../Title';
import MapEchart from '../MapEchart';
import aircraft from '../../../../assets/aircraft.svg';

const HomePage = () => {

    return (
        <>
            <div className={styles['portalpage-content']}>

                <div className={styles['portalpage-carousel']}>
                    <Carousel autoplay>
                        <div>
                            <img src={"https://files.axshare.com/gsc/EI6QAV/03/66/65/0366657bdafb4bdb9e3971710550f5d9/images/%E9%A6%96%E9%A1%B5-2_0/u14.png?pageId=f8e3c235-357e-4f1e-b98b-00069ed597a6"} />
                            {/* <img src={"https://files.axshare.com/gsc/EI6QAV/e8/a0/58/e8a058ec6df447bc854bbe5e1af134fd/images/%E9%A6%96%E9%A1%B5-2_0/u14.png?pageId=f8e3c235-357e-4f1e-b98b-00069ed597a6"} /> */}
                        </div>
                        <div>
                            <img src={"https://files.axshare.com/gsc/EI6QAV/03/66/65/0366657bdafb4bdb9e3971710550f5d9/images/%E9%A6%96%E9%A1%B5-2_0/u18.png?pageId=f8e3c235-357e-4f1e-b98b-00069ed597a6"} />
                        </div>
                        <div>
                            <img src={"https://www.walltechsystem.cn/upload/2022-08/166064706418675300.png"} />
                        </div>
                        <div>
                            <img src={"https://www.walltechsystem.cn/upload/2022-08/166070601401522300.png"} />
                        </div>
                    </Carousel>
                </div>
                <div className={styles['core-services']}>
                    <Title title='核心服务' />
                    <Row className={styles['core-services-row']}>
                        <Col>
                            <div className={styles['core-services-card']}>
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
                        </Col>
                    </Row>
                </div>
                <div className={styles['about-gaojet']}>
                    <Title title='关于艾普' />
                    <Row className={styles['about-gaojet-content']} gutter={24}>
                        <Col span={12} className={styles['about-gaojet-text']} style={{}}>
                            <div style={{ textIndent: '5em' }}>艾普数智成立于2004年，是一家提供跨境贸易全链条一站式解决方案的国家 5A 级物流企业。</div>
                            <div style={{ textIndent: '5em' }}>
                                近20年来始终活跃在国际物流、跨境电商、外贸进出口服务领域，涵盖国际空运、海运、陆运、跨境电商、外贸综合服务等模块，
                                集运输、报关、仓储、配送于一体，是目前跨洲际货运代理行业内最具规模的现代物流企业...
                            </div>
                            <Button type='primary'>了解更多<RightOutlined /></Button>
                        </Col>
                        <Col span={12}>
                            <img src="https://www.walltechsystem.cn/upload/2023-02/167687813995203800.jpg" style={{ width: '100%' }} />
                        </Col>
                    </Row>
                    <div className={styles['about-gaojet-real']}>
                        <div className={styles['real-module']}>
                            <div style={{ fontSize: '20px', marginTop: '-60px' }}>愿景</div>
                            <div style={{ position: 'absolute', top: '80px' }}> 构建智慧供应链生态圈</div>
                        </div>
                        <div className={styles['real-module']}>
                            <div style={{ fontSize: '20px', marginTop: '-60px' }}>使命</div>
                            <div style={{ position: 'absolute', top: '80px' }}>让客户更便利</div>
                        </div>
                        <div className={styles['real-module']}>
                            <div style={{ fontSize: '20px', marginTop: '15px' }}>核心价值观</div>
                            <div className={styles['core-values']}>
                                <div className={styles['core-values-text']}>
                                    <span>用心做事</span>
                                    <span>与时俱进</span>
                                </div>
                                <div className={styles['core-values-text']}>
                                    <span>务实担当</span>
                                    <span>拥抱激情</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['serviceability']}>
                    <Title title='服务能力' />
                    <div className={classNames(styles['serviceability-content'], 'padding-50')}>
                        <div className={styles['serviceability-item']}>
                            <div className={styles['serviceability-content-title']}>
                                超<span className={styles['number-title']}>2997</span>万票
                            </div>
                            <div className="font-style">
                                高捷连续多年在广州机场口岸清关量排名领先
                                其中进出口跨境电商：3500万票/年，货值70亿
                                人民币；空运出口：25000票/年，货值17亿人民币
                            </div>
                        </div>
                        <div className={styles['serviceability-item']}>
                            <div className={styles['serviceability-content-title']}>
                                超<span className={styles['number-title']}>2998</span>家
                            </div>
                            <div className="font-style">
                                高捷服务的跨境电商进出口企业超3000
                                家，年代理进出口额已超过700亿美元，
                                是亚马逊国际、小红书、希音、比亚迪、
                                合生元等官方指定战略服务供应商
                            </div>
                        </div>
                        <div className={styles['serviceability-item']}>
                            <div className={styles['serviceability-content-title']}>
                                超<span className={styles['number-title']}>8</span>万平方米
                            </div>
                            <div className="font-style">
                                高捷在广州南沙自贸区、广州白云国际
                                机场设立了保税仓和海关监管仓；香
                                港、仁川、伦敦、法兰克福、阿姆斯特
                                丹等地布局了海外仓；仓储总面积超10万㎡
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['global-logistics-coverage']}>
                    <Title title='全球物流覆盖' />
                    <MapEchart />
                </div>
                {/* <img style={{ width: '100%' }} src="https://files.axshare.com/gsc/EI6QAV/a5/53/82/a55382653e6348bab95fa2dbdb57f043/images/%E5%85%B3%E4%BA%8E%E8%89%BE%E6%99%AE/u200.png?pageId=6c73d544-2b6a-48ab-89af-0720db628798" /> */}
                <div className={styles['news-information']}>
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

                {/* <div style={{ height: '1000px' }}></div> */}
            </div>

        </>
    );
};

export default HomePage;