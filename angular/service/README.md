## 服务

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

