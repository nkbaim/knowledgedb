// nav
module.exports = [{
		text: '首页',
		link: '/'
	},
	{
		text: 'Linux相关',
		link: '/linux/',
		items: [{
				text: 'Linux系统',
				items: [{
					text: 'Linux常用命令',
					link: '/linux/system/'
				}]
			},
			{
				text: "生信必备工具",
				items: [{
						text: 'Git常用命令',
						link: '/linux/git/'
					}, // 哈希链接是在你运行项目状态下，新增 markdown 文件自动生成的
					{
						text: 'Docker入门',
						link: '/linux/docker/'
					},
					{
						text: 'Conda指南',
						link: '/linux/conda/'
					},
					{
						text: 'Snakemake指南',
						link: '/linux/snakemake/'
					}
				]
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
				link: '/omics/proteomics/'
			}
		]
	},
	{
		text: '数据分析',
		link: '/datascience/',
		items: [{
				text: '生物信息分析',
				items: [{
					text: '基因通路富集分析',
					link: '/datascience/gsea/',
				}]
			},
			{
				text: '统计分析',
				items: [{
					text: '常见统计分析',
					link: '/datascience/stats/',
				}]
			}
		]
	},
	{
		text: 'R语言',
		link: '/r/',
		items: [{
				text: 'R Tips',
				link: '/r/tips/'
			},
			{
				text: 'R基础绘图',
				link: '/r/plot/'
			},
			{
				text: 'ggplot2绘图',
				link: '/r/ggplot2/'
			},
			{
				text: 'Shiny APP',
				link: '/r/shiny/'
			},
			{
				text: 'R包开发',
				link: '/r/package/'
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
