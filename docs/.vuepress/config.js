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
                text: 'V11',
                items: [
                    { text: 'V11首页', link: '/v11/' },
                    { text: '快速开始', link: '/v11/start' }
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
            '/v11/': [
                ['', 'V11首页'],
                ['start', '快速开始'],
                ['helloworld', 'Hello World'],
                ['send', '主动发送消息'],
                ['receive', '处理收到消息'],
                ['message', '消息链']
            ],
            '/rx/': [
                ['', 'Rx.NET'],
                ['operators', '操作符']
            ],
            '/': [
                ['', '首页'],
                ['start', '快速开始'],
                ['/v11/', 'V11'],
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