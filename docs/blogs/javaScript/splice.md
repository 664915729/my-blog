---
title: splice()添加替换删除
date: 2021-9-6
categories:
- JavaScript
tags:
- JavaScript
- 前端
---

## 参数

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330184433150.png)

## 删除

```javascript
var arr = ['a','b','c'];

arr.splice(2,1);

//下标从2开始，删除1个，arr变为['a','b']
```

## 替换

```javascript
var arr = ['a','b','c'];

arr.splice(1,1,'d');

//下标从1开始，替换1个，arr变为['a','d','c']
```

## 添加

```javascript
var arr = ['a','b','c'];

arr.splice(1,0,'d');

 // 下标1开始添加'd',arr变为['a','d','b','c'] 
```
