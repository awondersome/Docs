### 请求
get

post

### 状态码

200 成功

302 可能IP地址临时换了

400 参数不对

401 没有权限

405 请求方式错误

500 内部服务器出错

503 服务器错误

cors跨域

### websocket

长连接，推送 -> 接收

```
var ws = new WebSocket(url, [protocol])   // 创建链接


ws.onopen = function() {    // 监听请求成功
  ws.send(data)  // 发送数据
}


ws.onmessage = function(res) {    // 监听响应成功，返回数据
  
}


ws.onclose = function() {  // 监听请求结束

}


ws.error = function() {  // 监听错误

}




ws.readyState // 读取链接状态


ws.bufferedAmount // 读取即将发送的消息
```
