---
title: export default 和 export
date: 2021-9-6
categories:
- JavaScript
tags:
- JavaScript
- 前端
---

## export default

export default 只能导出一个默认模块，这个模块可以匿名，例如：

```javascript
// test.js
export default {
    name: 'zs',
    age: 20
}
```

```javascript
// test.js
var info = {
    name: 'zs',
    age: 20
}
export default info
```
import引入：

```javascript
import info from './test.js'
```
## export

```javascript
//demo1.js
export const str = 'hello world'

export function f(a){
    return a+1
}
```
import引入：

```javascript
//demo2.js
import { str, f } from 'demo1'
```
