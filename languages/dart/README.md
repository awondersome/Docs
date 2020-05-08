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

* T 泛型
  
  ```
  T fn()<T>(T value) {
    return value;
  }
  fn<String>('hello world')

  abstract class Person<T> {
    T name;
  }
  class Student<T> inplements Person<T> {
    @override
    T name;
  }
  new Person<String>()
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
  ```
  
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

  class Student extends Person { ***************
    int score;
    Person(name, age, score): super(name, score) {
        // 继承父类
    }
    
    @override // 覆写父类的方法
    printInfo() {
        super.printInfo() // 调用父类的方法
        
    }
  }

  abstract class Person {
    String name; // 抽象属性，只定义属性，不赋值
    run();  // 抽象方法，只定义方法，不实现。这个就是多态
  } // 抽象类，无法实例化。如果只有抽象属性和抽象方法，就是接口，dart里没有interface

  class Student extends Person{
    @override
    String name = '张三';

    @override
    run() {
      print("父类约束的run方法")
    }
  } // 继承抽象类的时候，被父类约束属性和方法

  class Student inplements Person {
    @override
    String name = '张三';

    @override
    run() {
      print("父类约束的run方法")
    }
  } // 如果父类只有抽象属性和抽象方法，就是接口，可以inplements实现接口

  class c inplements a, b{
    // 这个是多实现
  }

  class c with a, b{
    // 这个是多继承，dart里叫mixins
  }
  ```

  变量函数类，封装继承和多态，异步异常