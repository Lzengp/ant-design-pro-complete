

import styles from './index.less';
import HomeHannerTwo from '@/assets/home-banner-two.png';
import HomeHannerThree from '@/assets/home-banner-three.png';
import HomeHanner from '@/assets/home-banner-one.png';
import SolutionBanner1 from '@/assets/solution-banner1.png';
import SolutionBanner2 from '@/assets/solution-banner2.png';
import SolutionBanner3 from '@/assets/solution-banner3.png';
import Solutionimg1 from '@/assets/solution-img-1.png';
import { Carousel } from 'antd';
import CarouselText from '@/components/CarouselText';
import { AimOutlined, BarChartOutlined, DotChartOutlined } from '@ant-design/icons';
import Title from '../Title';
import { useEffect, useState } from 'react';
import { isElementVisible } from '@/utils/utils';
import classNames from 'classnames';
import GraduallyEmerging from '@/components/GraduallyEmerging';
import LTextRImg from '@/components/LTextRImg';
import TTextBImg from '@/components/TTextBImg';
import GridBlock from '@/components/GridBlock';
import GridDarkBlue from '@/components/GridDarkBlue';
import BusinessScenario1 from '@/assets/business-scenario1.png';
import BusinessScenario2 from '@/assets/business-scenario2.png';
import LTextTitleRImg from '@/components/LTextTitleRImg';
import BusinesVsalue from '@/assets/business-value.png';


const Carousel_Img = {
    3: SolutionBanner1,
    6: SolutionBanner2,
};

