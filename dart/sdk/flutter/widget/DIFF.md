
## 布局

* 入口组件

```
<ion-app>
  <ion-router-outlet></ion-router-outlet>
</ion-app>

**

WidgetsApp()

MaterialApp(
  home: // 主页
  routes: // 路由
)

CupertinoApp(
  home: // 主页
  routes: // 路由
)
```

* 页组件

```
<ion-content>
</ion-content>

**

Scaffold(
  body: // 页面内容
)
```

## 行为

* tab组件

```
<ion-tabs>
</ion-tabs>

**

Scaffold(
  BottomNavigationBar: BottomNavigationBar()
)
```

* button组件

```
<ion-buttons>
  <ion-button></ion-button>
</ion-buttons>

**
ButtonBar(
  children: [
    RaisedButton(),
    FlatButton(),
    IconButton(),
    FloatingActionButton()
  ]
)
```

* text组件
  
```
<div>string</div>

**

Text('string')
```



* icon组件

```
<ion-icon name="">
</ion-icon>

**

Icon(
  Icons.iconName
)
```


## 路由
```
<ion-button [routerLink]="['/']">
</ion-button>
navCtrl.pop()
**
MaterialApp(
  routes: {
    '/home': new HomePage()
  }
)

Navigator.pushName('/home')
Navigator.pop()
```



## 样式

```
padding: 1
padding: 1 1 1 1
padding-left: 1
padding: 0 1

**
padding(
  padding: edgeinsets.all(1)
  padding: edgeinsets.fromLTRB(1,1,1,1)
  padding: edgeinsets.only(left: 1)
  padding: edgeinsets.symmetric(vertical:1)
)
```

```
display: flex
justify-content: space-between
align-items: center

**

row(
  mainAxisAlignment: MainAxisAlignment.spaceBetween
  crossAxisAlignment: CrossAxisAlignment.center
)
colum(
  mainAxisAlignment: MainAxisAlignment.spaceBetween
  crossAxisAlignment: CrossAxisAlignment.center
)
```

```
color: #

**

DefaultTextStyle(
  style: TextStyle(color: #)
)
```

```
<div style="color: white; background: blue; padding: 10; top: 50%, left: 50%;  tranform: translate(-50%, -50%)">
  <div>hello</div>
  <div>world</div>
</div>

DefaultTextStyle(
  style: TextStyle(color: Colors.white),
  child: Container(
    color: Colors.blue,
    padding: EdgeInsets.all(10),
    child: Center(
      child: Column(
        children: <Widget>[
          Text('hello'),
          Text('world')
        ],
      ),
    ),
  ),
)
```