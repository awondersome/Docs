# [Web Workers API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API)

多线程, worker可以创建新的worker

worker标准分成两部分，由主线程的worker对象和worker线程的scope对象组成

## [Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API)

new Worker(url | blob url)

url可以是一个js文件，也可以是一个二进制文件

url必须是一个服务器路径，如果是本地路径会报错，所以需要运行http-server

* [onmessage()](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker/onmessage)

  监听线程之间的消息，看成是addEventListener的简易版

* [postMessage()](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker/postMessage)

  线程之间发送消息，看成是dispatchEvent(new MessageEvent)的简易版

* [terminate()](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker/postMessage)

## [WorkerGlobalScope](https://developer.mozilla.org/zh-CN/docs/Web/API/WorkerGlobalScope)

scope类似于window，fetch()可以在scope和window中使用

scope对象不存在浏览器的上下文，所以不能直接操作DOM和window对象（除了nav和loca和window事件），但是通过继承EventTarget可以使用很多事件，比如addEventListener、postMessage

WorkerGlobalScope包含了DedicatedWorker、SharedWorker、ServiceWorker

### api

* [self](https://developer.mozilla.org/zh-CN/docs/Web/API/WorkerGlobalScope/self)

* [importScripts()](https://developer.mozilla.org/zh-CN/docs/Web/API/WorkerGlobalScope/importScripts)
* EventTarget
  * addEventListener()
  * postMessage()
  * onmessage

## [Service Worker API](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API)

## chrome worker

