---
title: git基础用法
date: 2021-9-6
isShowComments: true
categories:
- git
tags:
- git
---

## 仓库基本操作

```shell
# 在当前目录新建一个Git代码库
git init                        

# 新建一个目录，将其初始化为Git代码库
git init <project-name>         

# clone git仓库
git clone <git-hub-url>  

# [高阶用法] clone git仓库并且制定分支
git clone <url> -b <branch>     
```
## 修改用户信息

```shell
# 配置信息列表
git config --list         

# 设置用户名
git config --global user.name "John Doe"   

# 设置邮箱
git config --global user.email johndoe@example.com  
```

## 操作一次完整提交流程
当文件修改时，需要把本地仓库提交到远端仓库上面，一次完整提交路径： 工作区 --> 缓存区 --> 本地仓库区 --> 远端仓库

```shell
vi readme.md # 修改readme文件，文件在工作区
# vi进入文书编辑器后，按 i, o, a 等字进入输入模式
# 按esc，退出输入模式，切换到命令模式
# 输入 :wq 保存离开

git add readme.md # 文件进入缓存区，缓存区的文件可以被checkout移除到工作区

git add . # git add -A(-A包括删除文件)

git commit -m "提交信息"  # 文件进入提交分支，但还是在本地

git commit -a -m "提交信息" # -m参数是输入提交信息的，-a 参数是把还没有执行add命令的修改一起提交

git push origin master # 提交分支 push 到远端分支  
```
## 设置不同的仓库源

```shell
# 查看帮助
git remote --help                   

# 查看不同源
git remote  

# 添加不同地址的源，并取一个别名
git remote add [name] [url]    

# 删除一个源
git remote remove [name]       
```

## 创建分支

```shell
# 1.列出所有分支

git branch -a

# 2.创建test分支         

git branch test

# 3.切换到test分支:            

git checkout test

# 4.添加add修改:

git add .

# 5.添加commit注释

git commit -m "第一次提交代码"

# 6.提交到服务器

git push origin test 
```
