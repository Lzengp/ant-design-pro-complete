// 分页卡片

import { Col, Pagination, Row } from "antd";
import MyCard, { MyCardProps } from "../Card";
import { useState } from "react";

interface PaginationCardProps {
    dataSource: Array<MyCardProps>;
}


const PaginationCard = (props: PaginationCardProps) => {
    const { dataSource: propsData } = props;
    const [dataSource, setDataSource] = useState<Array<MyCardProps>>(propsData.slice(0, 9));
    const [current, setCurrent] = useState<number>(1);

    const onChange = (page: number) => {
        setDataSource(propsData.slice((page - 1) * 9, page * 9));
        setCurrent(page);
    };


    return (
        <div key={propsData[0].title} style={{ position: 'relative', marginBottom: '20px' }}>
            <Row gutter={24}>
                {
                    dataSource.map((item: MyCardProps) => {
                        return <Col style={{ marginBottom: '20px' }} key={item.logo}><MyCard {...item} /></Col>;
                    })
                }
            </Row>
            <Pagination
                size="small"
                total={propsData?.length}
                onChange={onChange}
                current={current}
                pageSize={9}
            />
        </div>
    );
};

export default PaginationCard;;