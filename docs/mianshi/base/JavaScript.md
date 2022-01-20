---
title: 基础篇--JavaScript
tags:
  - 前端面试指南
---
### 1.内置类型
JS有七种内置类型，分为两大类：基本类型和对象
* 基本类型：`null` `undefined` `boolean` `number` `string` `symbol`
* 对象是引用类型，在使用时会遇到浅拷贝 深拷贝的问题。
### 2. Typeof
typeof 对于基本类型，除null外都可以显示正确的类型。对于对象，除函数都会显示正确的类型。
```
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof b // b 没有声明，但是还会显示 undefined

typeof [] // 'object'
typeof {} // 'object'
typeof console.log // 'function'
```






