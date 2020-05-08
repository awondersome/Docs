* Waiting for another flutter command to release the startup lock
删除flutter/bin/cache/lockfile，如果无法删除，注销重启电脑

* This is taking an unexpectedly long time.
翻墙也不能下载package，要更换国内镜像。设置系统环境变量FLUTTER_STORAGE_BASE_UR：https://storage.flutter-io.cn，PUB_HOSTED_URL: https://pub.flutter-io.cn，然后注销重启电脑

* unimplemented handing of missing static target
查看报错，pub包未安装



## 吐槽

* statefulwidget和state要分开写，真的很烦，可以弄一个基类，将两个合成一个类，不用每次写两个类

* vscode对保存反应很慢，明明保存了，要隔很久才反应