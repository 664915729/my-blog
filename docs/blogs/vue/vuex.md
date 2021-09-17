---
title: VueX
date: 2021-9-17
isShowComments: true
cover: https://z3.ax1x.com/2021/09/10/hveokV.jpg
categories:
 - vue
tags:
 - 前端
---


## 简介
`VueX`是`Vue`项目开发的**状态管理工具**。具有`VueX`的`Vue`项目中，只需要把这些值定义在`VueX`中，即可在整个`Vue`项目的组件中使用。
## 安装
1.在项目文件目录下用`npm`安装`Vuex`
```shell
npm install vuex --save
```
2.然后在项目根目录下新建store文件夹，文件夹内创建index.js

![在这里插入图片描述](https://img-blog.csdnimg.cn/0b7dda7adcd34a849cf41ce4d6679b62.png)

3.初始化新建index.js里的内容

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state:{
        //存放的键值对就是所要管理的状态
        name:'hello'
    }
})

export default store
```
4.在main.js中引入，把store挂载到Vue项目实例中

```javascript
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'   // 1

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,                      // 2
  components: { App },
  template: '<App/>'
})
```
## 使用
模板中p标签调用

```html
<p>{{$store.state.name}}</p>
```
js调用

```javascript
console.log(this.$store.state.name);
```
`this.$set()`**设置** / **更改**state中的值，`this.$delete()`**删除**

```javascript
this.$set(this.$store.state, 'msg', 'morning') // 设置
this.$set(this.$store.state, 'msg', 'evening') // 更改
this.$delete(this.$store.state, 'msg') // 删除
```
