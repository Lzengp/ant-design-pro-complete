import ColumnSettings from "@/components/ColumnSettings";
import { Badge, Table } from "antd";
import { useState } from "react";



const ColumnsSets = () => {

    const columns = [
        {
            title: '操作类型',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: '操作人',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '执行结果',
            dataIndex: 'status',
            key: 'status',
            render: (text: string) => {
                if (text === 'agree') {
                    return <Badge status="success" text="成功" />;
                }
                return <Badge status="error" text="驳回" />;
            },
        },
        {
            title: '操作时间',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
        },
        {
            title: '备注',
            dataIndex: 'memo',
            key: 'memo',
        },
    ];

    const [currentColumns, setCurrentColumns] = useState<any>([...columns]);

    return (
        <>
            <ColumnSettings columns={[...columns]} onChange={setCurrentColumns} />
            <Table
                pagination={false}
                dataSource={[]}
                columns={currentColumns}
            />
        </>
    );
};

export default ColumnsSets;