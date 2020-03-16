# javascript

脚本语言，编程语言，解释性语言，是动态行为

### 变量
var variable = value
类型：number string boolean array object

### 函数
function method() {}
调用
参数
作用域
返回值return

### 运算符 
运算: + - * / % ** ++ -- = += -= *= /=
比较：== === != !=== > < >= <=
赋值：= 
逻辑： && // !
三元： () ? return1 : return2

### 操作符 
typeof
new
this

### 转义符 
/

### 条件语句
if(value) {} else if(value) {} else {}

switch(variable) {case value1: break; case value2: break; default: }

### 循环语句（条件+重复）
for(let variable = 0, variable < number, variable++) { break/continue }
while() {} 和for用法相同
do{} while() 先执行一次再判断条件

### 对象（一个属性和变量的集合，通常由变量和函数组成）
{}
./[]
this（向上寻找指向的对象）

browser => window document navigator
math random() round() max() min()
date gettime() getfullyear() getmonth() getday() gethours() getminutes() getseconds()
string include() indexof() match() slice() split() tolowercase() touppercase() replace()
array push() pop() unshift() shift() isarray() indexof() sort() foreach() map() filter()
object key() values()
json stringify() parse()
map
set
regexp test()

### 属性（对象变量）
dom
element: textContent
字符串：length []
数组：length []
undifend
nall
NaN


### 方法（对象函数）
dom: querySelector createElement
element: setAttribute appendChild removeChild
事件：onclick onblur onfocus onkeypress onkeydown onkeyup onmousehove onmouseout addEventListener(新事件监听，取缔旧的方法) removeEventListener(新事件监听，取缔旧的方法) eventDefault（阻止默认行为） stopPropagation(阻止冒泡)


### 调试 
语法错误
逻辑错误

### 异步
callback(ajax, eventListen, settime)

promise(fetch)
new Promise((resolve, reject) => {resolve();reject()})
promise.then(res => {}).catch(err => {})
promise.all([pro1,pro2]).then()

async function method(){ await ()=>{} }

### 面向对象（核心是类）
将相同特征（即有相同属性和方法）的东西封装成一个集合，就是类
构造函数(construct 创建类)
function obj() {var obj = {}, obj.prop = value, obj.method = function}
实例对象（把类实例出一个对象）
new obj()
原型(_proto_，和其他面向对象语言相比，js实例对象不是直接复制类的属性和方法，而是通过原型链)
原型链： js查找一个对象的属性或方法，会先直接查找对象的属性和方法，如果没有，会继续查找_proto_里面的属性和方法，如果_proto_里面还有_proro_，那就还会继续查找，这就是原型链
继承：原型才会被继承，原型外的不会被继承
call：回掉函数，可以改变this的指向

### XMLHttpRequest和fetch

new XMLHttpRequest();
fetch(url).then((res)=>{}).catch((err)=>{})

### 浏览器数据库
cookie
storage 
sessionStorage localStorage
setItem() getItem() removeItem() clear()
ibd


## es6

let const
() => {}
x => {} 只有一个参数
() => x 只有一个返回值
默认参数（a=1）=> {}
`${}` 字符串模板
扩展运算（...params）[...arr]{...obj}
解构赋值 [a, b] = [value1, value2]
链式写法
类class Name extends SuperName{
 constructor(params1, params2) {
  super(params1)继承
  this.variable = params2;
 }
 
 function() {}
}
json简写 {a:a} {a} {a: function(){}} {a(){}}

数据类型
set（去重） map

forEach((item)=>{})取代for，因为for通常使用在数组和对象上，所以ES6直接把它封装成数组和对象的一个方法

filter((item)=>{return item == confition 判断每个item是否符合条件，如果返回的是true则保留})

map((item)=>{改变每个item的操作})返回新的数组

reduce((累加值，item)=>{累加值+item})返回累加值

startsWith()以什么字符串开头

endsWith()以什么字符串结尾


## typescript

类型检测 variable: string
类，和es6一样
import export，和es6一样
接口interface，规范作用，参数类型作用
装饰器@

