export const code = `
~~~tsx
import { Button, Col, Form, Input, InputNumber, Row } from 'antd';
import { debounce } from 'lodash';
import { useState } from 'react';
import { request } from 'umi';

const StockQuery = () => {
  const [stockDetails, setStockDetails] = useState<any>();

  const onFinish = (values: any) => {
    const { marketValue, profitAndLoss, position, sellingPrice, sellingNumber } = values;
    // 卖出手数 和 持仓相等，卖后成本就是当前成本价
    if (position == sellingNumber * 100) {
      const res = (marketValue / position).toFixed(2);
      setCostAfterSale(res);
      return;
    }
    // 输入盈亏：计算公式1：卖后成本 = (市值 - (卖价 * 卖出手数) + 盈亏) / (持仓 - (卖出手数 * 100))
    const calProfitAndLoss = profitAndLoss < 0 ? Math.abs(profitAndLoss) : -profitAndLoss;
    const res = (
      (marketValue - sellingPrice * sellingNumber * 100 + calProfitAndLoss) /
      (position - sellingNumber * 100)
    ).toFixed(2);
    setCostAfterSale(res);
  };

  const [costAfterSale, setCostAfterSale] = useState<string>('');

  const FieldList = [
    { name: 'marketValue', label: '市值', props: { min: 0 } },
    { name: 'profitAndLoss', label: '盈亏', props: {} },
    { name: 'position', label: '持仓', props: { min: 0, addonAfter: '股' } },
    { name: 'sellingPrice', label: '预期卖价', props: { min: 0 } },
    { name: 'sellingNumber', label: '卖出手数', props: { min: 0, addonAfter: '手' } },
  ];

  // 通过股票代码查询股票详情
  const onChange = (e: any) => {
    const methodUrl = 'http://61.push2his.eastmoney.com/api/qt/stock/kline/get?secid=1.e.target.value&ut=fa5fd1943c7b386f172d6893dbfba10b&fields1=f1%2Cf2%2Cf3%2Cf4%2Cf5%2Cf6&fields2=f51%2Cf52%2Cf53%2Cf54%2Cf55%2Cf56%2Cf57%2Cf58%2Cf59%2Cf60%2Cf61&klt=101&fqt=0&end=20500101&lmt=1&_=1633085585421';
    request(methodUrl).then((res: any) => {
      if (res?.data) {
        const detalis = res?.data.klines[0].split(',');
        setStockDetails({
          ...res?.data,
          date: detalis[0], // 日期
          currentPrice: detalis[2], // 当前价格
          ceilingPrice: detalis[3], // 当天最高价格
          floorPrice: detalis[4], // 当天最低价格
          increase: detalis[8], // 涨幅
        });
      } else {
        setStockDetails(null);
      }
    });
  };

  const stockDetailsFieldsList = [
    { name: 'date', label: '股票日期' },
    { name: 'name', label: '股票名称' },
    { name: 'currentPrice', label: '当前价格', addonBefore: '￥' },
    { name: 'increase', label: '涨幅', addonAfter: '%' },
  ];

  return (
    <>
      <h3>计算股票成本价格公式</h3>
      <Form onFinish={onFinish}>
        <Row gutter={24}>
          {FieldList.map((item) => {
            return (
              <Col span={8}>
                <Form.Item name={item.name} label={item.label} rules={[{ required: true }]}>
                  <InputNumber
                    style={{ width: '200px' }}
                    {...item.props}
                    addonAfter={item.props.addonAfter || '元'}
                    placeholder={'请输入item.label'}
                  />
                </Form.Item>
              </Col>
            );
          })}
        </Row>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                计算
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <h2 style={{ fontWeight: 600 }}> 卖后成本：{costAfterSale}</h2>
      <div style={{ borderTop: '2px solid #cbcccd', paddingBottom: '10px' }} />
      <h3>股票查询详情</h3>
      <span>股票编码：</span>
      <Input
        placeholder="请输入股票编码"
        style={{ width: '200px', marginTop: '20px' }}
        onChange={debounce(onChange, 500)}
        onPressEnter={onChange}
      />
      {stockDetails && (
        <div>
          {stockDetailsFieldsList.map((item) => {
            return (
              <div style={{ paddingTop: '20px' }}>
                {item.label}：
                <span
                  style={{
                    fontSize: '22px',
                    fontWeight: 600,
                    color:
                      item.name == 'increase'
                        ? stockDetails[item.name].indexOf('-') > -1
                          ? '#093'
                          : '#d20'
                        : '#000',
                  }}
                >
                  {(item.addonBefore || '') + stockDetails[item.name] + (item.addonAfter || '')}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default StockQuery;

~~~
`;
