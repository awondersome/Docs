# javascript

脚本语言，编程语言，解释性语言，是动态行为

## 数据类型

### 原始类型

* string

* number

* boolean

* null

* undefinded

* symbol

  ES6新增，是string的衍生，唯一字符串

* bigInt

  ES10新增，是number的衍生，number的最大数字是2^53，bigInt可以表示更大的数字

### 引用类型

* array

* object

  一个属性和变量的集合，通常由变量和函数组成

* set

  ES6新增，是array的衍生，无重复值的集合

* map

  ES6新增，是object的衍生，能把对象做为key

* weakSet

  ES6新增，set的衍生，value只能是对象

* weakMap

  ES6新增，map的衍生，key只能是对象

## 变量

* var

* let

* const

## 函数

* function

    function method() {}
    调用
    参数
    作用域
    返回值return

  * () => {}

  * arg => {}

    只有一个参数

  * () => value
  
    只有一个返回值

  * arg => value

  * (arg=value) => {}

    默认参数（a=1）=> {}

* function*

  * yield

  * yield*

* async function

  * await

## 运算符

三元： () ? return1 : return2

* \+

* \-

* \*

* /

* %

* \**

* =

* \>

* <

* ==

* ===

* ...

* ++

* --

* !

* &&

* //

* ? :

  (condition) ? return1(ifTrue) : return2(ifFalse)

## 操作符

* typeof

* in

* new

* delete

## 转义符

* \

## 关键字

* this

* class

* extends

* super

* import

* export

## 语句

### 条件

* if

  if(value) {} else if(value) {} else {}

* swich

  switch(variable) {case value1: break; case value2: break; default: }

### 循环

可以被迭代的方法取代，如forEach, filtter

* for

  for(let variable = 0, variable < number, variable++) { break/continue }

* while

  while() {} 和for用法相同

* do while

  do{} while() 先执行一次再判断条件

### 错误

try,catch配合使用，如果没有错误，在try的代码块里执行；如果错误，在catch里面执行，catch可以接收throw的值做为参数

* try

* catch

## 对象

### 内置对象

* match

  * random
  * round
  * max
  * min

* date

  * gettime
  * getfullyear
  * getmonth
  * getday
  * gethours
  * getminutes
  * getseconds

* string

  * include
  * indexof
  * match
  * slice
  * split
  * tolowercase
  * touppercase
  * replace

* array

  * push
  * pop
  * unshift
  * shift
  * isarray
  * indexof
  * sort
  * foreach
  * map
  * filter

* object

  * key
  * values

* json

  * stringify

  * parse

* regexp

  * test

* Promise

  用于表示一个异步操作的最终完成 (或失败), 及其结果值

  * 语法
  
    `new Promise(function(resolve, reject) {...})`

  * 状态

    * pending

    * fulfilled

    * rejected
  
  * 方法

    * then

      then(res, err),第二个返回的错误和catch是一样的

    * catch

    * all

* Generator

  async...await是语法糖

### Web API

#### browser

* window

* navigator

* document

  * querySelector
  * createElement
  * setAttribute
  * appendChild
  * removeChild
  * addEventListener(新事件监听，取缔旧的方法)
  * removeEventListener(新事件监听，取缔旧的方法)
  * eventDefault（阻止默认行为）
  * stopPropagation(阻止冒泡)

## 调试

语法错误
逻辑错误

## 面向对象（核心是类）

将相同特征（即有相同属性和方法）的东西封装成一个集合，就是类
构造函数(construct 创建类)
function obj() {var obj = {}, obj.prop = value, obj.method = function}
实例对象（把类实例出一个对象）
new obj()
原型(_proto_，和其他面向对象语言相比，js实例对象不是直接复制类的属性和方法，而是通过原型链)
原型链： js查找一个对象的属性或方法，会先直接查找对象的属性和方法，如果没有，会继续查找_proto_里面的属性和方法，如果_proto_里面还有_proro_，那就还会继续查找，这就是原型链
继承：原型才会被继承，原型外的不会被继承
call：回掉函数，可以改变this的指向

## XMLHttpRequest和fetch

new XMLHttpRequest();
fetch(url).then((res)=>{}).catch((err)=>{})

## 浏览器数据库

cookie
storage
sessionStorage localStorage
setItem() getItem() removeItem() clear()
ibd

## es6

`${}` 字符串模板
解构赋值 [a, b] = [value1, value2]
链式写法,当方法的返回值是对象
json简写 {a:a} {a} {a: function(){}} {a(){}}

forEach((item)=>{})取代for，因为for通常使用在数组和对象上，所以ES6直接把它封装成数组和对象的一个方法

filter((item)=>{return item == confition 判断每个item是否符合条件，如果返回的是true则保留})

map((item)=>{改变每个item的操作})返回新的数组

includes(arg1, arg2)判断数组中是否包含某个值，第二个参数是从第几个值开始找起

reduce((累加值，item)=>{累加值+item})返回累加值

startsWith()以什么字符串开头

endsWith()以什么字符串结尾

## typescript

类型检测 variable: string
类，和es6一样
import export，和es6一样
接口interface，规范作用，参数类型作用
装饰器@