* Waiting for another flutter command to release the startup lock
  
  删除flutter/bin/cache/lockfile，如果无法删除，注销重启电脑

* This is taking an unexpectedly long time.
  
  翻墙也不能下载package，要更换国内镜像。设置系统环境变量FLUTTER_STORAGE_BASE_UR：https://storage.flutter-io.cn，PUB_HOSTED_URL: https://pub.flutter-io.cn，然后注销重启电脑

* unimplemented handing of missing static target
  
  查看报错，pub包未安装

* The following assertion was thrown building Navigator showdialog
  
  onPressed属性后面的方法不能直接调用。查看showdialog的context是否挂载在materialapp下，重启serve看一下

* BoxConstraints forces an infinite width

  positioned下要设置width: double.infinity的话，必须设置left和right为0

* Vertical viewport was given unbounded height.

  ListView要设置shrinkWrap: true
  
## 吐槽

* statefulwidget和state要分开写，真的很烦，可以弄一个基类，将两个合成一个类，不用每次写两个类

    * 实现了model和view分离，也是挺好的

* 样式组件，简直就是反人类，部分样式用参数配置，部分样式用组件的方式，例如padding竟然是个组件。样式和容器不分离，样式应该是容器的style属性
  * theme，defaultTextStyle,(padding, center, Opacity // padding和alignment，color.fromRGBA可以取代)
  * 应该舍弃能舍弃的样式组件，比如padding和center\Opacity\align

* 样式调试
  
* vscode对保存反应很慢，明明保存了，要隔很久才反应

* Could not find a generator for route RouteSettings("/login", null) in the _WidgetsAppState.
routes不能单独放在一个文件.........../////////怎么又好了，是不是vscode缓存问题