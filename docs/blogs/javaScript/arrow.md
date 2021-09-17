---
title: 箭头函数
author: CH
date: 2021-9-15
cover: https://z3.ax1x.com/2021/09/10/hveokV.jpg
categories:
- JavaScript
tags:
- JavaScript
- 前端
---

## 箭头函数

```javascript
// 当只有一个参数时，圆括可省略
(singleParam) => { statements }
singleParam => { statements }
// 没有参数的函数应该写成一对圆括号
() => { statements }
```

箭头函数不会创建自己的`this`,它只会从自己的作用域链的上一层**继承**`this`。因此，在下面的代码中，传递给`setInterval`的函数内的`this`与封闭函数中的`this`值相同：
```javascript
this.a = 0;
setInterval(() => {
	this.a++;
}, 1000);
```
