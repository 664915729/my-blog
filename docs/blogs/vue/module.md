---
title: 组件通信
date: 2021-9-17
isShowComments: true
cover: https://z3.ax1x.com/2021/09/10/hvehmn.jpg
categories:
- vue
tags:
- 前端
---

## ref
**父=>子**

1 父组件使用子组件

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210611151335842.png)

2 父组件修改子组件变量

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210611155532437.png)

使用子组件函数

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210611155747752.png)


## Props + $emit( )
**父=>子**

1 传入变量msg

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210611164358180.png)

2 子组件props接收

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210611164459550.png)

**子=>父**

1

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210612002048969.png)

定义自定义事件`changeMessage`，并携带值`'Bye'`

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210612002209950.png)

2 父组件中监听子组件自定义事件`changeMessage`
子组件携带的值，即`'Bye'`带入到`$event`中，并复制给`message`

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210612002331882.png)



## $parent + $children

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210612001813108.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021061200184647.png)

