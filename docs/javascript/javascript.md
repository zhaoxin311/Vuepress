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
