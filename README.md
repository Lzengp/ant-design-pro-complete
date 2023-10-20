# 不语笔记0.0.1版本

- 支持快捷新增、修改、删除笔记，使用了富文本编辑器，笔记样式丰富
- 支持全局关键字搜索
- 支持评论
  
##  [访问地址](https://lzengp.top)

# 项目介绍

来自 [Ant Design Pro](https://pro.ant.design) 官网的脚手架， 并且包括所有区块， 样式十分丰富，满足日常常见场景

## 项目搭建与启动

```bash
git clone https://github.com/Lzengp/ant-design-pro-complete.git

npm install

npm start
```

## 与原项目[Ant Design Pro](https://github.com/ant-design/ant-design-pro)的区别

没啥区别，就替换了下 logo(logo 来自 iconfont, 作者是[Vizovanver](https://www.iconfont.cn/user/detail?spm=a313x.7781069.0.d214f71f6&uid=969416&nid=7Y5iPgJrZJmk))，去掉了.husky 文件（这个文件其实就一个 git hooks, 本地测试的时候会导致提交的时候报错 **Git: [STARTED] Preparing...**，所以秉着解决问题的源头，干脆删掉），然后新增了一些小 demo 和工具类

## 此项目的目的

- 方便自己找样式

- 记录笔记

- 练手项目

## 其他

- 此项目目前部署在[Vercel](https://vercel.com/)上(个人网站首推的远程服务器)，然后绑定在自己的域名下

- [使用 Vercel 发布自己的 GitHub 项目到远程服务器上](https://zhuanlan.zhihu.com/p/549887095)

- 项目里面的数据使用的是 Apifox 软件 mock 的, 数据加载稍微有点慢

- 如果只是本地开发, 可以使用本地 mock 的数据: 全局搜索 **https://<span></span>mock.apifox.cn/m1/1401620-0-default** , 然后直接删除这个前缀就可以使用本地 mock 了

项目体验地址: [https://www.lzengp.top](https://www.lzengp.top)

### 2023年7月更新

- 此项目已经部署到腾讯云

## 引入第三方组件库

### [使用 wangEditor 富文本编辑器](https://www.wangeditor.com/v5/for-frame.html#react)

### [使用 iconFont](https://www.iconfont.cn/)

- 菜单图标使用 iconFont

使用线上 CDN

defaultSettings 里面的 iconfontUrl 添加 Symbol 里面的链接//at.alicdn.com/t/c/font_3269449_pxfeihmehnf.js

这个链接的位置在 资源管理->我的项目->我发起的项目-Symbol 里面，然后直接复制图片的代码 icon-webyemiansheji， 放在 icon 里面就可以了

使用本地

修改了 app.tsx 文件中 ProLayout 的 menuDataRender 属性，支持自定义图标；参考 [mywebpage](./src/components/MenuIcon/index.tsx) 菜单 icon 的使用

- 页面中使用 iconFont [代码参考](./src/pages/mypages/myModularization/index.tsx)

使用线上 CDN

使用 ant-design/icons 提供的 createFromIconfontCN，可以连接到 iconFont，具体参考页面中[MyIcon](./src/components/MyIcon/index.tsx) 的使用，线上版本可以更改 icon 颜色

使用本地

直接下载 svg 资源，然后通过 img.src 导入图片，缺点：不可以修改颜色

使用 antd 的 icon，把 svg 资源放在 component 里面，可以改变颜色
