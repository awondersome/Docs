# [map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)

map是键值对的集合，应该和数组一类，map是数组的升级版，比array相比可以自定义index

```
var a = new Array('a', 'b', 'c')
var b = new Map([[3, 'a'], [2, 'b'], [1, 'c']])

a.forEach((e, i) => console.log(e, i))
// a 0, b 1, c 2

b.forEach((e, i) => console.log(e, i))
// a 3, b 2, c 1
```