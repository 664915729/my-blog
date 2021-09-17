---
title: Vue基础
author: CH
cover: https://z3.ax1x.com/2021/09/10/hvRppq.gif
date: 2021-9-12
isShowComments: true
categories:
- vue
tags:
- 前端
sticky: 1
---

::: tip
vuepress搭建的第一篇博客 :art:<br>
:::

<!-- more -->

## Vue.js
一套用于构建用户界面的**渐进式框架**，与其它大型框架不同的是，可以**自底向上**逐层应用。

Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统
例如：
```html
<div id="app">
  {{ message }}
</div>
```
```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```
```
Hello Vue!
```


1. 每个 Vue 应用都是通过用 `Vue` 函数创建一个新的 **Vue 实例**开始的
2. 数据和 DOM 已经被建立了关联，所有东西都是**响应式**的
3. 一个 Vue 应用会将其挂载到一个 DOM 元素上 (这个例子是 `#app`) 然后对其进行完全控制

## 模板语法

Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。在底层的实现上，Vue 将模板编译成**虚拟 DOM 渲染函数**，把 DOM 操作次数减到最少。

### 插值
##### 文本
数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：

```html
<span>Message: {{ msg }}</span>
```
绑定的数据对象上 `msg` property 发生了改变，插值处的内容都会更新。

通过使用 `v-once` 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。

```html
<span v-once>这个将不会改变: {{ msg }}</span>
```
##### 原始HTML

双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 `v-html` 指令：

```html
<p>{{ rawHtml }}</p>    <!-- 普通文本 -->
<p><span v-html="rawHtml"></span></p> <!-- 写入html代码 -->
```
##### 使用 JavaScript 表达式
对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持。
```html
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
```
### 指令
指令 (Directives) 是带有 `v-` 前缀的特殊 attribute（属性）

```html
<p v-if="seen">现在你看到我了</p>
```
这里，`v-if` 指令将根据表达式 `seen` 的值的真假来插入/移除 `<p>` 元素

##### 参数
一些指令能够接收一个“参数”，在指令名称之后以冒号表示
例如：

```html
<a v-bind:href="url">...</a>
```
在这里 `href` 是参数，告知 `v-bind` 指令将该元素的 `href` attribute 与表达式 `url` 的值绑定。

```html
<a v-on:click="doSomething">...</a>
```

`v-on` 指令，它用于监听 DOM 事件
##### 缩写

```html
<!-- v-bind缩写 -->
<a :href="url">...</a>
```
```html
<!-- v-on缩写 -->
<a @click="doSomething">...</a>
```
## Class 与 Style 绑定
操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是 attribute，所以我们可以用 `v-bind` 处理它们：只需要通过表达式计算出字符串结果即可。表达式结果的类型除了**字符串**之外，还可以是**对象**或**数组**。
### 绑定 HTML Class
##### 对象语法
例如下模板：

```html
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```
和如下 data：

```javascript
data: {
  isActive: true,
  hasError: false
}
```
结果渲染为：

```html
<div class="static active"></div>
```
当 `isActive` 或者 `hasError` 变化时，class 列表将相应地更新。例如，如果 `hasError` 的值为 `true`，class 列表将变为 `"static active text-danger"`。

当然绑定的数据对象可以是一个对象，渲染的结果和上面一样：

```html
<div v-bind:class="classObject"></div>
```

```js
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
```
##### 数组语法
我们可以把一个数组传给 `v-bind:class`，以应用一个 class 列表：

```html
<div v-bind:class="[activeClass, errorClass]"></div>
```

```js
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```
渲染为：

```html
<div class="active text-danger"></div>
```
### 绑定内联样式
##### 对象语法
`v-bind:style` 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。

```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

```javascript
data: {
  activeColor: 'red',
  fontSize: 30
}
```
直接绑定到一个**样式对象**通常更好，这会让模板更清晰：

```javascript
<div v-bind:style="styleObject"></div>
```

```javascript
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```
## 条件渲染
### `v-if`，`v-else-if`，`v-else`
`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。

