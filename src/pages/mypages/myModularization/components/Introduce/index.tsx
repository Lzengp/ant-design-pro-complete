import { useEffect } from 'react';
import Typed from 'typed.js';

// 自我介绍
const TypedJs = () => {
  useEffect(() => {
    const options = {
      strings: [
        '<h2>我叫Lzengp，欢迎来到我的网站</h2><p>我是一名前端程序员，喜欢研究技术</p><p>这里有超级多好玩的小Demo，可以直接查看源码</p>',
      ],
      typeSpeed: 100,
    };
    const typedJs = new Typed('#introduce', options);
    return () => {
      typedJs?.destroy();
    };
  }, []);

  return (
    <div>
      <div id="introduce"></div>
    </div>
  );
};

export default TypedJs;
