module.exports = {
    title: 'Mliybs.Onebot',
    description: 'Mliybs.OneBot的文档网站',
    themeConfig: {
        nav: [
            {
                text: 'Mliybs.OneBot',
                items: [
                    { text: '首页', link: '/' },
                    { text: '快速开始', link: '/start' }
                ]
            },
            {
                text: 'Rx.NET',
                items: [
                    { text: '操作符', link: '/rx/operators' }
                ]
            }
        ],
        sidebar: {
            '/rx/': [
                ['', 'Rx.NET'],
                ['operators', '操作符']
            ],
            '/': [
                ['', '首页'],
                ['start', '快速开始'],
                ['/rx/', 'Rx.NET']
            ]
        }
    },
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    }
}