# [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

promise实例化后返回一个自执行的函数，但是异步等待结果，拿到结果后会执行then函数

## 语法

new Promise(executor)

```
new Promise(function(resolve, reject) {
  // await something done
  resolve('success')
  // if something have not done
  reject('error')
})

Promise.then(
  res => {
    console.log()
  }
  err => {
    console.log()
  }
)
```

* executor(resolve, reject)

  executor内部包含resolve()和reject()两个函数，当promise实例化后executor进入pending状态，resolve()被调用时进入fulfilled状态

  * resolve()
  * reject()
  
* then
  * res
  * err
* catch
* all


0.01
