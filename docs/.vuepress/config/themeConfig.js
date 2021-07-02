const nav = require('./nav.js');

// 主题配置

module.exports = {
  nav,
  sidebar: {
  	mode: 'structuring',
  	collapsable: true,
  },
  logo: 'http://cdn.duomics.cn/logo-small.png',
  sidebarDepth: 2,
  rightMenuBar: true,
  pageButton: true,
  repo: 'nkbaim/knowledgedb', // Github仓库地址
  docsDir: 'docs', // .md文件放在了docs目录下
  editLinks: true, // 启用编辑链接
  editLinkText: '编辑',
  category: true,
  tag: true,
  archive: true,
  categoryText: '随笔', 
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)

  // bodyBgImg: [
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
  // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
  // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0 ~ 1.0, 默认0.5

  // titleBadge: false, // 文章标题前的图标是否显示，默认true
  // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
  //   '图标地址1',
  //   '图标地址2'
  // ],
  // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

  // updateBar: { // 最近更新栏
  //   showToArticle: true, // 显示到文章页底部，默认true
  //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
  // },
  // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
  // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
  // pageButton: false, // 是否显示快捷翻页按钮，默认true

  author: {
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    name: 'Du, Yang', // 必需
    link: 'https://github.com/nkbaim', // 可选的
  },
  blogger: {
    // 博主信息，显示在首页侧边栏
    avatar: 'https://cdn.jsdelivr.net/gh/nkbaim/pics//blog/5b03301c8930e1589a7e5e996853c5cd.jpeg',
    name: 'Du, Yang',
    slogan: '生物信息解码',
  },
  social: {
    // 社交图标，显示于博主信息栏和页脚栏
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: 'icon-youjian',
        title: '发邮件',
        link: 'mailto:dyang627@qq.com',
      },
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/nkbaim',
      },
    ],
  },
  footer: {
	// 页脚信息
	createYear: 2021, // 博客创建年份
	copyrightInfo:
	  'Du, Yang | <a href="https://github.com/nkbaim/" target="_blank">MIT License</a>', // 博客版权信息，支持a标签
  },

}
