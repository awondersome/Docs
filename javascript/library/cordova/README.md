cordova 

提供runtime

phoneGap的核心代码，开源项目


npm install -g cordova

### cordova create

`cordova create path [id [name [config]]] [options]`

* path 指定文件路径，如果没有，默认创建
* id 包名，方向域名

`corodva create path io.cordova.hellocordova`
  
* name app名
  
`corodva create path io.cordova.hellocordova HelloCordova`

* config 配置
* options 选项

`corodva create path --template`

### cordova platform

`cordova platform add platform`

`cordova platform remove platform`

* platfrom 指定平台，android或ios

`cordova platform add android`

### cordova requirements

`cordova requirements`

检查环境

* JDK
* Android SDK

cordova build

cordova emulate

cordova run

cordova plugin

merges文件可以指定平台打包

o: app
    kr: flutter+dart

o: web+app+node
    kr: js

### cordova plugin

* Android Permissions

* Android Full Screen 全屏
* Alipay 支付宝
* appavailability 检测第三方app是否存在
* app-launcher 启动第三方app
* App Minimize 最小化
* App Update 更新
* App Version 查看版本
* Apple Pay
* Apple Wallet
* Autostart 自动启用
* BLE 蓝牙
* Background Fetch 后台运行，每隔15分钟运行
* Background Mode 防止休眠
* Badge 徽章通知
* Backlight 闪光灯
* Baidu Push
* Barcode Scanner 条码
* Base64 To Gallery base64转图片
* Base64 图片转base64
* Battery Status 电池
* Bluetooth Serial 蓝牙
* BluetoothLE 蓝牙
* Brightness 亮度