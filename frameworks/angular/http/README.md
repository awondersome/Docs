## http

### HttpClientModule

`import { HttpClientModule } from '@angular/common/http';`
`
@NgModule({
  imports: [
    HttpClientModule
  ]
})
`

#### HttpClient
`import { HttpClient } from '@angular/common/http';`
`
constructor(
    private http: HttpClient
  ) {}
`

* get
`http.get(url)`

* post


### HTTP_INTERCEPTORS
拦截器

interceptor.ts

```
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

export class _HttpInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req);
  }
  
  
}
```

#### 暴露 _HttpInterceptor 类

intercept(req, next) 拦截器方法，每次发送请求时执行

* req: HttpRequest<any> http请求
  
  * req.clone({url: newUrl, body: newBody || null, setHeaders: {Authorization: token}})  // 修改请求参数
  
* next: HttpHandler 错误处理

  * next.handle(newReq) // 发送拦截后的请求


#### 注册拦截器

`providers: { provide: HTTP_INTERCEPTORS, useClass: _HttpInterceptor, multi: true }`

httpHandler

httpEvent

app/http/interceptors/index.ts


#### Observable

作用： 在发布与订阅间传递消息

申明式的，发布时不会执行函数，被订阅后执行

subscribe（next, error, complete）
