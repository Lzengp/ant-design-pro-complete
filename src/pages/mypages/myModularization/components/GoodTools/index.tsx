import { Col, Row } from 'antd';
import Bg from '@/assets/bg.png';

const GoodTools = () => {
  const arrList = [
    {
      url: 'https://madewithreactjs.com/',
      title: '不错的React插件市场',
    },
    {
      url: 'https://animate.style/',
      title: 'Animate.css动画库',
    },
    {
      url: `https://picsum.photos/300/150/?image=${Math.ceil(Math.random() * 100)}`,
      title: '随机图片',
    },
    {
      url: 'https://joeschmoe.io/api/v1/random',
      title: '随机头像',
    },
  ];

  return (
    <div  style={{ backgroundImage: `url(${Bg})`}}>
      <h2>好用的代码工具网址</h2>
      <Row gutter={24}>
        {arrList.map((item, index) => {
          return (
            <Col span={6}>
              <a
                key={index}
                onClick={() => {
                  window.open(item.url);
                }}
              >
                {item.title}
              </a>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default GoodTools;
