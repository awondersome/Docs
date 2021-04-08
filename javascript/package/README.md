# package

需要install

## cli

script，可以运行

## module

lib, framework, 可以直接import使用的代码

## package.json

元数据，描述自身的信息。package.json是一个包的标志，必须要name和version

# package

目前认知的package有两类，一类是lib，一类是cli。本文档只记录cli一类

## 原理

cli命令之所以能被系统识别，是因为通过node环境变量去寻找到npm的环境变量，在npm目录下存在全局的cli package

## tutorials

```package.json
"bin": {
    "cli":"./cli.js"
    }
```

```bin/cli.js
#!/usr/bin/env node
```

```
npm install -g // 可以将当前package安装到全局
```

