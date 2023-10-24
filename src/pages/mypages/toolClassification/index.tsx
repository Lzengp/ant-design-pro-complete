import PaginationCard from "@/components/PaginationCard";
import styles from './index.less';

// 工具
const ToolData = [
    {
        logo: 'https://static.wetools.com/assets/images/web/favicon.ico',
        title: '微工具',
        url: 'https://www.wetools.com/',
        description: '一个提供免费在线工具集合的网站，例如JSON 格式化校验工具、URL编码/解码等等',
    },
    {
        logo: 'https://www.bejson.com/favicon.ico',
        title: 'JSON工具',
        url: 'https://www.bejson.com/',
        description: '在线的JSON解析工具网站，里面也收集了很多其他工具，例如图片处理、文字处理',
    },
    {
        logo: 'https://www.code-nav.cn/favicon.ico',
        title: '编程导航',
        url: 'https://www.code-nav.cn/',
        description: '前腾讯员工鱼皮建立的一个编程面试和技术讨论的网站',
    },
    {
        logo: 'https://app.xunjiepdf.com/ContentMain/Images/logo.png',
        title: '迅捷PDF轉換器',
        url: 'https://app.xunjiepdf.com/',
        description: '文档转换、文档处理、音频转换网站，例如PDF转换其他格式文件、MP4转GIF',
    },
    {
        logo: 'https://www.json.cn/favicon.ico',
        title: 'JSON在线解析',
        url: 'https://www.json.cn/',
        description: '在线JSON解析工具，也包括其他电子工具、计算工具、图片工具',
    },
    {
        logo: 'https://www.iconfont.cn/favicon.ico',
        title: 'iconfont',
        url: 'https://www.iconfont.cn/',
        description: '阿里巴巴推出的一款矢量图标网站，里面有图标库、矢量插画库、字体库',
    },
    {
        logo: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        url: 'https://tool.lu/',
        description: '一款好用的在线工具集合网站，包括一键抠图、正则测试工具等等',
    },
];

// 博客
const BlogData = [
    {
        logo: 'https://www.leoku.top/favicon.ico',
        title: 'leoku',
        url: 'https://www.leoku.top/',
        description: '一位同事的博客，他做的东西感觉很有新颖性，并且技术也是杠杠的',
    },
    {
        logo: 'https://hutusi.com/favicon.ico',
        title: '胡涂说',
        url: 'https://hutusi.com/about/',
        description: '一位喜欢读书的程序员，2012年就开始了写博客，里面还有很多友情链接，也可以看到其他优秀的博客',
    },
];

// 前端技术
const FontendData = [
    {
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        title: 'Ant Design',
        url: 'https://4x-ant-design.antgroup.com/components/overview-cn/',
        description: '阿里的前端组件库，国内最好用的react前端UI组件库之一',
    },
];

const ToolClassification = () => {

    return (
        <div className={styles.toolClassificationWrap}>
            <div style={{ width: '100%', height: '60px', lineHeight: '60px', textAlign: 'center' }}>
                <h2>网站书签</h2>
            </div>
            <div className={styles.content}>
                <h2>工具</h2>
                <PaginationCard dataSource={ToolData} />
                <h2>博客</h2>
                <PaginationCard dataSource={BlogData} />
                <h2>前端技术</h2>
                <PaginationCard dataSource={FontendData} />
            </div>
        </div>
    );

};

export default ToolClassification;