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

## 4. CSS 图片处理技巧
<h3> 该部分可在自建项目(CSS经典)中查看示例 </h3>

### 1. Object-fit : cover
这个属性可以使图片填充整个区域，同时保持高度比例。这个技巧在处理个人资料图片时尤其有用。

### 2. Transform: scaleX(-1) / scaleY(-1)
使用`transform: scaleX(-1)`可以水平翻转图像，`scaleY(-1)`则用于垂直方向。

### 3. Object-fit : contain
用于设置图片所需尺寸，仍使整个图片保持原高宽比例

### 4. Filter: drop-shadow
此属性用于为透明背景的图片添加阴影。

例如：`filter: drop-shadow(30px 10px 4px #3a3a3a)`;

* 30px表示目标的相对位置向右，负值则向左移动阴影。
* 10px表示目标的相对位置向上，负值则向底部移动阴影。
* 4px代表目标的模糊因子。
* #3a3a3a代表目标的颜色。

### 5. Filter: opacity
此属性根据百分比增加图像的透明度。