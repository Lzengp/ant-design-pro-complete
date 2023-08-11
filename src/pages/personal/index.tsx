import { GithubOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import styles from './index.less';
import Typed from 'typed.js';
import LuminousFont from './components/LuminousFont';
import { isMobileDevice } from '../utils';

const html =
  '<h2 style="text-align: start;"><strong>关于我</strong></h2><p style="text-align: start;">你好，谢谢进入我的网站</p><p style="text-align: start;">我叫龙伟，很高兴在这里与你相遇</p><p style="text-align: start;">在网络上，我大部分名字都叫 Lzengp</p><p style="text-align: start;"><br /></p><h2 style="text-align: start;"><strong>自我介绍</strong></h2><p style="text-align: start;">来自湖南衡阳，2019年毕业于湖南科技大学网络工程专业，干过一段时间全栈，后面主要从事前端开发，目前在广州工作，主要的技术栈就是React</p><p style="text-align: start;">自我评价：对所有事务保持着好奇心，但是大多数时候都是三分热度，时而乐观时而感慨，情随事迁</p><p style="text-align: start;">联系方式：17680326925(微信同号)</p><p style="text-align: start;"><br /></p><h2 style="text-align: start;"><strong>生活</strong></h2><p>敲敲代码，上上班；</p><p>玩玩游戏，打打球；</p><p>搓搓麻将，逛逛街；</p><p>人生得意，金樽空对月。</p><p><br /></p>生活，未完待续......</div>';

const personalIntroduction = () => {

  useEffect(() => {
    const options = {
      strings: [html],
      typeSpeed: 30,
    };
    const typedJs = new Typed('#introduce', options);
    return () => {
      typedJs?.destroy();
    };
  }, []);

  return (
    <div className={styles.personalIntroductionWrap}>
      <div className={styles.upperRightCorner}>
        <a target="_blank" href="#/myArticle">体验系统</a>
        <a
          onClick={() => {
            window.open('https://github.com/Lzengp');
          }}
        >
          <GithubOutlined style={{ marginRight: '5px' }} />
          GitHub
        </a>
      </div>
      <div className={styles.aboutThisSite}>
        <div className={styles.myPicture} style={isMobileDevice() ? { width: '100%' } : { alignItems: 'center' }} >
          <img src="./my.jpg" style={{ width: isMobileDevice() ? '50%' : '35%' }} />
          <span className={styles.imgText}>三人行必有我师焉</span>
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: html }} className={styles.mainContent} /> */}
        <div id="introduce" className={styles.mainContent}></div>
      </div>
      {/* <div className={styles.poweredByVercel}>Powered by Vercel</div> */}
      <LuminousFont />
    </div>
  );
};

export default personalIntroduction;
