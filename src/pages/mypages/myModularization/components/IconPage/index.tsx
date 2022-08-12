import { MyIcon } from "@/components/MyIcon";
import mywebpage from '@/assets/icons/mywebpage.svg';
import Icon from "@ant-design/icons";
import { ReactComponent as IconMyWebPage } from '@/assets/icons/mywebpage.svg';

// icon测试页面
const IconPage = () => {
    return (
        <div style={{ display: 'flex' }}>
            <MyIcon type="icon-shezhi" style={{ color: 'red' }} />
            <Icon component={IconMyWebPage} style={{ fontSize: 14, color: 'red', margin: '0 10px' }} />
            <img src={mywebpage} style={{ width: '14px' }} />
        </div>
    )
}

export default IconPage;