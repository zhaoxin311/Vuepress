---
title: 实用的JavaScript代码片段

tags:
  - JavaScript
---
## 1. 单行If-Else语句
常规if-else语句：
```javascript
if (10 < 100) {
  console.log("True");
} else {
  console.log("False");
}
```
转换成更简洁的三元运算符：
```javascript
10 <100 ? console.log（“True”） : console.log（“False”）
```
上述两种写法 结果输出均为 `True`

## 2. 合并数组
扩展运算符(...)可以将一个数组的元素扩展为另一个数组：
```javascript
const numbers =  [10, 20, 30, 40];
const allNumbers = [...numbers,50, 60, 70, 80];
console.log(allNumbers);
```
输出：[10, 20, 30, 40, 50, 60, 70, 80]

## 3. 从数组中删除重复项
数组去重的九种方法之一：
```javascript
const numbers = [1,2,3,4,2,6,1,4,3,3];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);
```
输出：[1, 2, 3, 4, 6]

## 4. 将任何内容转换为布尔值
false，0，""，null，undefined，NaN，和false总是假 。其他一切都为真。

在JavaScript中，你可以将任何值转换为true和false与一元运算符（!）：
```javascript
const bool1 = !0;        // true
const bool2 = !100;      // false
const bool3 = !"test";   // false
const bool4 = !!"test";  // true
console.log(bool1, bool2, bool3, bool4);
```

## 5. 交换两个变量而不使用第三个变量
```javascript
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y);
```
输出：2 1

## 6. 将数字转换为字符串
```javascript
const num = 1 + '';
console.log(typeof num, num);
```
输出：string 1

## 7. 将字符串转换为数字
```javascript
const numStr = '124';
const num = +numStr;
console.log(typeof num, num);
```
输出：number 124

## 8. 将变量嵌入到字符串
通过使用`反引号`将字符串括起来并将变量插入之间，将变量整齐地嵌入到字符串之间`${}`：
```javascript
const age = 42;
const sentence = `I'm ${age} years old!`;
console.log(sentence);
```
输出：I'm 42 years old！

## 9. 将字符串拆分为数组
要将字符串拆分为数组，可以使用扩展运算符(...)：
```javascript
const str = 'Test';
const strAsArr = [...str];
console.log(strAsArr);
```
输出：['T', 'e', 's', 't']

## 10. 可选运算符
可选的链接运算符(?.)允许读取位于链接对象链深处的属性的值，而不必明确验证连中的每个引用是否有效。

假设 你有一个data对象，并且想要安全的访问data.test.value。首先，要检查：

* data 是否被定义
* data.test 是否被定义

在data.test.value，你可以调用之前，因为，你显然无法读取undefined属性。
```javascript
const data = {test:{value:1}}
if(data && data.test){
  console.log(data.test.value);
}
```
输出：1

使用可选链接的方法，编写如上代码：
```javascript
const value = data?.test?.value;
console.log(value)
```
输出：1

你还可以安全地尝试访问不存在的属性，而不会出现问题：
```javascript
console.log(data?.this?.does?.not?.exist?.for?.sure)
```
输出：undefined

## 11. 提高JSON的可读性
JSON.stringify() JSON.stringify(value[, replacer [, space]]) 方法将一个 JavaScript 对象或值转换为 JSON 字符串，如果指定了一个 replacer 函数，则可以选择性地替换值，或者指定的 replacer 是数组，则可选择性地仅包含数组指定的属性。
```javascript
const readableJSON = JSON.stringify({ a: 'A', b: 'B' }, null, '\t');
console.log(readableJSON);
```
输出：
```javascript
{
      "a": "A",
      "b": "B"
}
```
## 12. 处理数组关键字
* forEach
* filter
* map
* reduce
* find
* some
* every

## 13.求和，最小值和最大值

利用reduce方法快速的找到基本的数学运算。

```
const array = [5,4,3,5,42,4];

array.reduce((a,b) => a+b )  //求和

array.reduce((a,b) => a>b?a:b)  //最大值

array.reduce((a,b) => a<b?a:b)  //最小值
```

## 14. 排序字符串，数字或对象数组

内置方法sort()he reverse()来排序字符串，如果是数字或者对象数组？

字符串数组排序

```
const stringArr = ["Joe", "Kapil", "Steve", "Musk"]

stringArr.sort();  // 输出 ["Joe", "Kapil", "Musk", "Steve"]

stringArr.reverse();  // 输出 ["Steve", "Musk", "Kapil", "Joe"]
```

数字数组排序

```
const array  = [40, 100, 1, 5, 25, 10];

array.sort((a,b) => a-b); // 输出 [1, 5, 10, 25, 40, 100]

array.sort((a,b) => b-a); // 输出 [100, 40, 25, 10, 5, 1]
```















