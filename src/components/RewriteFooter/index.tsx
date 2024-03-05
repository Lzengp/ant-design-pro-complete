import { GithubOutlined } from "@ant-design/icons";
import styles from './index.less';

const RewriteFooter = () => {
    return (
        <div className={styles.icpNum}>
            <span>Copyright © lzengp.top </span>|
            <a target="_blank" href="#/personal">关于我</a>|
            <a target='-blank' href='#/myModularization'>模块化页面体验</a>|
            <a target='-blank' href='#/toolClassification'>微书签</a>|
            <a
                target='-blank'
                onClick={() => {
                    window.open('https://github.com/Lzengp');
                }}
            >
                <GithubOutlined style={{ marginRight: '5px' }} />
            </a>|
            <a style={{}} target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index">粤ICP备2023077596号-1</a>
        </div>
    );
};

export default RewriteFooter;