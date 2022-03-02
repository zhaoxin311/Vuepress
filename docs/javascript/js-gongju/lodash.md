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

 ### _.difference

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