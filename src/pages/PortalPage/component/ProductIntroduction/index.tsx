import { Carousel, Col, Row } from "antd";
import styles from './index.less';
import { DotChartOutlined } from "@ant-design/icons";
import Title from "../Title";
import ProductIntroductionTwo from '@/assets/product-introduction-two.png';
import HomeHannerOne from '@/assets/home-banner-one.png';
import HomeHannerFour from '@/assets/home-banner-four.png';
import HomeHannerFive from '@/assets/home-banner-five.png';
import TechnicalCapabilities from '@/assets/technical-capabilities.png';
import ProductValue from '@/assets/product-value.png';
import IntelligentResource from '@/assets/intelligent-resource.png';
import GridBlock from "@/components/GridBlock";
import classnames from "classnames";


const ProductIntroduction = () => {

    // 轮播图
    const carouselImgList = [
        {
            // title: '技术平台、业务平台、数据平台、智能平台',
            // desc: [
            //     '智能制造、智慧供应链、智能通关、智能协同、智慧生态',
            //     '全球贸易、跨境电商、国际物流'
            // ],
            // src: 'https://www.walltechsystem.cn/upload/2022-08/166064681774185600.png',
            src: HomeHannerOne,
        },
        {
            // title: '智能引擎，开启万有引力，一切皆有可能！',
            desc: '',
            // src: "https://www.walltechsystem.cn/upload/2023-02/167687813995203800.jpg",
            src: ProductIntroductionTwo,
        },
        {
            // title: '智能制造、全球协同',
            // desc: '致力于建造低碳、绿色产业链和供应链，珍爱地球，让人生活更美好！',
            // src: "https://www.walltechsystem.cn/upload/2022-08/166064706418675300.png",
            src: HomeHannerFour,
        },
        {
            // title: '智能制造、全球协同',
            // desc: '致力于建造低碳、绿色产业链和供应链，珍爱地球，让人生活更美好！',
            // src: "https://www.walltechsystem.cn/upload/2022-08/166064706418675300.png",
            src: HomeHannerFive,
        },
    ];

    // 产品能力
    const productCapabilityList = [
        {
            src: <DotChartOutlined />,
            title: '配置性',
            desc: '业务场景组件化，根据业务需求配置及搭积木方式交付。'
        },
        {
            src: <DotChartOutlined />,
            title: '扩展性',
            desc: '架构灵活，满足企业不同的业务场景及提高新业务开展能力'
        },
        {
            src: <DotChartOutlined />,
            title: '弹性',
            desc: '基于云原生技术框架，支持系统的弹性伸缩和扩容，满足不同需求'
        },
        {
            src: <DotChartOutlined />,
            title: '高并发',
            desc: '在6.18、双十一等大促场景下，为企业提供百万级/小时的任务处理能力，解决高并发需求'
        },
        {
            src: <DotChartOutlined />,
            title: '复用性',
            desc: '具备复用性和灵活性，避免重复建设'
        },
        {
            src: <DotChartOutlined />,
            title: '平台化',
            desc: '产品平台化设计，避免数据割裂及各自为政，支持全球化公司部署和复杂的组织架构及主体，适应变化快的场景'
        },
        {
            src: <DotChartOutlined />,
            title: '多云平台',
            desc: '支持不同云厂商的云平台及自建IDC机房部署。支持全球部署及协同'
        },
        {
            src: <DotChartOutlined />,
            title: '开源兼容',
            desc: '拥抱开源，技术开放，基于标准的云原生技术栈，兼容开源标准，可以低成本、平滑接入微服务技术架构，不依赖特定云厂商及技术体系。'
        },
        {
            src: <DotChartOutlined />,
            title: 'API网关',
            desc: '中心服务以API形式进行发布，支持统一认证鉴权、协议转换、请求响应转换、流量管控、路由设置、熔断降级、监控告警、黑白名单等功能'
        },
        {
            src: <DotChartOutlined />,
            title: 'IT协议',
            desc: '支持不同的IT标准协议，实现快速对接'
        },
    ];

    // 技术能力
    const technicalCapabilities = [
        {
            title: '分布式缓存',
            desc: '解决高并发场景的利器，适用于常见互联网读多写少的场景',
        },
        {
            title: '分布式缓存',
            desc: '应用于高峰期的数据消峰，以及服务间的解耦',
        },
        {
            title: '配置中心',
            desc: '多应用，多集群，多环境的配置隔离，解决工程与配置分离，动态修改配置',
        },
        {
            title: '服务治理',
            desc: '提供服务注册，服务发现，负载均衡，限流，熔断等功能',
        },
        {
            title: '分布式任务调度',
            desc: '提供任务的定时调度，以及批量任务的高效率执行',
        },
    ];

    // 产品价值
    const productValueList = [
        {
            title: '降本增效',
            desc: '通过数智化降本增效，智慧协同，减少操作及沟通成本，激活营收。',
        },
        {
            title: '分布式缓存',
            desc: '应用于高峰期的数据消峰，以及服务间的解耦',
        },
        {
            title: '精益运营',
            desc: '通过数智化提供的洞察，让工作效率和价值可衡量，体验更卓越。',
        },
        {
            title: '创新能力',
            desc: '通过数据驱动和智能引擎，提升业务创新能力，实现新业务的快速构建，降低创新风险。',
        },
        {
            title: '生态整合',
            desc: '通过数智平台能力开放给生态，赋能上下游、产业链，提高资源整合能力。',
        },
    ];


    return (
        <div className={styles['product-introduction-wrap']}>

            <div className={styles['product-introduction-carousel']}>
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
            <div className="global-content">
                <GridBlock title="产品能力" list={productCapabilityList} />
                <div className={styles['technical-capabilities']}>
                    <Title>技术能力</Title>
                    <div className={styles['technical-capabilities-conetext']}>
                        <div className="left">
                            <img src={TechnicalCapabilities} />
                        </div>
                        <div className={classnames(styles['technical-capabilities-text'], 'right')}>
                            {
                                technicalCapabilities.map(item => {
                                    return (
                                        <div className={styles['technical-capabilities-item']}>
                                            <div className={styles['technical-capabilities-title']}>
                                                {item.title}
                                            </div>
                                            <div className={styles['technical-capabilities-desc']}>
                                                {item.desc}
                                            </div>
                                        </div>
                                    );
                                })
                            }

                        </div>
                    </div>

                </div>
                <div className={styles['product-value']}>
                    <Title>产品价值</Title>
                    <div className={styles['about-gaojet-thought']}>
                        <div className={classnames(styles['thought-content'], 'left')}>
                            {
                                productValueList.map(item => {
                                    return (
                                        <div className={styles['thought-content-item']}>
                                            <div className={styles['item-title']}>{item.title}</div>
                                            <div className={styles['item-desc']}>{item.desc}</div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className="right">
                            <img src={ProductValue} />
                        </div>
                    </div>
                </div>
                <div className={styles['intelligent-resource']}>
                    <Title>智能资源协同平台</Title>
                    <div style={{ textAlign: 'center' }}>
                        <img src={IntelligentResource} />
                    </div>
                </div>
            </div>

        </div >
    );
};

export default ProductIntroduction;