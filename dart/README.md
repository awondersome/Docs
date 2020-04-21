# dart

## sdk

## 语法

### 变量

```
var str: string = 'hello world'  // .ts

String str = 'hello world'  // .dart 当有类型注解的时候，就必须省略var/const/final
```

* var 会推断类型，在第一次赋值后默认添加类型

* const 编译时有固定的值

* final 常量，运行时有固定的值

  `final dt = DateTime.now()`

* String 字符串

  `String str = "$str1 $str2"  // 字符串拼接`

* int 数字整型

* double 既可以是整型，也可以是浮点型

* bool 布尔类型

* List 数组

* Set 无重复值的数组

* Map 对象

  ```
  var person = {
      "name": "张三"
  }  // key必须用双引号

  person["name"] = "张三"  // 取key的值必须用[]
  ```

### 函数

```
function fn(): void{
    console.log('hello world')
}  // .ts

void fn() {
    print('not return');
}  // .dart


```

* main 入口函数

  `main() {}`

* => 箭头函数

  `() => print('hello world')`

* {param1, param2} 可选参数

  ```
  function fn(param, param1?, param2?) {}  // .ts

  fn(param, {param1, param2}) => {}
  fn(value, param1: value1, param2: value2);  // .dart
  ```

### 运算符

* ?? || ??= 

  `int a ??= 1 || int a = a ?? 1  // int a = (a != null ? a : 1) `

### 关键字

is