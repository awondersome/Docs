# [Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)

原生组件（现在的vue，angular，react都是源于原生组件，最早的框架是polymer）

组件化思想：将可复用的代码封装起来，一处代码，到处使用；通过传参的方式去修改组件，参考UI组件

template 自定义模板（自定义标签）

slot 自定义插槽，用于传递标签和内容

注册，每个组件的使用需要注册

生命周期，每个组件都有生命周期，比如生成时、删除时都会触发回调函数

和ajax一样，通常不需要自己写，只需要理解它的理念


## [CustomElementRegistry](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomElementRegistry)


- [define()](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomElementRegistry/define)
  ```
  customElements.define('custom-element', CustomClass)
  class CustomClass extends HTMLElement {
      constructor() {
        super(); 
      }
  }
  ```

## Shadow DOM

```
class PopUpInfo extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({mode: 'open'});
    // attachShadow是一个element方法，这里的this是customElement
  }
}
```
## [\<template\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/template)

理解：将html字符串模板写在html文件中

不建议：不建议写在html文件中

```
<template id="my-paragraph">
  <p>My paragraph</p>
</template>

let template = document.getElementById('my-paragraph');
let templateContent = template.content;
document.body.appendChild(templateContent);
```

```
<p><slot name="my-text">My default text</slot></p>
<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
</my-paragraph>
```

## [\<slot\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/slot)

理解：template中的一个占位符

不建议：不建议写在html文件中