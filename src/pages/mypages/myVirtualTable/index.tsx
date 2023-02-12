import { Checkbox, Button, Popover } from 'antd';
import styles from './index.less';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import VirtualTable from '@/components/VirtualTable';

// service为模仿 服务端返回数据；具体数据你找后台；
const dataName = [
  '涨',
  '车',
  '轴',
  '走',
  '周',
  '凤',
  '胡',
  '晶',
  '京',
  '梅',
  '韦',
  '小',
  '字',
  '陈',
  '程',
  '测',
  '就',
  '当',
  '费',
  '飞',
  '矿',
  '况',
  '李',
  '刘',
  '成',
  '龙',
  '于',
  '巷',
  '港',
  '翔',
];
const serviceArr: any = [];
const service = (param: any) => {
  const { pageNow, pageSize } = param;
  const createData = (arr: any) => {
    const random = (number: any) => Math.floor(Math.random() * number).toFixed(0);
    const nameFn = () =>
      Array.from(new Array(+random(3) < 2 ? 2 : 3), () => dataName[+random(dataName.length)]).join(
        '',
      );
    const data = Array.from(new Array(pageSize), (x, i) => nameFn()).map((name, i) => ({
      name,
      checked: false,
      key: i,
      len: new Array(+random(20) + 1)
        .fill('')
        .map((v) => name)
        .join(','),
    }));
    arr.push(...data);
  };
  createData(serviceArr);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: serviceArr.slice(pageSize * (pageNow - 1), pageSize * pageNow),
        total: 300000,
      });
    }, 500);
  });
};
// =================================================================================
const colorChange = (t: any) => {
  return t;
  const colorList = ['#f00', '#0f0', '#00f', '#0ff', '#f60', '#f0f'];
  const random = +(Math.random() * +colorList.length - 1).toFixed(0);
  return (
    <span
      className={styles['animation_twinkle']}
      style={{
        color: colorList[random],
      }}
    >
      {t}
    </span>
  );
};
const MyVirtualTable = (props: any) => {
  // Usage
  const [columns, setColumns] = useState<any>([
    // 虚拟列表多选功能
    // {
    //   title: () => {
    //     return (
    //       <Checkbox
    //         // style={{ marginLeft: '6px' }}
    //         checked={
    //           rowSelection.selectedRowKeys.length > 0 &&
    //           rowSelection.selectedRowKeys.length == data.length
    //         }
    //         indeterminate={
    //           rowSelection?.selectedRowKeys.length < data?.length &&
    //           rowSelection?.selectedRowKeys.length > 0
    //         }
    //         onChange={(e) => {
    //           if (e.target.checked) {
    //             rowSelection.selectedRowKeys = data.map((item: any) => item.key);
    //           } else {
    //             rowSelection.selectedRowKeys = [];
    //           }
    //           console.log(rowSelection);
    //           rowSelection.onChange(rowSelection.selectedRowKeys);
    //         }}
    //       ></Checkbox>
    //     );
    //   },
    //   width: 40,
    //   align: 'center',
    //   render: (text: any, record: any, index: any) => {
    //     // console.log(
    //     //   '渲染',
    //     //   rowSelection.selectedRowKeys,
    //     //   record.key,
    //     //   rowSelection.selectedRowKeys.includes(record.key),
    //     // );
    //     return (
    //       <Checkbox
    //         style={{ marginLeft: '6px' }}
    //         checked={rowSelection.selectedRowKeys.includes(record.key)}
    //         // indeterminate={selectedRowKeys.includes(record.key)}
    //         onChange={(e) => {
    //           if (e.target.checked) {
    //             rowSelection.selectedRowKeys.push(record.key);
    //           } else {
    //             const i = rowSelection.selectedRowKeys.findIndex((v: any) => v === record.key);
    //             rowSelection.selectedRowKeys.splice(i, 1);
    //           }
    //           rowSelection.onChange(rowSelection.selectedRowKeys);
    //         }}
    //       ></Checkbox>
    //     );
    //   },
    // },
    {
      title: 'A',
      dataIndex: 'key',
      width: 150,
      render: (t: any) => colorChange(t),
      fixed: 'left',
    },
    { title: 'B', dataIndex: 'key', render: (t: any) => colorChange(t) },
    { title: 'C', dataIndex: 'key', render: (t: any) => colorChange(t) },
    { title: 'D', dataIndex: 'key', render: (t: any) => colorChange(t) },
    { title: 'E', dataIndex: 'key', width: 200, render: (t: any) => colorChange(t) },
    { title: 'F', dataIndex: 'key', width: 100, render: (t: any) => colorChange(t) },
    // { title: 'len', dataIndex: 'len', width: 400, render: (t: any) => colorChange(t) },
    {
      title: 'len',
      dataIndex: 'len',
      width: 150,
      render: (t: any) => {
        return <Button type="link">查看11111</Button>;
      },
      fixed: 'right',
    },
    {
      title: 'len',
      dataIndex: 'len',
      width: 150,
      render: (t: any) => {
        return <Button type="link">查看222222222</Button>;
      },
    },
  ]);
  const [data, setData] = useState<any>([]);
  // const data = Array.from({ length: 10 }, (_, key) => ({ key, checked: Math.random() > 0.5 }));
  // 表格多选框的配置
  // const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  // const rowSelection = {
  //   selectedRowKeys,
  //   // columnWidth: !flag.current ? '40px' : '0',
  //   hideSelectAll: false,
  //   onChange: (newSelectedRowKeys: React.Key[]) => {
  //     console.log(newSelectedRowKeys, 'newSelectedRowKeys');
  //     setSelectedRowKeys(_.cloneDeep(newSelectedRowKeys));
  //   },
  // };
  // --------------- 表格多选框的配置
  // 滚动加载功能
  const [loading, setLoading] = useState(false);
  const [lh__pagination, setLh__pagination] = useState({
    pageSize: 1000,
    pageNum: 1,
    total: 0,
  });
  const param = {
    pageNow: lh__pagination.pageNum,
    pageSize: lh__pagination.pageSize,
  };
  const getList = (lh__pagination: any) => {
    setLoading(true);
    service(param)
      .then(({ data: ds, total }: any) => {
        data.push(...ds);
        lh__pagination.total = total;
        setLh__pagination(_.cloneDeep(lh__pagination));
        setData(_.cloneDeep(data));
        // .....
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getList(lh__pagination);
  }, []);
  // scroll定位
  // const [lh__scrollIndex, setLh__scrollIndex] = useState(0);
  // const scrollPosition = () => {
  //   setLh__scrollIndex(+(Math.random() * data.length).toFixed(0));
  // };
  // ---------------
  // 配置表头展示
  // const PopoverContent = () => {
  //   const hiddenTitle = columns
  //     .filter((v: any) => _.isString(v.title))
  //     .map((item: any) => (!item.hidden && item.title) || '');
  //   const plainOptions = columns
  //     .filter((v: any) => _.isString(v.title))
  //     .map((item: any) => item.title);
  //   const onChange = (e: Array<any>) => {
  //     columns.forEach((item: any) => {
  //       if (!e.includes(item.title)) item.hidden = true;
  //       else item.hidden = false;
  //     });
  //     setColumns(_.cloneDeep([...columns]));
  //   };
  //   return (
  //     <>
  //       <Checkbox.Group
  //         className="flex-column"
  //         options={plainOptions}
  //         defaultValue={hiddenTitle}
  //         style={{ width: '100px' }}
  //         onChange={onChange}
  //       />
  //     </>
  //   );
  // };
  // ---------------
  // const marginRight10 = {
  //   marginRight: '10px',
  // };
  return (
    <>
      {/* <Button style={{ ...marginRight10 }} type="primary" onClick={() => scrollPosition()}>
        进行scroll随机定位
      </Button>
      <Popover placement="bottom" content={PopoverContent} trigger="click">
        <Button type="primary">对表头进行选择</Button>
      </Popover> */}
      <VirtualTable
        columns={columns}
        dataSource={data}
        rowId='key'
        // rowSelection={rowSelection}
        loading={loading}
        scroll={{ y: 300, x: '100vw' }}
        // lh__scrollIndex={lh__scrollIndex}
        lh__pagination={lh__pagination}
        lh__onScrollBottom={(pa: any) => {
          const pag = _.cloneDeep({ ...lh__pagination, ...pa });
          setLh__pagination(pag);
          getList(pag);
        }}
        rowSelection={{
          onChange: (_: Array<any>, selectedRows: Array<any>) => {
            console.log('xxxxxxxxxxxxxxxxxxxxxxxx',_, selectedRows)
            // setSelectedRows(selectedRows);
          },
        }}
      />
    </>
  );
};

export default MyVirtualTable;
