# flutter

> v1.12.13+hotfix.9 2020/4/18

> v1.22.4-stable 2020/12/10

> v1.19.0 开始，flutter sdk 包含了 dart sdk 

## [install](https://flutter.dev/docs/get-started/install/windows)

- android studio

  - Android Studio SDK Manager => SDK Tools => 取消勾选Hide Obsolete Packages => 勾选Android SDK Tools (Obsolete)

  - Android Virtual Device => 创建模拟器

- flutter sdk

  - 环境变量

    环境变量 => 用户变量 => path => "flutter\bin"完整路径

- vscode

  - 插件 => flutter => 打开查看命令面板，输入doctor，选择 Flutter: Run Flutter Doctor

## [quickstart](https://flutter.dev/docs/get-started/test-drive?tab=vscode#create-app)

- vscode

  - `flutter:new project`


## 目录结构

- lib
- android
- ios
- pubspec.yaml

## 调试

可以直接在vscode用真机连接调试，安装flutter插件


## 规范化

* 文件命名用_下划线

* 先导入dart，再到入package，再导入相对路径的文件

## 入口函数

- runApp(Widget)
  
  flutter一切皆widget