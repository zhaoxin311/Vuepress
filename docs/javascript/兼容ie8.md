---
title: 前端开发兼容ie8
tags:
  - JavaScript
---
### 前端开发兼容ie8 最常遇到的问题记录
1. 不支持`console.log`
```javascript
var funcs = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml',
    'error', 'exception', 'group', 'groupCollapsed', 'groupEnd',
    'info', 'log', 'markTimeline', 'profile', 'profileEnd',
    'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'
];
for (var i = 0, l = funcs.length; i < l; i++) {
    var func = funcs[i];
    if (!console[func])
        console[func] = function () {};
}
```
2. 控制台报错：SCRIPT1010：缺少标识符
 报错是由于一些js文件使用了js中保留的关键字，如：default，delete等。在IE8中，default就是保留的关键字。

 default比较好解决，可以使用obj['default']带引号的写法，delete暂时没有遇到。

3. IE8不支持甘特图：dhtmlxgantt.js
4. placeholder 无效 
5. 控制台报错：对象不支持“addEventListener”属性或方法
6. 对象不支持“atob”属性或方法，对象不支持“btoa”属性或方法
7. CSS border-radius失效。
8. CSS box-shadow失效
9. CSS linear-gradient渐变色失效
10. CSS calc() 失效
11. bootstrap 布局失效

[笔记参考网站](https://juejin.cn/post/6882668718879408141)：https://juejin.cn/post/6882668718879408141