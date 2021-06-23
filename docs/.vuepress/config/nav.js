// nav
module.exports = [{
		text: '首页',
		link: '/'
	},
	{
		text: 'Linux相关',
		link: '/linux/',
		items: [{
				text: 'Git常用命令',
				link: '/linux/git/'
			}, // 哈希链接是在你运行项目状态下，新增 markdown 文件自动生成的
			{
				text: 'Docker入门',
				link: '/linux/docker/'
			},
			{
				text: 'Nginx',
				link: '/linux/nginx/'
			},
			{
				text: 'Shell',
				link: '/linux/shell/'
			},
			{
				text: '系统管理',
				link: '/linux/systems/'
			}
		]
	},
	{
		text: 'Web技术',
		link: '/web/',
		items: [{
				text: 'Mysql',
				link: '/web/database/mysql/'
			},
			{
				text: 'Java',
				link: '/web/java/spring/'
			}
		]
	},
	{
		text: '组学之美',
		link: '/omics/',
		items: [{
				text: '基因组',
				link: '/omics/genomics/'
			},
			{
				text: '转录组',
				link: '/omics/transcriptomics/'
			},
			{
				text: '蛋白组',
				link: '/omics/proteomics'
			}
		]
	},
	{
		text: '友链',
		link: '/links/'
	},
	{
		text: '关于我',
		link: '/aboutme/'
	},
]
