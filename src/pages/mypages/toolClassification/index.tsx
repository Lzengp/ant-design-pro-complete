import PaginationCard from "@/components/PaginationCard";

// 分类
const TypeData = ['工具'];

// 工具集合类
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

const ToolClassification = () => {

    return (
        <>
            <div style={{ width: '100%', height: '60px', lineHeight: '60px', textAlign: 'center' }}>
                <h2>收集好玩的一些网站，仅供学习参考使用</h2>
            </div>
            <div style={{ backgroundColor: '#f2f4f2', padding: '60px' }}>
                {/* <h3>工具</h3> */}
                <PaginationCard dataSource={ToolData} />
            </div>
        </>
    );

};

export default ToolClassification;