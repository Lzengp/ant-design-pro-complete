export const code = `
~~~tsx
/*
 * @Description:
 * @Author: longwei
 * @Date: 2022-09-30 16:28:42
 * @LastEditors: longwei
 * @LastEditTime: 2022-09-30 17:33:08
 */
import ReactToPrint from 'react-to-print';
import Barcode from 'jsbarcode-react';
import { useRef, useState } from 'react';
import ProCard from '@ant-design/pro-card';
import CodeBlock from '@/components/CodeBlock';
import { code } from './code';
import { Button, Input, message } from 'antd';

// 打印，条形码
const ReactToPrintPage = () => {
  const element = useRef<any>();
  const [value, setValue] = useState<string>('');
  const [barcodeValue, setBarcodeValue] = useState<string>('');

  return (
    <>
      <h3>使用jsbarcode-react 和 react-to-print 完成生成条形码和打印功能</h3>
      <div style={{ display: 'flex' }}>
        <Input
          value={value}
          placeholder="请输入"
          style={{ width: '300px', marginRight: '20px' }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Button
          type="primary"
          onClick={() => {
            var reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g');
            if (!reg.test(value)) {
              setBarcodeValue(value);
            } else {
              message.error('包含汉字不能生成条形码');
            }
          }}
        >
          生成条形码
        </Button>
        <ReactToPrint
          trigger={() => (
            <Button style={{ marginLeft: '20px' }} disabled={!barcodeValue}>
              打印条形码
            </Button>
          )}
          content={() => element.current}
        />
      </div>
      {barcodeValue && <Barcode value={barcodeValue} />}
      <div style={{ display: 'none' }}>
        <div ref={element}>{barcodeValue && <Barcode value={barcodeValue} />}</div>
      </div>
      <h3>调用第三方pdf.js完成预览pdf功能和打印</h3>
      <Button
        type="primary"
        onClick={() => {
          window.open('https://mozilla.github.io/pdf.js/web/viewer.html?file=');
        }}
      >
        打印PDF
      </Button>

      <ProCard title="代码" headerBordered collapsible defaultCollapsed>
        <pre>
          <CodeBlock children={code} />
        </pre>
      </ProCard>
    </>
  );
};

export default ReactToPrintPage;

~~~
`;
