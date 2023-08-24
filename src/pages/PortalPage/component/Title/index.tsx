
import styles from './index.less';
import GraduallyEmerging from '@/components/GraduallyEmerging';

interface TitleProps {
    title?: string;
    children?: any;
}

const Title = (props: TitleProps) => {

    const { title, children } = props;

    return (
        <>
            {/* <GraduallyEmerging id={('id' + (Math.random() * 1000000).toFixed(0))}> */}
            <div className={styles['content-title']}>
                <div className={styles['blue-line']}></div>
                <span className={styles['title']}>{title || children}</span>
                <div className={styles['blue-line']}></div>
            </div>
            {/* </GraduallyEmerging> */}
        </>
    );
};

export default Title;