const headConf = require('./config/headConf');
const pluginsConf = require('./config/pluginsConf');
const navConf = require('./config/navConf')


module.exports = {
    base: '/vuepress/',
    title: 'CoooH',
    head: headConf,
    description: 'CH的个人博客',
    plugins: pluginsConf,
    markdown: {
        lineNumbers: true, //代码显示行号
    },
    theme: 'reco',
    themeConfig: {
        author: 'CH',
        type: 'blog',
        authorAvatar: '/assets/img/tx.jpg', //信息栏头像
        logo: '/assets/img/cloud.png', //logo
        nav: navConf, //导航栏
        blogConfig: {
            category: {
                location: 3, // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 4, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认文案 “标签”
            }
        }, // 博客配置
        sidebar: {
            '/blogs/vue/': [
                '',
                'vue-base',
                'computed',
                'axios-base',
                'cusInstruct',
                'vuex',
                'module',
            ],
            '/blogs/javaScript/': [
                '',
                'splice',
                'export',
                'forEach',
                'arrow',
            ],
            '/blogs/note/': [
                '',
                'hexo',
                'git-base',
            ],
        }, //侧边栏
        subSidebar: 'auto', //自动子侧边栏
        friendLink: [
            {
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                email: 'recoluan@qq.com',
                link: 'https://www.recoluan.com'
            },
        ], //友链
        lastUpdated: '更新时间', //最后更新时间
        codeTheme: 'tomorrow', //代码主题
        mode: 'light', // 亮暗模式 auto-dark-light
        modePicker: true, // 亮暗模式调节按钮
        smooth: "true", //平滑滚动
        valineConfig: {
            showComment:false,
            appId: 'OqLE7jscEQ5UPuo2fnaqdbh4-gzGzoHsz',
            appKey: 'G5qvrApar9qgA3YcyHBnj1GK',
            recordIP: true,//是否记录评论者IP
            placeholder: '填写邮箱地址可以及时收到回复噢...',
            visitor: true,
        },// 评论设置


        //博客加密
        // keyPage: {
        //     keys: ['202cb962ac59075b964b07152d234b70'], //123
        //     color: '#42b983', // 登录页动画球的颜色
        //     lineColor: '#42b983' // 登录页动画线的颜色
        // },
    },
    // markdown: {
        // markdown-it-anchor 的选项
        // anchor: { permalink: false },
        // markdown-it-toc 的选项
        // toc: { includeLevel: [1, 2] },
        // extendMarkdown: md => {
            // 使用更多的 markdown-it 插件
            // md.use(require('markdown-it-xxx'))
        // }
    // }
}
