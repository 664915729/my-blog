---
title: 自定义命令
author: CH
date: 2021-9-5
isShowComments: true
categories:
 - vue
tags:
 - 前端
---


## 简单使用
除了核心功能默认内置的指令 (`v-model` 和 `v-show`)，Vue 也允许注册自定义指令。对普通 DOM 元素进行底层操作。

注册一个**全局自定义指令** `v-focus`：当被绑定的元素插入到 DOM 中时聚焦元素
```javascript
Vue.directive('focus', {
  inserted: function (el) {
	el.focus()
  }
})
```
如果想注册**局部指令**，组件中也接受一个 `directives` 的选项：

```javascript
directives: {
  focus: {
    inserted: function (el) {
      el.focus()
    }
  }
}
```

然后你可以在模板中任何元素上使用新的 `v-focus`，如下：

```html
<input v-focus>
```

## 钩子函数

### 指令定义对象
指令定义对象opt，包含了5个钩子函数

```javascript
Vue.directive('demo', Opt)

let Opt = {
    bind:function(el,binding,vnode){ },
    inserted:function(el,binding,vnode){ },
    update:function(el,binding,vnode){ },
    componentUpdated:function(el,binding,vnode){ },
    unbind:function(el,binding,vnode){ },
}
```

### 钩子函数
`bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。

`inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。

`update`：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新。

`componentUpdated`：指令所在组件的 VNode 及其子 VNode 全部更新后调用。

`unbind`：只调用一次，指令与元素解绑时调用。

### 钩子函数参数

![在这里插入图片描述](https://img-blog.csdnimg.cn/330fb7197689457596c48d69f9180987.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0Njb29vSA==,size_16,color_FFFFFF,t_70)


## 实现按下enter后，光标自动跳转下一个输入框

```javascript
Vue.directive('enterNextInput', {
    inserted: function (el) {
        el.addEventListener("keypress",function(e){
            e = e || window.event;
            let charcode = typeof e.charCode == 'number' ? e.charCode : e.keyCode;
            if(charcode === 13){
                let dom = document.getElementsByTagName("input")
                for (let i = 0; i < dom.length; i++) {
                    if (dom[i] ===document.activeElement) {
                        if (i===dom.length) {
                            return
                        }
                        dom[i+1].focus()
                        return
                    }
                }
            }
        });
    }
});
```

