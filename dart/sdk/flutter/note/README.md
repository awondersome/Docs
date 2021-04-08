# flutter

flutter实现了html+css的功能，能从最底层绘制ui，所以flutter的可塑性很强，自带的widget只是封装好的组件，可高度自由的定制widget，自定义的widget比web组件会更好用。所以如果选择前端发现，就flutter搞起。flutter解决了什么问题，解决了平台渲染的问题，解决了自定义web ui可塑，可配置，可通用性的痛点。flutter是一种革命性思想，重新定义了绘制UI。它是一个造轮子的平台，未来会有越来越多的基于flutter打造的轮子可以用。它要取代html和css，web能做的，它能做，但它跨出了web的平台。html和css始终只能在浏览器DOM上绘制UI，这就是解释了ionic是基于webview，react是调用原生控件渲染。前端的终极方向就是GUI，绘制UI

平台差异性。自底向上

硬件图形api标准规范: OpenGL Vulkan DirectX Metal
图形渲染引擎库：webGL skia Core_Animation
图形组件框架: UIView view widget div+style

## widget的理解

html主要作用是结构化，每个标签就是个容器，所以如果每个widget组件都是容器的话，其实就是一样的

数据变化不等于状态变化。如果是父组件传来的数据发生改变，并非状态变化

渲染不是在widget层渲染的，而是在render层。每个widget实际上都是不可改变的，stateful是状态变化时重建widget树

三棵树和web渲染对比，render是一样的，element则对应真实的dom树，widget对应虚拟dom

* stateless

无状态，并非该组件的数据不会改变，而是从父组件拿到数据后不会再改变，所以说statelesswidget也是可能重新渲染的，当父组件传过来的数据发生变化后。或者说父组件的数据发生变化时，父组件就会重新渲染，而子组件一定会跟着渲染

* stateful

有状态，并非所有组件的数据变化就是状态变化，只有内部数据发生变化才属于状态变化

* 使用方法

  * 什么时候使用stateless

  1. 如果widget不需要重新渲染

  2. 如果需要渲染的数据可以都来自父widget

  3. 如果需要渲染的部分可以封装成子widget

  * 其他时候都用stateful

* setState

渲染原理，通过调用State类里面的setState方法，告知哪部分数据需要重新渲染

* element
widget是element的配置参数

* context
联系上下文，context所在的类的祖先节点需要有materialapp，才会创建路由

## style的理解

style应该是容器的装饰属性，而flutter把样式当成一个组件，实际上应该尽量少用center/padding/opacity这类可用属性来取代的组件，但是theme/defaultTextStyle暂时没找到替代的方案

结构和样式分离不一定是文件分离，web的样式也不一定是在css文件写的，直接给标签添加类的方式也是常见的

## route的理解

和angular相似.Navigator是MaterialApp提供的

## 结构的理解

数据model改变在state里处理，view在lesswidget处理

## 布局的理解

container就相当于div，row和column是带flex布局的div，expanded的带flex布局的子元素

* MaterialApp
  * Scaffold
    * container
      * row
        * container
        * expanded
          * container
      * column
        * container
        * expanded
          * container
          
## dialog的理解

showdialog也是个导航



