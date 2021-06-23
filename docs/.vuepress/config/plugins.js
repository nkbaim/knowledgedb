// 插件配置
module.exports = [
	//'@vuepress/nprogress', // 切换进度条
	[
		'vuepress-plugin-zooming', // 放大图片
		{
			selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
			options: {
				bgColor: 'rgba(0,0,0,0.6)',
			},
		},
	],
	[
		'one-click-copy', // 复制
		{
			copySelector: [
				'div[class*="language-"] pre',
				'div[class*="aside-code"] aside',
			],
			copyMessage: '复制成功',
			duration: 1000,
			showInMobile: false,
		},
	],
	[
		'@vuepress/last-updated', // "上次更新"时间格式
		{
			transformer: (timestamp, lang) => {
				const dayjs = require('dayjs') // https://day.js.org/
				return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
			},
		},
	]
]
