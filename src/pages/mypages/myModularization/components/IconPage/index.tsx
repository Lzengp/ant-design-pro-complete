import { MyIcon } from "@/components/MyIcon";
import mywebpage from '@/assets/icons/mywebpage.svg';
import Icon from "@ant-design/icons";
import { ReactComponent as IconMyWebPage } from '@/assets/icons/mywebpage.svg';
import ProCardCode from "@/components/ProCardCode";

const code = `
~~~tsx

MyIcon.tsx

import { createFromIconfontCN } from '@ant-design/icons';

export const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_3269449_pxfeihmehnf.js', // 在 iconfont.cn 上生成
});

index.tsx

import { MyIcon } from "@/components/MyIcon";
import mywebpage from '@/assets/icons/mywebpage.svg';
import Icon from "@ant-design/icons";
import { ReactComponent as IconMyWebPage } from '@/assets/icons/mywebpage.svg';
import ProCardCode from "@/components/ProCardCode";

const IconPage = () => {
    return (
        <>
            <h2>图标的使用</h2>
            <div style={{ display: 'flex' }}>
                <MyIcon type="icon-shezhi" style={{ color: 'red' }} />
                <Icon component={IconMyWebPage} style={{ fontSize: 14, color: 'red', margin: '0 10px' }} />
                <img src={mywebpage} style={{ width: '14px' }} />
            </div>
        </>
    );
};

export default IconPage;
~~~

`;

// icon测试页面
const IconPage = () => {
    return (
        <>
            <h2>图标的使用</h2>
            <div style={{ display: 'flex' }}>
                <MyIcon type="icon-shezhi" style={{ color: 'red' }} />
                <Icon component={IconMyWebPage} style={{ fontSize: 14, color: 'red', margin: '0 10px' }} />
                <img src={mywebpage} style={{ width: '14px' }} />
            </div>
            <ProCardCode code={code} />
        </>
    );
};

export default IconPage;