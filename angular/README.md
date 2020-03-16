## Angular

angular 前端模块化、组件的开发平台及MVVM框架    
webpack构建工具，本地服务器，浏览器自动刷新（http-server + livereload)  
typescript angular基于ts开发的，是底层开发语言   
websocket 传输协议



## 版本变化

* angularJS 特性：controller/$scope

* angular2 特性：环境设置

* angular4.0 特性：cli


## 快速上手

### Angular/cli

> 这是一个angular脚手架，可以看成是angular的应用程序，命令行接口，用于自动化开发angular项目

* npm install -g @angular/cli(@指定版本)

* npm uninstall -g @angular/cli 卸载

* ng v 查看版本

* ng new *projectName* 创建项目  

* ng serve 启动项目  

* ng generate component *componetName* 生成组件


### 目录

* e2e 这是测试用的

* node_modules 这是node环境

* README.md 这是自述文件

* src 这是放要写的代码  

	**app/ 存放代码**  
     
	app.component.ts 组件  
	app.component.html 组件html代码  
	app.component.css 组件css代码  
	app.module.ts 模块  
     
	**assets/ 存放图片**   
	 
	**index.html 主页**  
	
	**style.css 全局样式**  
	
	**favicon.ico 图标**
	
	
### 模块

> angular既是一个开发平台，也是一个JS框架，NgModule是一个独立的模块，基于node_module，能与其他模块合作，模块与模块间耦合性低

	* module.ts 模块配置文件，配置需要导入的模块和组件
	
		`import { BrowserModule } from '@angular/platform-brower'; 导入浏览器模块`
		
		`import { NgModule } from '@angular/core'; 导入根模块`
		
		`import { AppComponent } from './app.component'；导入根组件`
		
		`@NgModule({
  			declarations: [
    				AppComponent 声明组件
  			],
  			imports: [
    				BrowserModule 导入外部模块
  			],
  			providers: [],
  			bootstrap: [AppComponent]
		})`

* 内置模块

	* FormsModule 表单模块，数据双向绑定


### 组件

> 组件化是angular的核心，将HTML切分成多个组件，每个组件有独立的HTML/CSS/JS，用组件选择器构造index.html，组件基于angular框架，组件间内聚强
> 组件=UI模板+交互数据
> app.component是根组件，对应app-root，新生成的组件有独立的文件夹
> @Component是一个类装饰器，声明在组件类前面
> ng-zorro-antd 蚂蚁金服开发的一个angular组件  
> ng-alain 这是一个基于ng-zorro开发的angular组件

* src/app 文件夹

	* component.ts 组件配置文件

		`import { Component, OnInit } from '@angular/core'; 组件导入声明`
		
		`@Component({
			selector: 'app-root', 声明组件选择器
			templateUrl: './app.component.html', 组件的html链接
			styleUrls: ['./app.component.css'], 组件的CSS链接
		})`
		
		`export class AppComponent{
			title = 'myAngular'; 数据绑定接口
		}`
		
	* component.html 组件模板
	
	* component.css 模板CSS
	
	* component.spec.ts
	
### 数据绑定

> 单向绑定数据来源于ts文件的export

> 双向绑定数据来源[(ngModel)]，需要引入ngModel，类似于数据暂存

* {{}} 数据渲染
`<div>{{ variable }}</div>`
`{{ null?.key }}空对象防止报错`

* [] 属性绑定 
`<input [value]="variable" [display]="boolean">`
`[ngClass] = "{'active': boolen}"`
`[class.active] = "boolen"`
`[ngStyle] = "{'color': boolen ? 'red' : 'blue'}"`
`[style.color] = "boolen ? 'red' : 'blue'"`

* () 事件绑定
`(click)="function()"`

* [()] 双向绑定
`[(ngModel)]="variable"`


### 指令

#### *ngFor
`*ngfor="let item of list"` 在组件里可以使用item变量

#### *ngIf
`*ngIf="boolean"` 创建/删除DOM节点


### 表单
* 响应式

`FormGroup 是一组FormControl`

`FormControl 单个表单控件的值和状态`

`(ngSubmit) 表单提交事件`

`Validators 验证器`

`FormGroup = FormBuilder.group({name: []})`

* 模板驱动

`[value]`

`[(ngModle)]`

`#name="ngModel"`


### 管道

> 用于格式化数据

* | uppercase 转换为大写字母

* | async 异步数据

* | currency 转化货币


### 装饰器

@Component()

@Input() variable 属性装饰器，表明输入的property是由父传到子
`
<child [variable]="value"></child>
`
`@Input() variable
<div>{{variable}}</div>
`

@Output() event 属性装饰器，表明输出的property是有子传到父
`
<child (event)="function"></child>
`
`
@Output() event = new EventEmitter()
<div (click)="envet.emit()">
`

@Injectable 依赖注入类装饰器


### 订阅

Observable和subscribe


### DomSanitizer 净化器

### ngfor添加事件

// 判断是否被点击 
isActive = fn(item)

// 点击切换效果
if(isActive === item){ isActive = ''} else{ isActive = item}

### ngfor递归

```
<ng-template #id let-list>
  <div *ngFor="let item of list">
    <ng-container *ngTemplateOutlet="id; context: {$implicit: item.value}"></ng-container>
  </div>
</ng-template>
<ng-container *ngTemplateOutlet="id; context: {$implicit: list}"></ng-container>
```

### 生命周期

ngOnInit() 在组件被创建时触发
