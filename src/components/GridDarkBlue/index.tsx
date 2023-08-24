
import Title from '@/pages/PortalPage/component/Title';
import styles from './index.less';
import GraduallyEmerging from '../GraduallyEmerging';

interface GridDarkBlueProps {
    title: string; // 模块名称
    id: string; // 用作动画id
    list: Array<{
        icon: any; // 图标
        title: string; // 卡片名称
        desc: string; // 卡片描述
    }>;
}

const GridDarkBlue = (props: GridDarkBlueProps) => {

    const { title, id, list } = props;

    return (
        <>
            <div className={styles['grid-darkblue']}>
                <Title>{title}</Title>
                <GraduallyEmerging id={id}>
                    <div className={styles['grid-darkblue-context']}>
                        {
                            list.map(item => {
                                return (
                                    <div className={styles['grid-darkblue-item']}>
                                        <div>{item.icon}</div>
                                        <div className={styles['grid-darkblue-title']}>{item.title}</div>
                                        <div className={styles['grid-darkblue-desc']}>{item.desc}</div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </GraduallyEmerging>
            </div>

        </>
    );
};

export default GridDarkBlue;