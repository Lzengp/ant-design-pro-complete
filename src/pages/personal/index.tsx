import styles from './index.less';

const personalIntroduction = () => {
    return (
        <div className={styles.personalIntroductionWrap}>
            <div className={styles.personalProfile}>
                你好！我是龙伟
                关于我
                我是一名生活在东莞的软件开发者，目前从事前端产品研发工作。

                我热爱设计，无论是在我的作品还是我的生活空间，我都会努力让它们拥有最佳的体验。另外，我喜欢浏览并收藏那些别出心裁的网站，它们总能在我构思作品时激发我的灵感。

                一直以来，我都专注于前端技术，并且坚持在做我喜欢的事情：构建令人赏心悦目的产品！

                在这里，我会记录我的想法和创意，随便逛逛吧。
            </div>
            <div className={styles.aboutThisSite}>
                关于本站

                为什么建立这个网站
                我热爱创作，很多时候，在我完成一个作品时，我希望把我在创作时的想法和经历记录下来，因为它们对我来说弥足珍贵。当人们对我的作品感兴趣时，我可以向他们分享这些作品背后的故事。很长一段时间里，我都在计划打造一个网站来展示我和我的作品。
            </div>

        </div>
    )
}

export default personalIntroduction;