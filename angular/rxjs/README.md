### 核心 

Observable(实例) observer(参数) subscribe(方法) unsubscribe(方法) Subject(实例)

作用： 在发布与订阅间传递消息

申明式的，发布时不会执行函数，被订阅后执行

subscribe（next, error, complete）


#### 监听 => 回调（发布 => 订阅）

```
addEventListener('click', function() {})
```

```
fromEvent('click').subscribe(function() {})
```

```
fromEvent('click').operator().subscribe(function() {})
```

* RxJS可以拦截监听，在回调前做操作

* observable是由subscribe触发的，promise是自身执行的

* `next*(err|complete)` next可以返回多个值，err和complete只能执行一次，并且两者只会执行一个


### 操作符

对原有的observable操作，返回一个新的observable

pipe() 包含一组操作符

throw() 返回一个不发送数据且立即发出错误的observable

#### 工具类

do => tap(5.5版本，防止与js关键字冲突改成tap)

#### 错误处理

catch => catchError(5.5版本，防止与js关键字冲突改成catchError)

#### 转换类

map() 将接收的数据处理后返回新的数据

mapTo() 将接收的数据统一返回一个常量
