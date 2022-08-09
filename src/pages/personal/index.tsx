import styles from './index.less';

const personalIntroduction = () => {
  return (
    <div className={styles.personalIntroductionWrap}>
      <div className={styles.upperRightCorner}>
        <a href="./dashboard/analysis">体验系统</a>
        <a
          onClick={() => {
            window.open('https://github.com/Lzengp/ant-design-pro-complete');
          }}
        >
          GitHub
        </a>
      </div>
      <div className={styles.personalProfile}>
        你好！我是龙伟 关于我 我是一名生活在广州的软件开发者，目前从事前端产品研发工作。
      </div>
      <div className={styles.aboutThisSite}>
        关于本站 <br />
        记录自己，分享自己
      </div>
      <div className={styles.poweredByVercel}>Powered by Vercel</div>
    </div>
  );
};

export default personalIntroduction;
