
import styles from './index.less';
import line from '../../../../assets/line.svg';

interface TitleProps {
    title: string;
}

const Title = (props: TitleProps) => {

    const { title } = props;

    return (
        <>
            <div className={styles['content-title']}>
                <img src={line} />
                <span className={styles['title']}>{title}</span>
                <img src={line} />
            </div>
        </>
    );
};

export default Title;