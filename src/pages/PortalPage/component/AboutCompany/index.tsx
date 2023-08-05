import classNames from 'classnames';
import styles from './index.less';
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Col, Row, Steps } from 'antd';
import MapEchart from '../MapEchart';


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
                case '社会责任':
                    setCurrentTab(5);
                    goAnchor('SocialResponsibility');
                    break;
                default:
                    break;
            };
        }
    };

    return (
        <div className={styles['about-company-warp']}>

            <div className={styles['official-img']}>
                <img src={"https://www.walltechsystem.cn/upload/2023-01/167498305603816400.jpg"} />
                <div className={styles['official-phone-number']}>官方电话：86-20-66616988</div>
            </div>
            <div className={styles['company-tab']}>
                <div className={styles['company-tab-title']} onClick={headClick} >
                    <span className={classNames(currentTab === 1 && styles['select-title'])}>艾普简介</span>
                    <span className={classNames(currentTab === 2 && styles['select-title'])}>企业文化</span>
                    <span className={classNames(currentTab === 3 && styles['select-title'])}>发展历程</span>
                    <span className={classNames(currentTab === 4 && styles['select-title'])}>荣誉资历</span>
                    <span className={classNames(currentTab === 5 && styles['select-title'])}>社会责任</span>
                </div>
                <div className={styles['grey-line']} />
            </div>
            <div className={styles['about-company-content']}>
                <div>
                    <div className={styles['about-company-title']}>
                        <div id="IntroductionToEpp">艾普简介</div>
                        <DownOutlined />
                    </div>
                    <div>
                        <div>高捷物流成立于2004年，是一家提供跨境贸易全链条一站式解决方案的国家 5A 级物流企业，
                            近20年来始终活跃在国际物流、跨境电商、外贸进出口服务领域，涵盖国际空运、海运、陆运、跨境电商、
                            外贸综合服务等模块，集运输、报关、仓储、配送于一体，是目前跨洲际货运代理行业内最具规模的现代物流企业。</div>
                        <div>高捷物流总部位于广东省广州市，拥有员工近 1000 人，目前在国内的北京、上海、深圳、香港等地设立超20家分公司，
                            并已成功搭建起覆盖北美、欧洲、非洲、澳洲、亚洲的服务网络，在美国、德国、法国、荷兰和英国等国家、地区设立海外分公司、
                            子公司和驻外办事机构，业务幅射全球至过百城市，是华南地区最大型的综合性国际物流服务企业之一，具备全方位、立体化、
                            一站式的跨境物流服务能力。
                        </div>
                    </div>
                    <img className={styles['video-img']} src="https://www.walltechsystem.cn/upload/2022-08/166070601401522300.png" />

                    {/* <div className={styles['global-logistics-coverage']}>
                        <div>全球物流网络覆盖</div>
                        <div className={styles['border-line-style']}></div>
                    </div>
                    <MapEchart /> */}
                    <img style={{ width: '100%' }} src="https://files.axshare.com/gsc/EI6QAV/a5/53/82/a55382653e6348bab95fa2dbdb57f043/images/%E5%85%B3%E4%BA%8E%E8%89%BE%E6%99%AE/u200.png?pageId=6c73d544-2b6a-48ab-89af-0720db628798" />
                    <Row className={styles['brief-introduction-row']} gutter={24}>
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
                                title: '2021年',
                                description: '高捷物流通过国家5A级物流企业认证',
                            },
                            {
                                title: '2021年',
                                description: '高捷物流通过国家5A级物流企业认证',
                            },
                            {
                                title: '2020年',
                                description: '成功测通海关总署版跨境电商零售出口商品退货全国第一票',
                            },
                            {
                                title: '2019年',
                                description: '高捷物流二度入选国际货代行业重点联系企业名单',
                            },
                            {
                                title: '2018年',
                                description: '高捷物流成功申报跨境电商零售出口全国统一版第一票',
                            },
                            {
                                title: '2017年',
                                description: '广州机场首票跨境电商出口直邮BC操作成功',
                            },
                            {
                                title: '2009年',
                                description: '成立航晟物流公司，与南航合作开展卡车航班业务；设立法国巴黎分公司，开始海外布局',
                            },
                            {
                                title: '2008年',
                                description: '与南航合作，首航CAN-AMS包机取得圆满成功',
                            },
                            {
                                title: '2006年',
                                description: '设立上海分公司，开始向全国发展',
                            },
                            {
                                title: '2005年',
                                description: '高捷物流集团公司成立',
                            },
                            {
                                title: '2004年',
                                description: '广东高捷航运物流有限公司成立',
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
            <div className={styles['about-company-content']}>
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
            </div>
        </div>
    );
};

export default AboutCompany;