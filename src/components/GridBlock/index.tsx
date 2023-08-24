
import Title from '@/pages/PortalPage/component/Title';
import styles from './index.less';
import { Col, Row } from 'antd';

interface GridBlockProps {
    title: string; // 模块名称
    list: Array<{
        src: any; // 图标
        title: string; // 卡片名称
        desc: string; // 卡片描述
    }>;
}

const GridBlock = (props: GridBlockProps) => {

    const { title, list } = props;

    return (
        <>
            <div className={styles['grid-block']}>
                <Title>{title}</Title>
                <Row className={styles['grid-block-context']}>
                    {
                        list.map(d => {
                            return (
                                <Col className={styles['grid-block-item']} style={{ width: `${200 / list.length}%` }}>
                                    <div>
                                        {d.src}
                                    </div>
                                    <div className={styles['grid-block-title']}>
                                        {d.title}
                                    </div>
                                    <div className={styles['grid-block-desc']}>
                                        {d.desc}
                                    </div>
                                </Col>
                            );
                        })
                    }
                </Row>
            </div>
        </>
    );
};

export default GridBlock;