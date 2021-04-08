## 服务

### cli

ng g service name 创建服务
服务类的方法可以在其他组件调用，服务就是把一些公用方法提取出来，在组件内import sevice，然后在constructor的参数里private heroService: HeroService
这样就可以通过this.heroService调用服务类的方法，最后还要在ngOnInit里面调用

### @Injectable({
  providedIn: 'root',
  useFactory: () => new Service('dependency')
}) 依赖注入装饰器

* providedIn 提供优化，如果服务未被使用，打包时不出产生这个服务

* useFactory 工厂函数


### providers 在需要使用的组件里导入
`
@NgModule({
  providers: [services]
})
`
`
constructor(
    private service: Service
  ) { }
`




