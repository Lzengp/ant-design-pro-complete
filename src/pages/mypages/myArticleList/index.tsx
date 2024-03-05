import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState, useRef } from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { TableListItem, TableListPagination } from './data';
import { getPageArticle } from './service';
import moment from 'moment';
import { history } from 'umi';

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<TableListItem[]>([]);

  const columns: ProColumns<TableListItem>[] = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: '笔记名称',
      dataIndex: 'title',
    },
    {
      title: '创建人',
      dataIndex: 'createName',
      hideInForm: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      sorter: true,
      search: false,
      renderText: (val: string) => `${moment(val).format('YYYY-MM-DD HH:mm:ss')}`,
    },
    {
      title: '修改时间',
      sorter: true,
      dataIndex: 'modifyTime',
      renderText: (val: string) => `${moment(val).format('YYYY-MM-DD HH:mm:ss')}`,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          target='-blank'
          onClick={() => {
            history.push(`/myEditor/${record.id}`);
          }}
        >
          详情
        </a>
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<TableListItem, TableListPagination>
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              history.push('/myEditor/create');
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={getPageArticle}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              项 &nbsp;&nbsp;
            </div>
          }
        >
        </FooterToolbar>
      )}
    </PageContainer>
  );
};

export default TableList;
