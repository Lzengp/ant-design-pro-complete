import { ArrowDownOutlined, ArrowUpOutlined, SettingOutlined, VerticalAlignBottomOutlined, VerticalAlignMiddleOutlined, VerticalAlignTopOutlined } from "@ant-design/icons";
import { Button, Checkbox, Dropdown, Menu, message, Space, Tooltip } from "antd";
import { useEffect, useState } from "react";
import _ from 'lodash';
import { Container, Draggable } from 'react-smooth-dnd';

interface OriginColumnsProps {
    key?: string;
    dataIndex?: string;
    title: string;
    fixed?: string;
    render?: any;
    [key: string]: any;
}

export interface ColumnsProps extends OriginColumnsProps {
    name?: string;
    visible?: boolean;
}

interface ColumnSettingsProps {
    columns: Array<OriginColumnsProps>;
    onChange: (value: Array<ColumnsProps>) => void;
    defaultColumnSettingsName?: string;
}

interface DropResult {
    removedIndex: number | null;
    addedIndex: number | null;
    payload?: any;
    element?: HTMLElement;
}

// 列缓存设置
const ColumnSettings = (props: ColumnSettingsProps) => {

    const { columns, onChange: propsOnChange, defaultColumnSettingsName } = props;
    const [checkedList, setCheckedList] = useState(columns.map((d: any) => d.key || d.dataIndex));
    const [currentColumns, setCurrentColumns] = useState<Array<any>>([...columns]);
    const topCurrentColumns = currentColumns.filter(r => r.fixed === 'left');
    const midCurrentColumns = currentColumns.filter(r => r.fixed !== 'left' && r.fixed !== 'right');
    const btmCurrentColumns = currentColumns.filter(r => r.fixed === 'right');

    // 默认列设置名称, 取列表的前10个字段名称, 如果两个列表字段一样，使用defaultColumnSettingsName定义唯一标识
    let columnSettingsName = defaultColumnSettingsName || columns.slice(0, 10).map((item: any) => item.key || item.dataIndex).join('');
    const customColumnSettingsJson = localStorage.getItem('customColumnSettings');
    let customColumnSettings = {};
    if (customColumnSettingsJson && customColumnSettingsJson !== 'undefined') {
        customColumnSettings = JSON.parse(customColumnSettingsJson);
    }

    useEffect(() => {
        console.log('渲染columns');
        // 判断缓存是否有当前列表,render是无法放缓存的，还需要从原始columns拿
        if (customColumnSettings && Array.isArray(customColumnSettings[columnSettingsName])) {
            let checkedListList: Array<string> = [];
            const list = customColumnSettings[columnSettingsName].map((d: ColumnsProps) => {
                if (d.visible) {
                    checkedListList.push(d.name || '');
                }
                return {
                    ...d,
                    ...columns[columns.findIndex((r: any) => r.key == d.name || r.dataIndex == d.name)]
                };
            });
            setCheckedList([...checkedListList]);
            setCurrentColumns(list);
        } else {
            const list = columns.map((d) => {
                return {
                    name: d.key || d.dataIndex,
                    visible: checkedList.includes(d.key || d.dataIndex),
                    ...d,
                };
            });
            setCurrentColumns(list);
        }
    }, [columns]);

    useEffect(() => {
        console.log('渲染currentColumns', currentColumns);
        // propsOnChange && propsOnChange(currentColumns.filter((d) => d.visible));
        // 缓存列设置到缓存里面
        // const resCustomColumnSettings = { ...customColumnSettings, [columnSettingsName]: currentColumns };
        // localStorage.setItem('customColumnSettings', JSON.stringify(resCustomColumnSettings));
    }, [currentColumns]);

    /**
     * 勾选事件 - 是否展示列表字段
     * @param list 勾选的字段
     * @returns 
     */
    const onChange = (list: any) => {
        if (!list || !list.length) return message.error('不可以全取消');
        setCheckedList(list);
        const resList = [...currentColumns];
        resList.forEach((d) => d.visible = list.includes(d.name));
        setCurrentColumns(resList);

        return;
    };

    /**
     * 上移
     * @param d columns里面的元素
     * @returns 
     */
    const moveUp = (d: ColumnsProps) => {
        const fixedColumns = currentColumns.filter((r: any) => !r.fixed);
        const fixedIndex = fixedColumns.findIndex((r: any) => r.name === d.name);
        if (fixedIndex === 0) {
            message.error('当前已经是第一位了');
            return;
        }
        const list = [...currentColumns];
        const currentIndex = list.findIndex((r: any) => r.name === d.name); // 需要移动元素的位置
        list[currentIndex] = list.splice(
            currentIndex - 1,
            1,
            list[currentIndex],
        )[0];
        setCurrentColumns(list);
    };

    /**
     * 下移
     * @param d columns里面的元素
     */
    const moveDown = (d: ColumnsProps) => {
        const fixedColumns = currentColumns.filter((r: any) => !r.fixed);
        const fixedIndex = fixedColumns.findIndex((r: any) => r.name === d.name);
        if (fixedIndex === 0) {
            message.error('当前已经是最后一位了');
            return;
        }
        const list = [...currentColumns];
        const currentIndex = list.findIndex((r: any) => r.name === d.name); // 需要移动元素的位置
        list[currentIndex] = list.splice(
            currentIndex + 1,
            1,
            list[currentIndex],
        )[0];
        setCurrentColumns(list);
    };

    /**
     * 固定在列首
     * @param d columns里面的元素
     */
    const topFixedFunc = (d: ColumnsProps) => {
        const list = [...currentColumns];
        list[list.findIndex((r: any) => r.name === d.name)].fixed = 'left';
        const leftColumns = list.filter(r => r.fixed === 'left');
        const resList = leftColumns.concat(list.filter(r => r.fixed !== 'left'));
        setCurrentColumns(resList);
    };

    /**
     * 固定在列尾
     * @param d columns里面的元素
     */
    const btmFixedFunc = (d: ColumnsProps) => {
        const list = [...currentColumns];
        list[list.findIndex((r: any) => r.name === d.name)].fixed = 'right';
        const rightColumns = list.filter(r => r.fixed === 'right');
        const resList = list.filter(r => r.fixed !== 'right').concat(rightColumns);
        setCurrentColumns(resList);
    };

    /**
     * 取消固定
     * @param d columns里面的元素
     */
    const cancelFixed = (d: ColumnsProps) => {
        const list = [...currentColumns];
        list[list.findIndex((r: any) => r.name === d.name)].fixed = '';
        setCurrentColumns(list);
    };

    // 重置
    const restColumns = () => {
        setCheckedList(columns.map((d: any) => d.key || d.dataIndex));
        const list = columns.map((d) => {
            return {
                name: d.key || d.dataIndex,
                visible: checkedList.includes(d.key || d.dataIndex),
                ...d,
            };
        });
        setCurrentColumns(list);
    };

    // 拖拽事件
    const onDrop = (e: DropResult) => {
        const { removedIndex, addedIndex } = e;
        const list = [...currentColumns];
        console.log('e:', e, 'remocedData:', list[removedIndex], 'topCurrentColumns:', topCurrentColumns, 'currentColumns:', currentColumns);
        if (removedIndex !== addedIndex && (removedIndex || removedIndex === 0) && (addedIndex || addedIndex === 0)) {
            let remocedData = list[removedIndex]; // 移动的数据
            list.splice(removedIndex, 1); // 删掉原来位置上的数据
            // 注意需要处理列首和列尾
            // const topList = list.filter((d) => d.fixed === 'left');
            const rightIndex = list.findIndex((d) => d.fixed === 'right');
            if (remocedData) {
                if (remocedData && topCurrentColumns.length - 1 >= addedIndex) {
                    remocedData = { ...remocedData, fixed: 'left' };
                } else if (remocedData && rightIndex >= 0 && addedIndex >= rightIndex) {
                    remocedData = { ...remocedData, fixed: 'right' };
                } else {
                    remocedData = { ...remocedData, fixed: '' };
                }
                list.splice(addedIndex, 0, remocedData); // 在新的位置上插入
                setCurrentColumns(list);
                console.log('currentColumns:', list, 'remocedData:', remocedData);
            }
        }
    };

    const menu = (
        <Menu style={{ padding: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>列展示</span>
                <a onClick={restColumns}>重置</a>
            </div>
            <Menu.Divider />
            <Checkbox.Group
                style={{ display: 'flex', flexDirection: 'column', userSelect: 'none' }}
                value={checkedList}
                onChange={onChange}
            >
                <Container onDrop={onDrop} getChildPayload={(index) => currentColumns[index]}>
                    {topCurrentColumns.length > 0 ? <>固定在左侧</> : <></>}
                    {topCurrentColumns.map((d: any, index: any) => (
                        <Draggable key={d.name + index + 'Draggable'}>
                            <div
                                key={d.name + index + 'topColumnsDiv'}
                                style={{ display: 'flex', justifyContent: 'space-between' }}
                            >
                                <Checkbox key={d.name + index + 'topColumnsCheckbox'} value={d.name}>
                                    {d.title}
                                </Checkbox>
                                <Space>
                                    <a>
                                        <Tooltip title="取消固定">
                                            <VerticalAlignMiddleOutlined
                                                onClick={() => {
                                                    cancelFixed(d);
                                                }}
                                            />
                                        </Tooltip>
                                    </a>
                                    <a>
                                        <Tooltip title="固定在列尾">
                                            <VerticalAlignBottomOutlined
                                                onClick={() => {
                                                    btmFixedFunc(d);
                                                }}
                                            />
                                        </Tooltip>
                                    </a>
                                </Space>
                            </div>
                        </Draggable>
                    ))}
                    {topCurrentColumns.length > 0 || currentColumns.filter(r => r.fixed === 'right').length > 0 ? <>不固定</> : <></>}
                    {midCurrentColumns.map((d: any, index: any) => (
                        <Draggable key={d.name + index + 'Draggable'}>
                            <div
                                key={d.name + index + 'div'}
                                style={{ display: 'flex', justifyContent: 'space-between' }}
                            >
                                {!d.topFixed && !d.btmFixed && !['left', 'right'].includes(d.fixed) && (
                                    <>
                                        <Checkbox disabled={midCurrentColumns.length < 2} key={d.name + index + 'Checkbox'} value={d.name}>
                                            {d.title}
                                        </Checkbox>
                                        <Space key={d.name + index + 'Space'}>
                                            {
                                                index !== 0 && (
                                                    <a>
                                                        <Tooltip title="上移">
                                                            <ArrowUpOutlined onClick={() => { if (index === 0) { return; } moveUp(d); }} />
                                                        </Tooltip>
                                                    </a>
                                                )
                                            }
                                            {
                                                index !== midCurrentColumns.length - 1 && (
                                                    <a>
                                                        <Tooltip title="下移">
                                                            <ArrowDownOutlined onClick={() => { moveDown(d); }} />
                                                        </Tooltip>
                                                    </a>
                                                )
                                            }
                                            <a>
                                                <Tooltip title="固定在列首">
                                                    <VerticalAlignTopOutlined
                                                        onClick={() => {
                                                            topFixedFunc(d);
                                                        }}
                                                    />
                                                </Tooltip>
                                            </a>
                                            <a>
                                                <Tooltip title="固定在列尾">
                                                    <VerticalAlignBottomOutlined
                                                        onClick={() => {
                                                            btmFixedFunc(d);
                                                        }}
                                                    />
                                                </Tooltip>
                                            </a>
                                        </Space>
                                    </>
                                )}
                            </div>
                        </Draggable>
                    ))}
                    {btmCurrentColumns.length > 0 ? <>固定在右侧</> : <></>}
                    {btmCurrentColumns.map((d: any, index: any) => (
                        <Draggable key={d.name + index + 'Draggable'}>
                            <div
                                key={d.name + index + 'btmColumnsDiv'}
                                style={{ display: 'flex', justifyContent: 'space-between' }}
                            >
                                <Checkbox key={d.name + index + 'btmColumnsCheckbox'} value={d.name}>
                                    {d.title}
                                </Checkbox>
                                <Space>
                                    <a>
                                        <Tooltip title="固定在列首">
                                            <VerticalAlignTopOutlined
                                                onClick={() => {
                                                    topFixedFunc(d);
                                                }}
                                            />
                                        </Tooltip>
                                    </a>
                                    <a>
                                        <Tooltip title="取消固定">
                                            <VerticalAlignMiddleOutlined
                                                onClick={() => {
                                                    cancelFixed(d);
                                                }}
                                            />
                                        </Tooltip>
                                    </a>
                                </Space>
                            </div>
                        </Draggable>
                    ))}
                </Container>
            </Checkbox.Group>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <Tooltip title="列设置">
                <Button>
                    <SettingOutlined />
                    列设置
                </Button>
            </Tooltip>
        </Dropdown>
    );
};

export default ColumnSettings;