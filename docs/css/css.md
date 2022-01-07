---
title: 实用的CSS代码片段

tags:
  - CSS
---
## 1. 使用css写下三角形图标
```css
.triangle{
  width: 0;
  height: 0;
  border: 20px solid  transparent;
  border-top-color: red;
}
```
输出形如下：

![triangle](../css/images/triangle.png)

## 2. 最常用的两种水平垂直居中方法
```css
/* 方法一：定位 */
div {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}
/* 方法二：父级控制子集居中 */
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

## 3. contenteditable
`html`中大部分标签都是不可以编辑的，但是添加了`contenteditable`属性之后，标签会变成可编辑状态。
```css
<div contenteditable="true"></div>
```
不过通过这个属性把标签变为可编辑状态后只有`input`事件，没有`change`事件。也不能像表单一样通过`maxlength`控制最大长度。



