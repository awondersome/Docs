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

  `String str = "$str1 ${this.str2}"  // 字符串拼接`

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

### 操作符

* is

* as

* ..

  ```
  person.name = "张三";
  person.age = 20;
  person..name = "张三"
        ..age = 20;

* ?

### 类

* class

  ```
  class Person {
      String name;
      int age;
      int _wage; // 这是私有属性，没有ts里面的public和private

      Person(String name, int age) {
          this.name = name;
          this.age = age;
      } // 这是构造函数的写法

      Person(this.name, this.age); // 这是简写

      person.setInfo(String name, int age) {
          // 这是命名构造函数
      }

      printInfo() {
          print("${this.name} ${this.age}")
      }

      get getInfo {
          return this.age++; // 返回
      }
  }

  Person zhangsan = new Person("张三", 18);
  Person lisi = new Person("李四", 20);

  class Student extends Person {
    int score;
    Person(name, age, score): super(name, score) {
        // 继承父类
    }
    
    @override // 覆写父类的方法
    printInfo() {
        super.printInfo() // 调用父类的方法
        
    }
  }
  ```
  [ ] 应该为加入项目小伙伴提供培训视频供学习
  1、飞书云文档的使用指南，比如任务如何发布、领取，在哪里可以反馈问题？
  2、云桌面开发环境的介绍，比如在局域网内如何解决开发工具的问题，项目依赖怎么安装？
  3、目前项目开发使用的技术栈包括哪些？