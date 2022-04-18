---
title: lodash
tags:
  - 前端工具库
---

## lodash 安装

 通过 npm 安装：

 ```
 npm i -g npm
 npm i --save lodash
 ```

## 数组

### _.chunk

  > _.chunk(array,[size=1])

  > 将数组array拆分成多个长度为size的区块，每个区块组成一个新数组。如果array无法分成全部等长的的区块，则最后剩余的元素组成一个区块。

  <strong>参数：</strong>

  1. array (array): 需要处理的数组。
  2. [size=1] (number): 每个数组区块的长度

  <strong>返回值：</strong>

  (array)：返回一个包含拆分区块的新数组(相当于一个二维数组)

  <strong>例子：</strong>

  ```javascript
    _.chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
    _.chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]
  ```

### _.commpact

  > _.commpact(array)

  > 创建一个新的数组，包含原数组中所有的非假值元素，假值元素：null、""、undefined、0、false、NaN。

  <strong>参数：</strong>

  1. array(Array) : 待处理的数组。

  <strong>返回值：</strong>

  1. (Array):返回过滤掉假值的新数组。

  <strong>例子：</strong>

  ```javascript
  _.commpact([0,false,1,3,'',undefined]);  // [1,3]

  ```

### _.concat

  > _.concat(array,[values])

  > 创建一个新数组，将array与任何数组或者值连接在一起。

  <strong>参数：</strong>

  1. array(Array) : 被连接的数组。
  2. [value] : 连接的值

  <strong>返回值：</strong>

  1. (Array):返回连接后的新数组

  <strong>例子：</strong>

  ```javascript
    var array = [1];
    var other = _.cancat(array, 2, [3], [[4]]);
    console.log(other);  //[1, 2, 3, [4]]
    console.log(array); //[1]
  ```

### _.difference

  > _.difference(array,[values])

  > 通过检查将第一个数组与第二个数组中重复的值，再第一个数组中删除掉返回一个新数组。
  > 不像`_.pullAll`,这个方法会返回一个新数组。

  <strong>参数：</strong>

  1. array(Array) : 要检查的数组。
  2. [value](...Array) : 排除的值

  <strong>返回值：</strong>

  1. (array) : 返回一个过滤后的新数组。

  2.

  <strong>例子：</strong>

  ```javascript
    _.difference([3,2,4,5,1],[1,4,7]) //[3,2,5]
  ```

### _.differenceBy

### _.differenceByWith

  >

  >

  <strong>参数：</strong>

  1.
  2.

  <strong>返回值：</strong>

  1.
  2.

  <strong>例子：</strong>

  ```javascript


  ```
