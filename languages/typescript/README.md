# typescript

js的超集，类似于sass和css的关系，提供运行代码前的语法、类型检测，确认没有错误之后才会编译成为js

## cli

`npm i -g typescript`


## 概念

### syntax 语法检查

### type annotations 类型注解

* 联合类型

* 泛型

  限制集合内的类型

### interface（shape） 接口
 


### class


### 错误

`tsc: 无法加载文件，因为在此系统上禁止运行脚本`

## 装饰器

> [参考](https://blog.csdn.net/zdhsoft/article/details/90481925)

装饰器理解成是对类的扩展。

### 形式

`@expression(params1?, params2?)`

@后面的表达式是一个函数，在运行时被调用

* 工厂装饰器

```
function expression(params1, params2) {
  return function(target, name: string, descriptor: PropertyDescriptor) {
    console.log(target是类的原型对象)
    console.log(name是属性名或方法名)
    console.log(descriptor是方法)
  }`  
}
```

* 普通装饰器，可以看成是没有传参的工厂装饰器的简写

```
function(target) {
  target.prototype.attr = '可以扩展类的属性'
  target.prototype.method = function() {
    console.log('可以扩展类的方法')
  }
}
```


### 调用顺序

```
@expression1
@expression2
Class HelloWord {

  @expression3
  attr1: any | undefind;

  constructor() {}

  @expression4
  greet(@expression5 params) {
    
  }
}
```

执行顺序是3、4、5、2、1


## 符号

* ! 断言属性不为空
* as 类型断言

`alertCtrl!: AlerController`

fn1() {
  expression1(params1,params2)
  
}

@expression1(params1,params2)
fn1() {

}

expression1(params1,params2) {

}

## 编译

tsc

tsconfig

```
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es6",
    "jsx": "react",
    "allowJs": true
  }
}
```