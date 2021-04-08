# 布局

将可枚举的封装

## box

布局应当遵循容器和内容分开的原则，容器负责约束和装饰内容

将平面布局看成是一张网格，每个box都是一个containner，只有row和col两类，row是wrap，负责约束col，col是box，布局容器的最基本单位，只负责约束内容


```
<div class="row">
  <div class="col"><div>
<div>

<div class="row">
  <div class="col"><div>
  <div class="col"><div>
<div>
```



## row

row遵循flex盒模型，用于约束col

- ionic
```
.ion-justify-content-start
.ion-justify-content-end
.ion-justify-content-center
.ion-justify-content-around
.ion-justify-content-between
.ion-justify-content-evenly
.ion-align-items-start
.ion-align-items-end
.ion-align-items-center
.ion-align-items-baseline
.ion-align-items-stretch
```
- boostrap
```
.justify-content-star
.justify-content-center
```
- antd
```
justify="start"
align = "top"
```
- element
```
justify="start"
align = "top"
```
- bfs
```
justify="start"
align = "top"
```

## col

- bfs
```
flex="1"
```

## button

- ionic
```
fill="outline"
fill="clear"
fill="solid"

Expand="block"
Expand="full"
```

- bootstrap
```
.btn-outline

.block
```

## grid

## list

