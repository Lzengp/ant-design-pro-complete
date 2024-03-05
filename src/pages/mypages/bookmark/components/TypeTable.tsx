import { PlusOutlined } from "@ant-design/icons";
import { Button, Drawer, Switch, message } from "antd";
import { useRef, useState } from "react";
import { addRule, removeRule, rule, updateRule } from "../service";
// import { FooterToolbar, ModalForm, ProFormText, ProList } from "@ant-design/pro-components";
import { ModalForm, ProFormSwitch, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import { type ProColumns, type ActionType, ProTable } from '@ant-design/pro-table';
import request from 'umi-request';
import { TableListItem } from "../data";
import UpdateForm, { FormValueType } from "./UpdateForm";
import { ProList } from "@ant-design/pro-components";

interface TypeTableProps {

}

const handleAdd = async (fields: TableListItem) => {
    const hide = message.loading('正在添加');
  
    try {
      await addRule({ ...fields });
      hide();
      message.success('添加成功');
      return true;
    } catch (error) {
      hide();
      message.error('添加失败请重试！');
      return false;
    }
  };
  /**
   * 更新节点
   *
   * @param fields
   */
  
  const handleUpdate = async (fields: FormValueType, currentRow?: TableListItem) => {
    const hide = message.loading('正在配置');
  
    try {
      await updateRule({
        ...currentRow,
        ...fields,
      });
      hide();
      message.success('配置成功');
      return true;
    } catch (error) {
      hide();
      message.error('配置失败请重试！');
      return false;
    }
  };
  /**
   * 删除节点
   *
   * @param selectedRows
   */
  
  const handleRemove = async (selectedRows: TableListItem[]) => {
    const hide = message.loading('正在删除');
    if (!selectedRows) return true;
  
    try {
      await removeRule({
        key: selectedRows.map((row) => row.key),
      });
      hide();
      message.success('删除成功，即将刷新');
      return true;
    } catch (error) {
      hide();
      message.error('删除失败，请重试');
      return false;
    }
  };

// 书签分类列表
const TypeTable = (props: TypeTableProps) => {

    const actionRef = useRef<ActionType>();
    /** 新建窗口的弹窗 */
    const [createModalVisible, handleModalVisible] = useState<boolean>(false);
    const [currentRow, setCurrentRow] = useState<any>();
    const [selectedRowsState, setSelectedRows] = useState<any[]>([]);
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);


    const columns = [
        {
            title: '书签分类值',
            dataIndex: 'name',
            // tip: '规则名称是唯一的 key',
            render: (dom, entity) => {
                return (
                    <a
                        onClick={() => {
                            setCurrentRow(entity);
                            setShowDetail(true);
                        }}
                    >
                        {dom}
                    </a>
                );
            },
        },
        {
            title: '书签分类名称',
            dataIndex: 'desc',
            valueType: 'textarea',
        },
        {
            title: '状态',
            dataIndex: 'status',
            hideInForm: true,
            // valueType: 'switch',
            renderFormItem: () => {

            },
            render: (text, record) => {
                return <Switch defaultChecked={text == 0} />;
            }
        },
        {
            title: '创建时间',
            sorter: true,
            dataIndex: 'updatedAt',
            valueType: 'dateTime',
        },
        {
            title: '修改时间',
            sorter: true,
            dataIndex: 'modifyTime',
            valueType: 'dateTime',
        },
        {
            title: '操作',
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => [
                <a
                    key="config"
                    onClick={() => {
                        handleUpdateModalVisible(true);
                        setCurrentRow(record);
                    }}
                >
                    修改
                </a>,
                <a key="subscribeAlert" href="https://procomponents.ant.design/">
                    删除
                </a>,
            ],
        },
    ];

    return (
        <>
            <ProTable
                headerTitle="书签分类"
                actionRef={actionRef}
                rowKey="key"
                search={{
                    labelWidth: 120,
                }}
                toolBarRender={() => [
                    <Button
                        type="primary"
                        key="primary"
                        onClick={() => {
                            handleModalVisible(true);
                        }}
                    >
                        <PlusOutlined /> 新建
                    </Button>,
                ]}
                request={rule}
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
                            <span>
                                服务调用次数总计 {selectedRowsState.reduce((pre, item) => pre + item.callNo!, 0)} 万
                            </span>
                        </div>
                    }
                >
                    <Button
                        onClick={async () => {
                            await handleRemove(selectedRowsState);
                            setSelectedRows([]);
                            actionRef.current?.reloadAndRest?.();
                        }}
                    >
                        批量删除
                    </Button>
                    <Button type="primary">批量审批</Button>
                </FooterToolbar>
            )}
            <ModalForm
                title="新建书签分类"
                width="400px"
                visible={createModalVisible}
                onVisibleChange={handleModalVisible}
                onFinish={async (value) => {
                    console.log(value);
                    const success = await handleAdd(value as TableListItem);
                    if (success) {
                        handleModalVisible(false);
                        if (actionRef.current) {
                            actionRef.current.reload();
                        }
                    }
                }}
                initialValues={{ status: true }}
            >
                <ProFormText
                    rules={[
                        {
                            required: true,
                            message: '规则名称为必填项',
                        },
                    ]}
                    width="md"
                    name="value"
                    label="值"
                />
                <ProFormText
                    rules={[
                        {
                            required: true,
                            message: '规则名称为必填项',
                        },
                    ]}
                    width="md"
                    name="text"
                    label="名称"
                />
                <ProFormSwitch
                    name="status"
                    label="状态"
                    checkedChildren="开启"
                    unCheckedChildren="关闭"
                />
            </ModalForm>
            <UpdateForm
                onSubmit={async (value) => {
                    const success = await handleUpdate(value, currentRow);

                    if (success) {
                        handleUpdateModalVisible(false);
                        setCurrentRow(undefined);

                        if (actionRef.current) {
                            actionRef.current.reload();
                        }
                    }
                }}
                onCancel={() => {
                    handleUpdateModalVisible(false);
                    setCurrentRow(undefined);
                }}
                updateModalVisible={updateModalVisible}
                values={currentRow || {}}
            />

            <Drawer
                width={600}
                open={showDetail}
                onClose={() => {
                    setCurrentRow(undefined);
                    setShowDetail(false);
                }}
                closable={false}
            >
                <ProList
                    toolBarRender={() => {
                        return [
                            <Button key="3" type="primary">
                                新建
                            </Button>,
                        ];
                    }}
                    search={{
                        filterType: 'light',
                    }}
                    rowKey="name"
                    headerTitle="react"
                    request={async (params = {} as Record<string, any>) => {
                        const b = await request<{
                            data: [];
                        }>('https://proapi.azurewebsites.net/github/issues', {
                            params,
                        });
                        const a = ['react hook 函数 10分钟搞懂', '10分钟教你手写8个常用的自定义hooks', 'React 源码解析', '说一说 Fiber', 'React的数据'];
                        const resData = { ...b, data: b.data.map((item, index) => ({ ...item, title: a[index] })) };
                        // const resData = data.map((item, index) => ({ ...item, title: a[index] }));
                        console.log('xxxx', b, resData);
                        return resData;
                    }
                    }
                    pagination={{
                        pageSize: 5,
                    }}
                    showActions="hover"
                    metas={{
                        title: {
                            dataIndex: 'title',
                            title: '标题',
                        },
                        // avatar: {
                        //   dataIndex: 'avatar',
                        //   search: false,
                        // },
                        // description: {
                        //   dataIndex: 'title',
                        //   search: false,
                        // },
                        // subTitle: {
                        //   dataIndex: 'labels',
                        //   render: (_, row) => {
                        //     return (
                        //       <Space size={0}>
                        //         {row.labels?.map((label: { name: string; }) => (
                        //           <Tag color="blue" key={label.name}>
                        //             {label.name}
                        //           </Tag>
                        //         ))}
                        //       </Space>
                        //     );
                        //   },
                        //   search: false,
                        // },
                        actions: {
                            render: (text, row) => [
                                <a
                                    href={row.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key="link"
                                >
                                    修改
                                </a>,
                            ],
                            search: false,
                        },
                    }}
                />
            </Drawer>
        </>
    );
};

export default TypeTable;