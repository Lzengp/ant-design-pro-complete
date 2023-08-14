
import styles from './index.less';
import line from '../../../../assets/line.svg';

interface TitleProps {
    title?: string;
    children?: any;
}

const Title = (props: TitleProps) => {

    const { title, children } = props;

    return (
        <>
            <div className={styles['content-title']}>
                {/* <img src={line} /> */}
                <div className={styles['blue-line']}></div>
                <span className={styles['title']}>{title || children}</span>
                <div className={styles['blue-line']}></div>
            </div>
        </>
    );
};

export default Title;