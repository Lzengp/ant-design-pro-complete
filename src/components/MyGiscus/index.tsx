import Giscus from '@giscus/react';

export default function MyGiscus() {
  return (
    <Giscus
      id="comments"
      repo="lzengp/lw-giscus"
      repoId="R_kgDOKiuSXA"
      category="Announcements"
      categoryId="DIC_kwDOKiuSXM4CaSZF"
      mapping="url"
      strict='1'
      term="Welcome to lw-giscus Discussions!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="light"
      lang="zh-CN"
      loading="lazy"
    />
  );
}