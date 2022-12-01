import { MyIcon } from '@/components/MyIcon';
import mywebpage from '@/assets/icons/mywebpage.svg';
import Icon, { CloseOutlined, RedoOutlined } from '@ant-design/icons';
import { ReactComponent as IconMyWebPage } from '@/assets/icons/mywebpage.svg';
import styles from './index.less';
import { Button } from 'antd';
import { useEffect, useState } from 'react';

const l = 42, // 滑块边长
  r = 10, // 滑块半径
  w = 310, // canvas宽度
  h = 155, // canvas高度
  PI = Math.PI;
const L = l + r * 2; // 滑块实际边长
// 拖拽验证码
const DragVerificationCode = () => {
  const [randomNumber, setRandomNumber] = useState<number>();

  const [x, setX] = useState<number>();

  // 判断是否为手机浏览器
  const isMobile = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
  );

  useEffect(() => {
    // const l = 42, // 滑块边长
    //     r = 10, // 滑块半径
    //     w = 310, // canvas宽度
    //     h = 155, // canvas高度
    //     PI = Math.PI;
    // const L = l + r * 2; // 滑块实际边长
    initDOM();
  }, []);

  function initCanvas() {
    const l = 42, // 滑块边长
      r = 10, // 滑块半径
      w = 310, // canvas宽度
      h = 155, // canvas高度
      PI = Math.PI;
    const ll = l + r * 2; // 滑块实际边长
  }

  // const isMobile = () => {
  //     return navigator.userAgent.match(
  //         /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  //     );
  // }

  // 指定区域内的随机数
  function getRandomNumberByRange(start: number, end: number) {
    return Math.round(Math.random() * (end - start) + start);
  }

  // 创建元素
  function createElement(tagName) {
    return document.createElement(tagName);
  }

  // 创建画布
  function createCanvas(width, height) {
    const canvas = createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }

  // 获取随机图片
  function getRandomImg() {
    // 这个网站可以生成随机图片
    return 'https://picsum.photos/300/150/?image=' + getRandomNumberByRange(0, 100);
  }

  function createImg(onload) {
    const img = document.createElement('img');
    img.crossOrigin = 'Anonymous';
    img.onload = onload;
    img.onerror = () => {
      img.src = getRandomImg();
    };
    img.src = getRandomImg();
    return img;
  }

  // 添加样式
  function addClass(tag, className) {
    tag.classList.add(className);
  }

  // 移除样式
  function removeClass(tag, className) {
    tag.classList.remove(className);
  }

  // 绘制拼图空白区域
  function draw(ctx, operation, x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + l / 2, y);
    ctx.arc(x + l / 2, y - r + 2, r, 0, 2 * PI);
    ctx.lineTo(x + l / 2, y);
    ctx.lineTo(x + l, y);
    ctx.lineTo(x + l, y + l / 2);
    ctx.arc(x + l + r - 2, y + l / 2, r, 0, 2 * PI);
    ctx.lineTo(x + l, y + l / 2);
    ctx.lineTo(x + l, y + l);
    ctx.lineTo(x, y + l);
    ctx.lineTo(x, y);
    ctx.fillStyle = '#fff';
    ctx[operation]();
    ctx.beginPath();
    ctx.arc(x, y + l / 2, r, 1.5 * PI, 0.5 * PI);
    ctx.globalCompositeOperation = 'xor';
    ctx.fill();
  }

  // 求和
  function sum(x, y) {
    return x + y;
  }

  // 求平方
  function square(x) {
    return x * x;
  }

  const [canvasCtx, setCanvasCtx] = useState<any>();
  const [blockCtx, setBlockCtx] = useState<any>();
  const [block, setBlock] = useState<any>();
  const [img, setImg] = useState<any>();

  const initDOM = () => {
    const canvas = createCanvas(w, h); // 画布
    const block = canvas.cloneNode(true); // 滑块
    const sliderContainer = createElement('div');
    const refreshIcon = createElement('div');
    const sliderMask = createElement('div');
    const slider = createElement('div');
    const sliderIcon = createElement('span');
    const text = createElement('span');
    block.className = 'block';
    sliderContainer.className = 'sliderContainer';
    refreshIcon.className = 'refreshIcon';
    sliderMask.className = 'sliderMask';
    slider.className = 'slider';
    sliderIcon.className = 'sliderIcon';
    text.innerHTML = '向右滑动滑块填充拼图';
    text.className = 'sliderText';
    const el = document.getElementById('captcha');
    if (el) {
      el.appendChild(canvas);
      el.appendChild(refreshIcon);
      el.appendChild(block);
      slider.appendChild(sliderIcon);
      sliderMask.appendChild(slider);
      sliderContainer.appendChild(sliderMask);
      sliderContainer.appendChild(text);
      el.appendChild(sliderContainer);
    }
    setCanvasCtx(canvas.getContext('2d'));
    setBlockCtx(canvas.getContext('2d'));
    setBlock(block);

    // Object.assign(this, {
    //     canvas,
    //     block,
    //     sliderContainer,
    //     refreshIcon,
    //     slider,
    //     sliderMask,
    //     sliderIcon,
    //     text,
    //     canvasCtx: canvas.getContext("2d"),
    //     blockCtx: block.getContext("2d"),
    // });
  };

  function initImg() {
    const img = createImg(() => {
      canvasCtx.drawImage(img, 0, 0, w, h);
      blockCtx.drawImage(img, 0, 0, w, h);
      const y = this.y - r * 2 + 2;
      const ImageData = blockCtx.getImageData(this.x, y, L, L);
      block.width = L;
      blockCtx.putImageData(ImageData, 0, y);
    });
    setImg(img);
    // this.img = img;
  }

  return (
    <div className={styles.dragVerificationCodeWrap}>
      <Button
        type="primary"
        onClick={() => {
          // console.log(getRandomImg())
          setRandomNumber(getRandomNumberByRange(0, 100));
        }}
      >
        获取图片
      </Button>
      https://picsum.photos/300/150/?image={randomNumber}
      <img src={`https://picsum.photos/300/150/?image=${randomNumber}`} />
      <div className={styles.container}>
        <div className={styles.captchaBox}>
          <div className={styles.tipContent}>拖动下方滑块完成拼图</div>
          {/* <img id="close" src="/views/default/images/guanbi.png" alt="" /> */}
          <CloseOutlined className={styles.close} />
          <div id="captcha" className={styles.captcha}></div>
          <RedoOutlined className={styles.refresh} />
          {/* <img
                        id="refresh"
                        title="刷新"
                        src="/views/default/images/shuaxin.png"
                        alt="刷新"
                    /> */}
        </div>
      </div>
    </div>
  );
};

export default DragVerificationCode;
