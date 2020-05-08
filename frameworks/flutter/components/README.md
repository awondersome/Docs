
## 布局

* container

  * row

  * colum


* ion-grid

  * ion-row

  * ion-col

```
<ion-grid>
  <ion-row>
    <ion-col></ion-col>
    <ion-col></ion-col>
  </ion-row>
  <ion-row>
    <ion-col></ion-col>
    <ion-col></ion-col>
  </ion-row>
</ion-grid>
```


* 入口组件

```
.ionic

<ion-app>
  <ion-router-outlet></ion-router-outlet>
</ion-app>
```

```
.flutter

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
.ionic

<ion-content>
</ion-content>
```

```
.flutter

Scaffold(
  body: // 页面内容
)
```

* tab组件

```

```


```
appbar

```

```
BottomNavigationBar
tabs
```

```
TabBar

segment
```


```
<ion-icon slot="end" name="star"></ion-icon>
Icon(
    Icons.favorite,
    color: Colors.pink,
    size: 24.0,
    semanticLabel: 'Text to announce in accessibility modes',
),
```


* 路由
```
<ion-button [routerLink]="['/']"></ion-button>
Navigator.push()
Navigator.pop()
```