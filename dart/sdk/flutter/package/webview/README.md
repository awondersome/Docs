# [webview_flutter](https://pub.dev/documentation/webview_flutter/latest/)

基于Platform Views，flutter1.22新增安卓Hybrid Composition，解决了多键盘问题，但是安卓10以前的版本会降低性能

## Webview()

这是一个widget，widget只接收参数

- [debuggingEnabled](https://pub.dev/documentation/webview_flutter/latest/webview_flutter/WebView/debuggingEnabled.html)

  打开webview调试

- [initialUrl](https://pub.dev/documentation/webview_flutter/latest/webview_flutter/WebView/initialUrl.html)
- [javascriptChannels](https://pub.dev/documentation/webview_flutter/latest/webview_flutter/WebView/javascriptChannels.html)

  jsChannel的集合，一个webview可以有多个channel

- [javascriptMode](https://pub.dev/documentation/webview_flutter/latest/webview_flutter/WebView/javascriptMode.html)

## [JavascriptChannel()](https://pub.dev/documentation/webview_flutter/latest/webview_flutter/JavascriptChannel-class.html)

用于和js通信

- [name](https://pub.dev/documentation/webview_flutter/latest/webview_flutter/JavascriptChannel/name.html)
- [onMessageReceived](https://pub.dev/documentation/webview_flutter/latest/webview_flutter/JavascriptChannel/onMessageReceived.html)
  
  接收一个带message的callback


  JavascriptChannel name callback(msg)

  ChannelName 可以所有插件走一个channel，也可以一个插件走一个channel

  - 所有插件一个channel

  ```
  jsChannel(msg) {
    if msg = 'upgrade'
    else if msg = 'scan'
  }

  Plugin.postMsg('upgrade')
  ```

  - 一个插件一个channel
  ````
  jsChannel(msg){}
  jsChannel(msg){}

  Upgrade.postMsg('')
  ````

  - bfs-app使用api不应该发postMSG
  ```
  bfs.upgradeAuto('upgrade')

  upgrade() {
    Upgrade.postMsg('auto')
  }


  ```

  ```
  upgradeChannel(msg) {
    if(msg == auto) {}
  }

  ```

  