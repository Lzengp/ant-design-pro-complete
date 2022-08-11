import { MyIcon } from "@/components/MyIcon";
import mywebpage from '@/assets/icons/mywebpage.svg';
import Icon from "@ant-design/icons";
import { ReactComponent as IconMyWebPage } from '@/assets/icons/mywebpage.svg';
import styles from './index.less';

// 模块化页面：不同的模块功能组成的一个大页面，用于一些小功能的展示
const myModularization = () => {
    return (
        <>
            <div className={styles.modularization}>
                <div style={{ display: 'flex' }}>
                    <MyIcon type="icon-shezhi" style={{ color: 'red' }} />
                    <Icon component={IconMyWebPage} style={{ fontSize: 14, color: 'red', margin: '0 10px' }} />
                    <img src={mywebpage} style={{ width: '14px' }} />
                </div>

            </div>
        </>
    )
}

export default myModularization;