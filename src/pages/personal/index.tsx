import { GithubOutlined } from '@ant-design/icons';
import styles from './index.less';

const personalIntroduction = () => {
  const html = '<h2 style="text-align: start;"><strong>关于我</strong></h2><p style="text-align: start;">你好，谢谢进入我的网站</p><p style="text-align: start;">我叫龙伟，很高兴在这里与你相遇</p><p style="text-align: start;">在网络上，我大部分名字都叫 Lzengp</p><p style="text-align: start;"><br /></p><h2 style="text-align: start;"><strong>自我介绍</strong></h2><p style="text-align: start;">来自湖南衡阳，2019年毕业于湖南科技大学网络工程专业，干过一段时间全栈，后面主要从事前端开发，主要的技术栈就是React</p><p style="text-align: start;">自我评价：对所有事务保持着好奇心，但是大多数时候都是三分热度，时而乐观时而感慨，情随事迁</p><p style="text-align: start;"><br /></p><h2 style="text-align: start;"><strong>生活</strong></h2><p>敲敲代码，上上班；</p><p>玩玩游戏，打打球；</p><p>搓搓麻将，逛逛街；</p><p>人生得意，金樽空对月。</p><p><br /></p></div>';
  return (
    <div className={styles.personalIntroductionWrap}>
      <div className={styles.upperRightCorner}>
        <a href="./dashboard/analysis">体验系统</a>
        <a
          onClick={() => {
            window.open('https://github.com/Lzengp/ant-design-pro-complete');
          }}
        >
          <GithubOutlined style={{ marginRight: '5px' }} />GitHub
        </a>
      </div>
      <div className={styles.aboutThisSite}>
        <div style={{
          position: 'absolute',
          right: '25%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#c1c1c1'
        }}>
          <img src='./my.jpg' style={{ width: '80%' }} />
          <span>我与地主家的儿子</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} className={styles.mainContent} />
      </div>
      <div className={styles.poweredByVercel}>Powered by Vercel</div>
    </div >
  );
};

export default personalIntroduction;
