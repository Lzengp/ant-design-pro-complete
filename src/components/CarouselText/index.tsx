import { Carousel } from "antd";
import styles from './index.less';

interface CarouselTextProps {
    list: Array<{ title?: string, desc?: string | Array<string>, src: any; }>;
}

const CarouselText = (props: CarouselTextProps) => {

    const { list = [] } = props;

    return (
        <Carousel autoplay>
            {list?.map((item) => {
                return (
                    <div className={styles['carousel-context']}>
                        <div className={styles['carousel-desc']}>
                            <div className={styles['carousel-desc-title']}>{item.title}</div>
                            <div className={styles['carousel-desc-detail']}>{
                                typeof item.desc === 'string' ? item.desc : item.desc?.map(d => {
                                    return <>{d}<br /></>;
                                })
                            }</div>
                        </div>
                        <img src={item.src} />
                    </div>
                );
            })}
        </Carousel>
    );

};

export default CarouselText;