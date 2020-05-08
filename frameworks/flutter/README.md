# flutter

## 安装

* android studio

  * Android Studio SDK Manager => SDK Tools => 取消勾选Hide Obsolete Packages => 勾选Android SDK Tools (Obsolete)

  * Android Virtual Device => 创建模拟器

* flutter sdk

* 环境变量

  * 用户变量 => 新建path => "flutter\bin"完整路径

* vscode

  * 插件 => flutter => 打开查看命令面板，输入doctor，选择 Flutter: Run Flutter Doctor

* 检测

  `flutter doctor`

## 调试

可以直接在vscode用真机连接调试，安装flutter插件


## 运行

`flutter run`

## 类


* Diagnosticable

  * Widget

    * StatelessWidget

      无状态組件，类内的所有数据不可变

      * build()

      * Text(this.data, {config...})

      * Icon

      * ScrollView

        * BoxScrollView

          * ListView

            * .builder()

      * Divider

      * ListTile

      * Container

      * IconButton

      * Icon

      * FloatingActionButton

      * GestureDetector

      * MaterialButton

        * RaisedButton

      * CircleAvatar

    * StatefulWidget

      有状态组件，生命周期变化时可改变状态

      * createState()

      * WidgetsApp

        原生的最基层的组件

      * MaterialApp
      
        基于widgetsApp改造的material风格

      * CupertinoApp

        基于widgetsApp改造的cupertino风格

      * Scaffold

      * Material

      * AppBar

      * BottomNavigationBar

      * Navigator

    * RenderObjectWidget

      * SingleChildRenderObjectWidget

        * Opacity

        * Align

          * Center

      * MultiChildRenderObjectWidget
      
        * Flex

          * Row

          * Column

        * Stack

    * State

    * TextStyle({confing...})

    * Decoration

      * BoxDecoration

    * ProxyWidget

      * ParentDataWidget

        * Flexible

          * Expanded

      * InheritedWidget
        
        * MediaQuery

* EdgeInsetsGeometry

  * EdgeInsets

* BorderRadiusGeometry

  * BorderRadius

* Route

  * OverlayRoute

    * TransitionRoute

      * ModalRoute

        * PageRoute

          * MaterialPageRoute
* Colors

* Icons



每日学习重点

5.6  组件widget，statelesswidget, statefulwidget。渲染三棵树,widget,element,renderobject3

5.7 布局，手势（事件），入口组件meterialapp, cupertinoapp, widgetsapp。什么时候用stateful

5.8 路由