```javascript
<h1 v-if="awesome">Vue is awesome!</h1>
```
也可以用 `v-else` 添加“else-if 块”和“else 块”：

```javascript
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else-if="msg1===“A">Vue is good!</h1>
<h1 v-else>Oh no 😢</h1>
```
### 在 `<template>` 元素上使用 `v-if` 条件渲染分组
因为 `v-if` 是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素呢？此时可以把一个 `<template>` 元素当做**不可见的包裹元素**，并在上面使用 `v-if`。最终的渲染结果将不包含 `<template>` 元素。

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```
### `v-if` vs `v-show`

- `v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
- `v-if` 也是**惰性的**：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
- `v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
- 如果需要非常频**繁地切换**，则使用 `v-show` 较好；如果在运行时条件**很少改变**，则使用 `v-if` 较好。

## 列表渲染
### 用 `v-for` 把一个数组对应为一组元素
我们可以用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 `items` 是**源数据数组**，而 `item` 则是被迭代的数组元素的**别名**。

```html
<ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>
```

```javascript
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```

结果：

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021022114161040.png)

在 `v-for` 块中，我们可以访问所有父作用域的 property。`v-for` 还支持一个可选的**第二个参数**，即当前项的**索引**。

```bash
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```

```javascript
var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```
结果：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210221142535640.png)

### 在 `v-for` 里使用对象
你也可以用 `v-for` 来遍历一个对象的 property。

```html
<ul id="v-for-object" class="demo">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>
```

```javascript
new Vue({
  el: '#v-for-object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
})
```
结果：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210221142851444.png)

你也可以提供**第二个参数**为 property 名称 (也就是**键名**)和**第三个参数**作为**索引**：

```html
<div v-for="(value, name, index) in object">
  {{ index }}. {{ name }}: {{ value }}
</div>
```
结果：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210221143314317.png)

### 在 `v-for` 里使用值范围
`v-for` 也可以接受整数。在这种情况下，它会把模板重复对应次数。

```html
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>
```
结果：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210221143830862.png)


### 在 `<template>` 上使用 `v-for`
类似于 `v-if`，你也可以利用带有 `v-for` 的 `<template>` 来循环渲染一段包含多个元素的内容。比如：

```html
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```
### `v-for` 与 `v-if` 一同使用
`v-for` 的优先级比 `v-if` 更高，这意味着 `v-if` 将分别重复运行于每个 `v-for` 循环中。

```html
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo }}
</li>
```
上面的代码将只渲染未完成的 todo。
## 事件处理
### 监听事件
用 `v-on` 指令**监听 DOM 事件**，并在触发时运行一些 JavaScript 代码。
示例：
```html
<div id="example-1">
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
```

```js
var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})
```
结果：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210221144740642.png)

### 事件处理方法
许多事件处理逻辑会更为复杂，因此 `v-on` 还可以接收一个需要调用的方法名称。
示例：

```html
<div id="example-2">
  <!-- `greet` 是在下面定义的方法名 -->
  <button v-on:click="greet">Greet</button>
</div>
```

```js
var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

