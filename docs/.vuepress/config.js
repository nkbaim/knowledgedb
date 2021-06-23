const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
	theme: 'vdoing', // 使用主题插件 vuepress-theme-vdoing
	title: 'Knowledgedb', // 网站的标题，它将显示在导航栏（navbar）上
	description: '不积硅步无以至千里', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
	base: '/pkdb/',
	markdown: {
	  lineNumbers: true, // 代码行号
	},
	
	head,
	plugins,
	themeConfig,
}






