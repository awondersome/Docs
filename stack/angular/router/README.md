## 路由


### RouterModule

```
// app.module.ts

@NgModule({
  imports: [
    RouterModule.forRoot([{path: '', loadChilren: ''}],  { preloadingStrategy: PreloadAllModules })
  ]
})
```


#### forRoot(routes, config)


##### routes

* path 字符串，假路径

* component 组件，被导航时使用

* loadChilren 子路由模块

* redirectTo 重定向

* pathMatch 完全匹配

##### config

*PreloadAllModules 预加载/懒加载


#### forChild(routes)


### routerLink

`<a [routerLink]="[path, params]"></a>`

#### params

* {key: string}
传字符串，接收需要`ctivatedRoute.paramMap.subscribe(params => {params.get())`

* {state: obj} 
传对象，接收需要`ActivatedRoute.paramMap.pipe(map(() => window.history.state)).subscribe(params => {params.get())`


### ActivatedRoute

* paramMap
`ActivatedRoute.paramMap.subscribe(params => {})`



根html设置<base href="/">

<router-outlet></router-outlet>

routerLink

routerLinkActive

routerLinkActiveOptions

router.events

#### snapshot


## Location


## data 固定传参

## params 必选传参

## queryparams 可选传参