const Solution = ({ currentPage }: { currentPage: number; }) => {

    // 轮播图
    const carouselImgList = [
        {
            // title: '技术平台、业务平台、数据平台、智能平台',
            // desc: [
            //     '智能制造、智慧供应链、智能通关、智能协同、智慧生态',
            //     '全球贸易、跨境电商、国际物流'
            // ],
            // src: 'https://www.walltechsystem.cn/upload/2022-08/166064681774185600.png',
            src: SolutionBanner1,
        },
        {
            // title: '智能引擎，开启万有引力，一切皆有可能！',
            // desc: '',
            // src: "https://www.walltechsystem.cn/upload/2023-02/167687813995203800.jpg",
            src: SolutionBanner2,
        },
        {
            // title: '智能制造、全球协同',
            // desc: '致力于建造低碳、绿色产业链和供应链，珍爱地球，让人生活更美好！',
            // src: "https://www.walltechsystem.cn/upload/2022-08/166064706418675300.png",
            src: SolutionBanner3,
        },
    ];

    const painSpotList = [
        { icon: <AimOutlined />, title: '不会转', desc: '企业不知道技术标准和数字化技术底座怎么搭建，缺乏综合性数字化人才，企业自己搞不定' },
        { icon: <AimOutlined />, title: '不能转', desc: '企业自研数字化系统投入巨大，并且是系统工程，失败概率非常大，企业又缺资金和没有相应资源配套支持' },
        { icon: <AimOutlined />, title: '不想转', desc: '企业原有系统使用习惯固化，没有变革的决心及动力，前路茫茫，且慢慢，并且潜在危险巨大' },
        { icon: <AimOutlined />, title: '不敢转', desc: '企业系统过多及相互依赖，繁杂、无从下手，顾虑多，转型风险巨大' },
    ];

    const IndustryPainPointsList = [
        { icon: <AimOutlined />, title: '架构落后', desc: '传统的ERP产品架构落后，大量单体架构，数据和应用紧耦合，扩容难度大，外挂多、只当数据库使用，新技术集成难度大，系统越来越复杂，无法适应企业数智化发展。' },
        { icon: <AimOutlined />, title: '系统臃肿', desc: '业务链环节系统林立，部门墙、信息墙现象严重，烟囱式搭建，无法从底层实现平台化。企业部门多、角色多，系统功能重复建设，导致系统臃肿、需要大量人员操作。' },
        { icon: <AimOutlined />, title: '企业内耗', desc: '企业众多系统存在信息割裂、粗放性管理、流程断层断点、结算困难、企业内耗等问题，导致系统、流程、运作、管理、决策等能力大大降低和潜在风险发生。' },
        { icon: <AimOutlined />, title: '竞争力下降', desc: '客户全程没有参与感和知情权，服务像进入无人区，全链路操作不透明，对客户不友好不贴心，无法快速响应市场和业务的变化，失去很多市场机会及竞争力下降。' },
    ];

    // 业务痛点
    const BusinessPainPointsList = [
        {
            src: <BarChartOutlined />,
            title: '信息孤岛',
            desc: '系统断链断层断点，系统之间孤立，数据无法共享集成和驱动。'
        },
        {
            src: <BarChartOutlined />,
            title: '效率低下',
            desc: '作业无法全链条追溯和透明，企业内部及外部无法高效协同，无法赋能生态伙伴。'
        },
        {
            src: <BarChartOutlined />,
            title: '管理脱节',
            desc: '系统、流程、运作、管理等存在脱节，导致企业决策能力低效和运营管理成本企高'
        },
        {
            src: <BarChartOutlined />,
            title: '创新力弱',
            desc: '无法适应市场变化及创新，无法参与生态圈及平台的合作机会，无法同台竞争。'
        },
        {
            src: <BarChartOutlined />,
            title: '原始作业',
            desc: '手工作业多及容易出错，库存准确率低，导致人多和人工成本高。'
        },
        {
            src: <BarChartOutlined />,
            title: '库存呆滞',
            desc: '库存积压，呆滞货物过多，库存和资金周转率低，影响企业现金流。'
        },
        {
            src: <BarChartOutlined />,
            title: '运营僵硬',
            desc: '系统操作和实际作业分离，导致异常发生，流程及审批繁杂，效率低，运营管理僵硬。'
        },
        {
            src: <BarChartOutlined />,
            title: '数据造假',
            desc: '无法确保全程数据的准确性和真实性，数据容易造假。'
        },
    ];

    return (
        <div className={styles['solution-context']}>
            <div className={styles['solution-carousel']}>
                <Carousel autoplay>
                    {carouselImgList.map((item) => {
                        return (
                            <div>
                                <div className={styles['carousel-desc']}>
                                    {item.title && <div className={styles['carousel-desc-title']}>{item.title}</div>}
                                    {item.desc && <div className={styles['carousel-desc-detail']}>{
                                        typeof item.desc === 'string' ? item.desc : item.desc.map(d => {
                                            return <>{d}<br /></>;
                                        })
                                    }</div>
                                    }
                                </div>
                                <img src={item.src} />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
            <div className='global-content'>
                <div style={{ padding: '50px 50px 0 50px' }}>
                    <div className={classNames(styles['pain-spot'])}>
                        <Title>数字化转型痛点</Title>
                        <GraduallyEmerging id="pain-points-of-digital-transformation">
                            <div className={classNames(styles['pain-spot-context'])} id="pain-spot-context">
                                {
                                    painSpotList.map(item => {
                                        return (
                                            <div className={styles['pain-spot-item']}>
                                                <div>{item.icon}</div>
                                                <div className={styles['pain-spot-title']}>{item.title}</div>
                                                <div className={styles['pain-spot-desc']}>{item.desc}</div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </GraduallyEmerging>
                    </div>
                </div>
                <TTextBImg
                    img={HomeHannerTwo}
                    list={[
                        '是基于云原生技术架构和智能引擎搭建的数智化技术底座，彻底解决企业数智化转型中遇到的痛点问题，支持全球范围内统一部署和数据无缝链接！',
                        '数智化转型及变革涉及：战略升级、组织升级、人才升级、技术升级、流程升级、管理升级等，选择艾普数智将助力企业加速成功转型和降低转型风险。',
                    ]}
                    title={'智能资源协同平台'}

                />
                <GridDarkBlue title="行业痛点" id="industryPainPointsList" list={IndustryPainPointsList} />
                <TTextBImg
                    img={Solutionimg1}
                    list={[
                        '全业务穿透，各前台、各板块业务及数据互联互通，最大化提升业务价值，避免信息孤岛产生。',
                        '彻底解决信息孤岛、供应链断链和流程断层断点、粗放性管理、企业内耗等问题，实现系统、流程、运作和管理一体化智能协同。'
                    ]}
                    title={'解决方案'}
                />
                <GridBlock title="业务痛点" list={BusinessPainPointsList} />
                <TTextBImg
                    title="业务方案"
                    list={[
                        '支持海陆空干线运输+智能通关+保税仓+海外仓+配送等全链路穿透。',
                        '实现流程、管理、调度、监控预警、结算等一体化服务能力，整合供应链上下游资源，赋能生态伙伴，实现全方位跨境物流一站式综合智能服务。'
                    ]}
                    img={[
                        BusinessScenario1,
                        BusinessScenario2
                    ]} />

                <LTextTitleRImg
                    title="业务价值"
                    list={[
                        { title: '体验升级', desc: '全国运营协同、自动化流程、自动化结算、温度服务、体验更卓越。' },
                        { title: '管理升级', desc: '精准操盘、供应链高效协同、赋能合作伙伴、精益化管理。' },
                        { title: '营收升级', desc: '通过数智化降本增效，减少沟通及管理运营成本，激活营收。' },
                        { title: '创新升级', desc: '实现新业务的快速构建，降低创新风险，快速响应市场及业务的变化，获得更多的市场机会及生意。' },
                        { title: '结论', desc: '实现了企业的业务流程、作业、结算、风控等变得更加自动化，无纸化和智能化，每个部门、环节、上下游等都是高效协同及穿透，客户全程有参与感和知情权，供应链一体化能力和竞争力大幅度提升。' },
                    ]}
                    img={BusinesVsalue}
                />
            </div>

        </div>
    );
};

export default Solution;