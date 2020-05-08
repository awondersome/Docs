# css

层级样式表，style是html里的一个属性

## 概念

### 优先级

!important > 行内样式 > #id > .class > 元素/伪类 > *

### 继承

子元素继承父元素的属性，通常是font的继承

## 单位

* px

    绝对长度

* em

    字体相对长度，参考父的font-size

* rem

    字体相对长度，参考根的font-size

* vw

    视口相对长度，宽度的1%

* vh

    视口相对长度，高度的1%

## 选择器

style独立，不局限于行内样式

### 伪类

* :not()

    所有非选中的元素

### 属性

#### 布局

* flex

  * justify-content

  * align-items

#### 定位

* position

  * absolute

  * relative

  * fixed

* transform

  * translate

### @import

导入，和link区别在于html加载完才被加载