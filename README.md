# 项目介绍

来自 [Ant Design Pro](https://pro.ant.design) 官网的脚手架， 并且包括所有区块， 样式十分丰富，满足日常常见场景

## 项目搭建与启动

```bash
git clone https://github.com/Lzengp/ant-design-pro-complete.git

npm install

npm start
```

## 与原项目[Ant Design Pro](https://github.com/ant-design/ant-design-pro)的区别

没啥区别，就替换了下logo，去掉了.husky文件（这个文件其实就一个git hooks, 本地测试的时候会导致提交的时候报错 **Git: [STARTED] Preparing...**，所以秉着解决问题的源头，干脆删掉）， 然后新增了一些小demo和工具类

## 此项目的目的

- 方便自己找样式

- 记录笔记

- 练手项目

## 其他

-  此项目目前部署在[Vercel](https://vercel.com/)上(个人网站首推的远程服务器)，然后绑定在自己的域名下

-  [使用Vercel发布自己的GitHub项目到远程服务器上](https://zhuanlan.zhihu.com/p/549887095)

-  项目里面的数据使用的是Apifox软件mock的, 数据加载稍微有点慢

-  如果只是本地开发, 可以使用本地mock的数据: 全局搜索 **https://<span></span>mock.apifox.cn/m1/1401620-0-default** , 然后直接删除这个前缀就可以使用本地mock了

项目体验地址: [https://www.lzengp.top](https://www.lzengp.top)