// 也可以用 JavaScript 直接调用方法
example2.greet() // => 'Hello Vue.js!'
```
### 内联处理器中的方法
除了直接绑定到一个方法，也可以在内联 JavaScript 语句中调用方法：

```html
<div id="example-3">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</div>
```

```js
new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})
```

有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 `$event` 把它传入方法：

```html
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
```

```js
// ...
methods: {
  warn: function (message, event) {
    // 现在我们可以访问原生事件对象
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
```
### 事件修饰符
Vue.js 为 `v-on` 提供了事件修饰符。以半角句号 `.` 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。
例：

```html
<div @click="click1">
	<div @click.stop="click2">
		abc
	</div>
</div>	
```
`.stop`表明`click2`完成后会停下来，**不会执行**嵌套的父指令`click1`
事件修饰符有：

- `.stop`
- `.prevent`
- `.capture`
- `.self`
- `.once`
- `.passive`

```html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```
## 表单输入绑定
###  `v-model`
用 `v-model` 指令在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建**双向数据绑定**。它会根据控件类型**自动选取**正确的方法来更新元素。
`v-model` 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：

- text 和 textarea 元素使用 `value` property 和 `input` 事件
- checkbox 和 radio 使用 `checked` property 和 `change` 事件
- select 字段将 `value` 作为 prop 并将 `change` 作为事件
### 文本

```html
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210221160759407.png)
### 多行文本

```html
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<br>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210221160827153.png)
### 复选框
单个复选框，绑定到布尔值：

```html
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```
多个复选框，绑定到同一个数组：

```html
<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
<br>
<span>Checked names: {{ checkedNames }}</span>
```

```js
new Vue({
  el: '...',
  data: {
    checkedNames: []
  }
})
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210221160933439.png)
### 单选按钮

```html
<div id="example-4">
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>
</div>
```

```js
new Vue({
  el: '#example-4',
  data: {
    picked: ''
  }
})
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210221161008484.png)
### 选择框
单选时：
```html
<div id="example-5">
  <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>
```

```js
new Vue({
  el: '...',
  data: {
    selected: ''
  }
})
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210221162419727.png)
## 组件基础
### Vue 组件的示例
```js
// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
```
组件是可复用的 Vue 实例，且带有一个名字：在这个例子中是 `<button-counter>`。我们可以在一个通过 `new Vue` 创建的 Vue 根实例中，把这个组件作为自定义元素来使用：

```html
<div id="components-demo">
  <button-counter></button-counter>
</div>
```

```js
new Vue({ el: '#components-demo' })
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210221163813219.png)
### data 必须是一个函数
**一个组件的** `data` **选项必须是一个函数**，因此每个实例可以维护一份被返回对象的**独立的拷贝**：

```js
data: function () {
  return {
    count: 0
  }
}
```
### 组件的组织
通常一个应用会以一棵嵌套的组件树的形式来组织：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210221164838525.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0Njb29vSA==,size_16,color_FFFFFF,t_70)

为了能在模板中使用，这些组件必须先**注册**以便 Vue 能够识别。这里有两种组件的注册类型：**全局注册**和**局部注册**。

全局注册通过 `Vue.component` ：

```js
Vue.component('my-component-name', {
  // ... options ...
})
```
全局注册的组件可以用在其被注册之后的任何 (通过 `new Vue`) 新创建的 Vue 根实例，也包括其组件树中的所有子组件的模板中。
### 通过 Prop 向子组件传递数据
Prop 是你可以在组件上注册的一些自定义 attribute。当一个值传递给一个 prop attribute 的时候，它就变成了那个组件实例的一个 property。

如给组件传递一个标题，我们可以用一个 `props` 选项将其包含在该组件可接受的 prop 列表中：

```js
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
```
一个组件可以有**任意数量**的 prop，任何值都可传递给任何 prop。在组件实例中访问这个值，就像访问 `data` 中的值一样。

一个 prop 被注册之后，你就可以像这样把数据作为一个自定义 attribute 传递进来：

```html
<blog-post title="My journey with Vue"></blog-post>
<blog-post title="Blogging with Vue"></blog-post>
<blog-post title="Why Vue is so fun"></blog-post>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210221165902860.png)

然而在一个典型的应用中，你可能在 `data` 里有一个博文的**数组**：

```js
new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
  }
})
```
并想要为每篇博文渲染一个组件：

```html
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:title="post.title"
></blog-post>
```
如上所示，是用 `v-bind` 来动态传递 prop
### 组件的复用

```html
<div id="components-demo">
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button-counter></button-counter>
</div>
```
你可以将组件进行任意次数的复用，每个组件都会各自**独立**维护它的 `count`。因为你每用一次组件，就会有一个它的新**实例**被创建。
