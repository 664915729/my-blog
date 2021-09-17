---
title: forEach()
author: CH
cover: https://z3.ax1x.com/2021/09/10/hve4wq.jpg
date: 2021-9-15
categories:
- JavaScript
tags:
- JavaScript
- 前端
---

## forEach()
forEach()中function回调有三个参数
第一个参数：遍历的数组**内容**，
第二个参数：对应的数组**索引**，
第三个参数：**数组本身**

```javascript
let arr=[1,2,3];
arr.forEach(function(value,index,array){
	console.log(value,index,array);
});
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/4240cad301b04b639d9a9dc750938ab4.png)

```javascript
let arr=[{name:'a'},{name:'b'}];
arr.forEach(item => {
	console.log(item.name)
});
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/18aa0a3ffead4ba3920f664549250f8b.png)
