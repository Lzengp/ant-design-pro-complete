// 分页卡片

import { Col, Pagination, Row } from "antd";
import MyCard, { MyCardProps } from "../Card";
import { useState } from "react";
import styles from './index.less';

interface PaginationCardProps {
    dataSource: Array<MyCardProps>;
    btnName?: string;
}


const PaginationCard = (props: PaginationCardProps) => {
    const { dataSource: propsData, btnName } = props;
    const [dataSource, setDataSource] = useState<Array<MyCardProps>>(propsData.slice(0, 12));
    const [current, setCurrent] = useState<number>(1);

    const onChange = (page: number) => {
        setDataSource(propsData.slice((page - 1) * 12, page * 12));
        setCurrent(page);
    };


    return (
        <div key={propsData[0].title} style={{ position: 'relative', marginBottom: '20px' }} className={styles.paginationCardWrap}>
            <Row gutter={24}>
                {
                    dataSource.map((item: MyCardProps) => {
                        return <Col style={{ marginBottom: '20px' }} key={item.logo}><MyCard {...item} btnName={btnName} /></Col>;
                    })
                }
            </Row>
            <Pagination
                size="small"
                total={propsData?.length}
                onChange={onChange}
                current={current}
                pageSize={12}
            />
        </div>
    );
};

export default PaginationCard;;