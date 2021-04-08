# [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)

## concept

页面堆栈，通过back/forward/go来实现页面跳转


### [Window.history](https://developer.mozilla.org/en-US/docs/Web/API/Window/history)


### [History](https://developer.mozilla.org/en-US/docs/Web/API/History)

- [length](https://developer.mozilla.org/en-US/docs/Web/API/History/length)
- [state](https://developer.mozilla.org/en-US/docs/Web/API/History/state)
  - 理解：在页面栈存储一个state对象，popstate能监听到state的变化
- [back()](https://developer.mozilla.org/en-US/docs/Web/API/History/back)
- [forward()](https://developer.mozilla.org/en-US/docs/Web/API/History/forward)
- [go()](https://developer.mozilla.org/en-US/docs/Web/API/History/go)
- [pushState(state, title[, url])](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState)
  - title，大部分浏览器忽略了这个参数
  - url，默认在源加上后缀
- [replaceState](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState)