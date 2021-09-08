const moment = require('moment');//日期处理类库
moment.locale('zh-cn')

module.exports=[
    [
        "dynamic-title",
        {
            showIcon: "/assets/img/favicon.ico",
            showText: "欢迎回来~",
            hideIcon: "/assets/img/favicon3.ico",
            hideText: "快回来...",
            recoverTime: 2000
        }
    ],//标签页更换效果
    [
        '@vuepress/last-updated',
        {
            transformer: (timestamp, lang) => {
                return moment(timestamp).format('LLLL')
            }
        }
    ],//最后更新时间
    [
        "@vuepress-reco/vuepress-plugin-kan-ban-niang",
        {
            theme: ['blackCat'],//['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
            clean: true,//隐藏所有按钮
            // messages:  {
            //     welcome: '欢迎',
            //     home: '心里的花，我想要带你回家。',
            //     theme: '好吧，希望你能喜欢我的其他小伙伴。',
            //     close: '你知道我喜欢吃什么吗？痴痴地望着你。'
            // }
        }
    ],//看板娘
    [
        'meting',
        {
            meting: {
                server: "tencent",//歌单的平台、我这里是QQ音乐的平台
                type: "playlist",//资源类型（播放列表、单曲、专辑等）"song" | "album" | "artist" | "playlist"
                mid: "8150195910", //链接后面的id
                //https://i.y.qq.com/n2/m/share/details/taoge.html?id=8150195910&hosteuin=
            },// 不配置该项的话不会出现全局播放器
            aplayer: {
                order:'random',//初始顺序 list-random
                lrcType: 0,//lrc 歌词解析模式  0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url
                autoplay: true,//开启自动播放
                theme:'#b7daff',//主题颜色
                mini:true,//迷你模式
                volume:0.5,//播放器的音量
            }
        }
    ],//另一个音乐播放器
    ['vuepress-plugin-code-copy'],//一键复制代码
    ['reading-progress'],//阅读进度条


    // [
    //     "ribbon",
    //     {
    //         size: 50, // 彩带的宽度，默认为 90
    //         opacity: 0.2, // 彩带的不透明度，默认为 0.3
    //         zIndex: -1 // 彩带的 z-index 属性，默认值为 -1
    //     }
    // ],//背景彩带

    // [
    //     '@vuepress-reco/vuepress-plugin-bgm-player',
    //     {
    //         audios: [
    //             {
    //                 name: '过',
    //                 artist: '林俊杰,王嘉尔',
    //                 url: '/bgm/guo.mp3',
    //                 cover: '/bgm/guo.png'
    //             },
    //         ],
    //         position:{
    //             left: '10px',
    //             bottom: '10px',
    //             'z-index': '999999'
    //         },
    //         autoShrink:false,//是否默认缩小
    //         shrinkMode:'mini',//mini | float PC端可以指定缩小时缩为哪种模式
    //         floatPosition:'left',//left | right
    //         floatStyle:{
    //             bottom: '200px',
    //             'z-index': '999999'
    //         },
    //     }
    // ],//音乐播放器

    // [
    //     '@vuepress/medium-zoom',
    //     {
    //         selector: 'img',//img.className->指定类缩放
    //     }
    // ],//图片缩放
]
