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
            '/': [
                ['', '首页'],
                ['start', '快速开始'],
                ['/rx/', 'Rx.NET']
            ],
            '/v11/':[
                ['', 'V11'],
                ['start', '快速开始']
            ],
            '/rx/': [
                ['', 'Rx.NET'],
                ['operators', '操作符']
            ]
        }
    },
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    }
}