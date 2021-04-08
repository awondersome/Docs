## 类


* Diagnosticable

  * Widget
    * StatelessWidget
      * Container
      * Text
      * Icon
      * Theme
      * ScrollView
        * BoxScrollView
          * ListView
      * SingleChildScrollView
      * 
      * MaterialButton
        * RaisedButton
        * FlatButton
      * FloatingActionButton
      * IconButton
      * ListTile
      * Card
      * DrawerHeader
    * **
    * [StatefulWidget](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html) 

      有状态组件，生命周期变化时可改变状态

      - [createState()](https://api.flutter.dev/flutter/widgets/StatefulWidget/createState.html)

      * WidgetsApp 原生的最基层的组件
      * Navigator 路由route
      * Form 表单
      * FormField
      * Scrollable
      * Image
      * 
      * MaterialApp 基于widgetsApp改造的material风格
      * Scaffold 相当于页面内容的根容器content
      * BottomNavigationBar 导航栏tabs
      * AppBar 头部header
      * TextFormField(extend FormField)
      * CheckBox
      * 
      * CupertinoApp 基于widgetsApp改造的cupertino风格
    * **
    * RenderObjectWidget
      * SingleChildRenderObjectWidget
        * Align
          * Center
        * Padding
        * ConstrainedBox
        * SizedBox
        * LimitedBox
        * AspectRatio
        * DecoratedBox
        * Offstage
        * Opacity
        * Transform
      * MultiChildRenderObjectWidget
        * Flex
          * Row
          * Column
        * Wrap
        * Stack
        * RichText
      * SliverWithKeepAliveWidget
        * SliverMultiBoxAdaptorWidget
          * SliverFixedExtentList
      * LeafRenderObjectWidget
        * RawImage
    * **
    * ProxyWidget
      * ParentDataWidget
        * Flexible
          * Expanded
        * Positioned
      * InheritedWidget
        * MediaQuery
        * InheritedTheme
        * DefaultTextStyle
  * **
  * DiagnosticableTree
    * InlineSpan
      * TextSpan
  * [State](https://api.flutter.dev/flutter/widgets/State-class.html)

    - [build()](https://api.flutter.dev/flutter/widgets/State/build.html)

      这个是state的核心，通过build()重新构建widget。initState()和setState()都会调用build()，return一个新的widget

    - [initState()](https://api.flutter.dev/flutter/widgets/State/initState.html)
    - [setState(callback)](https://api.flutter.dev/flutter/widgets/State/setState.html)

  * TextStyle
  * ThemeData
  * Decoration
    * BoxDecoration
* **
* Axis

* EdgeInsetsGeometry

  * EdgeInsets

* Constraints
  * BoxConstraints

* ShapeBorder
  * BoxBorder
    * Border
  
* BorderStyle
  
* MainAxisAlignment
* CrossAxisAlignment

* Colors

* Icons

* BorderRadiusGeometry

  * BorderRadius

* Route

  * OverlayRoute

    * TransitionRoute

      * ModalRoute

        * PageRoute

          * MaterialPageRoute

* setState
* showDialog

