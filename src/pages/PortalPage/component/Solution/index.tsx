

import styles from './index.less';
import HomeHannerTwo from '@/assets/home-banner-two.png';
import HomeHannerThree from '@/assets/home-banner-three.png';
import HomeHanner from '@/assets/home-banner.png';
import SolutionBanner1 from '@/assets/solution-banner1.png';
import SolutionBanner2 from '@/assets/solution-banner2.png';
import { Carousel } from 'antd';
import CarouselText from '@/components/CarouselText';
import { AimOutlined } from '@ant-design/icons';
import Title from '../Title';
import { useEffect, useState } from 'react';
import { isElementVisible } from '@/utils/utils';
import classNames from 'classnames';
import GraduallyEmerging from '@/components/GraduallyEmerging';
import LTextRImg from '@/components/LTextRImg';


const Solution = () => {

    // 轮播图
    const carouselImgList = [
        {
            title: '技术平台、业务平台、数据平台、智能平台',
            desc: [
                '智能制造、智慧供应链、智能通关、智能协同、智慧生态',
                '全球贸易、跨境电商、国际物流'
            ],
            // src: 'https://www.walltechsystem.cn/upload/2022-08/166064681774185600.png',
            src: SolutionBanner1,
        },
        {
            title: '智能引擎，开启万有引力，一切皆有可能！',
            desc: '',
            // src: "https://www.walltechsystem.cn/upload/2023-02/167687813995203800.jpg",
            src: SolutionBanner2,
        },
        {
            title: '智能制造、全球协同',
            desc: '致力于建造低碳、绿色产业链和供应链，珍爱地球，让人生活更美好！',
            // src: "https://www.walltechsystem.cn/upload/2022-08/166064706418675300.png",
            src: HomeHannerThree,
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

    // const [aa, setAA] = useState<boolean>(false);

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         // console.log('xxxxxxxxxx', isElementVisible('#pain-spot-context'));
    //         const rect = document.querySelector('#pain-spot-context')?.getBoundingClientRect();
    //         const vHeight = window.innerHeight || document.documentElement.clientHeight;
    //         console.log((vHeight * 0.7).toFixed(2), rect?.top.toFixed(2));
    //         if ((vHeight * 0.78) > rect?.top) {
    //             console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkk');
    //             setAA(true);
    //         } else {
    //             setAA(false);
    //         }

    //     });
    // }, []);

    return (
        <div className={styles['solution-context']}>

            <div className={styles['solution-carousel']}>
                <Carousel autoplay>
                    <div>
                        <div className={styles['carousel-desc']}>
                            <div className={styles['carousel-desc-title']}>跨境智慧供应链解决方案</div>
                            <div className={styles['carousel-desc-detail']}>
                                ARP平台：海陆空干线运输+FBA+智能通关+保税仓+海外仓+配送等全链路环节
                            </div>
                        </div>
                        <img src={SolutionBanner1} />
                    </div>
                </Carousel>
            </div>
            <div style={{ padding: '50px' }}>
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
            <LTextRImg img={HomeHanner} list={['专治数字化转型痛点', '数字化转型及变革是一把手工程，存在：战略升级、组织升级、人才升级、技术升级、流程升级、管理升级等']} title={'智能资源协同平台'} />

            <div style={{ padding: '50px' }}>
                <div className={classNames(styles['pain-spot'])}>
                    <Title>行业痛点</Title>
                    <GraduallyEmerging id="industryPainPointsList">
                        <div className={classNames(styles['pain-spot-context'])} id="pain-spot-context">
                            {
                                IndustryPainPointsList.map(item => {
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
        </div>
    );
};

export default Solution;