---
title: computed和watch
date: 2021-9-6
isShowComments: true
categories:
- vue
tags:
- 前端
---

## 计算属性computed

::: tip
1、支持缓存，只有依赖数据发生改变，才会重新进行计算

2、不支持异步，当computed内有异步操作时无效，无法监听数据的变化

3、computed 属性值会默认走缓存，计算属性是基于它们的响应式依赖进行缓存的，也就是基于data中声明过或者父组件传递的props中的数据通过计算得到的值

4、如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用computed

5、如果computed属性属性值是函数，那么默认会走get方法；函数的返回值就是属性的属性值；在computed中的，属性都有一个get和一个set方法，当数据变化时，调用set方法。
:::

```javascript
data() {
	return {
		firstName: "chen",
		lastName: "hao"
	}
},
computed: {
	// 计算属性的默认getter
	// fullName: function() {
	//     return this.firstName + this.lastName
	// },

	// 计算属性的getter和setter
	fullName: {
		//fullName依赖改变时触发
		get: function() {
			return this.firstName + " " + this.lastName
		},
		//fullName本身改变时触发
		set: function(value) {
			console.log(value);
			var arr = value.split(" "); 
			this.firstName = arr[0];
			this.lastName = arr[1];
		}
	}
},
```

1、set：通过set的方法，设置一个值（value）来改变fullName相关联的值，引起fullName重新的计算，相应的页面上fullName也会发生改变成新的内容。

2、还需要注意的是，并不是触发了setter也就会触发getter，他们两个是相互独立的。我们这里修改了fullName会触发getter是因为setter函数里有改变firstName 和 lastName 值的代码。

## 侦听属性watch

::: tip
1、不支持缓存，数据变，直接会触发相应的操作；

2、watch支持异步；

3、监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值；

4、当一个属性发生变化时，需要执行对应的操作；一对多；

5、监听数据必须是data中声明过或者父组件传递过来的props中的数据，当数据变化时，触发其他操作，函数有两个参数：
　　
immediate：组件加载立即触发回调函数执行， 　　

deep: 深度监听，为了发现对象内部值的变化，复杂类型的数据时使用，例如数组中的对象内容的改变，注意监听数组的变动不需要这么做。注意：deep无法监听到数组的变动和对象的新增，参考vue数组变异,只有以响应式的方式触发才会被监听到。

6、当需要在数据变化时执行异步或开销较大的操作时，一般用watch属性。
:::

```javascript
watch: {
	firstName: function(newVal, oldVal) {
		console.log('new', newVal, 'old', oldVal);
	},
}
```
