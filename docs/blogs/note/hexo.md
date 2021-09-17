---
title: Hexo+Gitee博客部署
date: 2021-9-16
author: CH
cover: https://z3.ax1x.com/2021/09/10/hvu7ff.jpg
isShowComments: true
categories:
- hexo
tags:
- hexo
---


## 环境搭建

-  安装[Node.js](http://nodejs.cn/).
-  安装[Git](http://git-scm.com/)


## Hexo初始化
安装git之后，右键可进入git bash 界面

自己创建一个目录，该目录里用git bash界面依次执行下面命令：
```shell
npm install hexo-cli -g
npm install hexo --save
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/e9ab4ae18b174e5ca334ae19e456a97d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ2Nvb29I,size_20,color_FFFFFF,t_70,g_se,x_16)

## 建站
在空文件夹中运行以下命令，生成Hexo运行所需要的文件

```shell
hexo init
# 选择安装hexo的插件
npm install hexo-deployer-git --save # hexo通过git发布（必装）

npm install hexo-generator-index --save # 索引生成器
npm install hexo-generator-archive --save # 归档生成器
npm install hexo-generator-category --save # 分类生成器
npm install hexo-generator-tag --save # 标签生成器
npm install hexo-server --save # 本地服务
npm install hexo-renderer-marked@0.2.7--save # 渲染器
npm install hexo-renderer-stylus@0.3.0 --save # 渲染器
```
新建完成后，指定文件夹的目录如下：
```
.
├── .deploy       #需要部署的文件
├── node_modules  #Hexo插件
├── public        #生成的静态网页文件
├── scaffolds     #模板
├── source        #博客正文和其他源文件等都应该放在这里
|   ├── _drafts   #草稿
|   └── _posts    #文章
├── themes        #主题
├── _config.yml   #全局配置文件
└── package.json

```

之后本地执行以下命令，可在 http://localhost:4000 访问Hexo页面

```shell
hexo s
```

## gitee创建仓库
![在这里插入图片描述](https://img-blog.csdnimg.cn/f3e6a9d841aa40f8a093c01133a2079a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ2Nvb29I,size_19,color_FFFFFF,t_70,g_se,x_16)
获取项目地址
![在这里插入图片描述](https://img-blog.csdnimg.cn/502caa398fbf4b5680fae7fdc6ffbdbd.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ2Nvb29I,size_16,color_FFFFFF,t_70,g_se,x_16)

## 发布
修改Hexo配置文件_config.yml（注：`repo:`，`branch:`后一定要有一个空格）
![在这里插入图片描述](https://img-blog.csdnimg.cn/3caf96053d8f420183e7c921e707c641.png)
部署博客

```shell
hexo clean # 清除缓存 网页正常情况下可以忽略此条命令
hexo g # 生成静态网页
hexo d # 开始部署
```

开启gitee pages服务

![在这里插入图片描述](https://img-blog.csdnimg.cn/54c1b06c0cd34285ba976963427be4d7.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ2Nvb29I,size_20,color_FFFFFF,t_70,g_se,x_16)

之后即可进入网站地址访问博客

![在这里插入图片描述](https://img-blog.csdnimg.cn/1c9a989b94e44b84b527b13a8bb670a2.png)



## 不显示样式问题
修改_config.yml中的`url`和`root`

修改站点url为你码云中的地址

![在这里插入图片描述](https://img-blog.csdnimg.cn/12ea69b4444e4725989f8a0d095e377b.png)
root修改为你的仓库名

![在这里插入图片描述](https://img-blog.csdnimg.cn/5f7ec6aa1c8b4edc864346953c7b61ad.png)

例如

![在这里插入图片描述](https://img-blog.csdnimg.cn/d54fc9de478a467cb71607b8b29221f1.png)
再一次部署


```shell
hexo g --d  //一键部署
```

在Gitee Pages服务中点击更新，重新部署Gitee Pages即可
![在这里插入图片描述](https://img-blog.csdnimg.cn/1cc7f89d732b4c7da9cfb398368b8bca.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ2Nvb29I,size_20,color_FFFFFF,t_70,g_se,x_16)

- 补充


```shell
# 第一次上传
git init
git add ./
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/用户名/仓库名.git
git push -u origin master
# 之后上传
git add ./
git commit -m "xxx"
git push
```
