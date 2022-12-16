import ProCardCode from '@/components/ProCardCode';
import { Button, Typography } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useState } from 'react';
import Typed from 'typed.js';
import { code } from './code';

// 打字机的方式显示一段话
const TypedJs = () => {
  const [textValue, setTextValue] = useState<string>();
  const [textTypedJs, setTextTypedJs] = useState<any>();

  const show = () => {
    textTypedJs?.destroy();
    if (textValue) {
      const options = {
        strings: [textValue],
        typeSpeed: 100,
      };
      const textTypedJs = new Typed('#demonstration', options);
      setTextTypedJs(textTypedJs);
    }
  };

  return (
    <>
      <h3>打字机样式展示文本</h3>
      <div>
        <TextArea
          placeholder="请输入"
          onChange={(e) => {
            setTextValue(e.target.value);
          }}
        />
        <Button type="primary" onClick={show} style={{ margin: '20px 0' }}>
          展示效果
        </Button>
        <div id="demonstration"></div>
      </div>
      <Typography.Link
        onClick={() => {
          window.open('https://mattboldt.com/demos/typed-js/');
        }}
      >
        typed-js官网
      </Typography.Link>
      <ProCardCode code={code} />
    </>
  );
};

export default TypedJs;
