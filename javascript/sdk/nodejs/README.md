# NodeJS

运行时

引擎、虚拟机

垃圾回收，内存管理





批处理、脚本

操作系统

编译器





## 计算机组成原理 

### CPU

cpu只能识别机器语言

cpu指令集是用汇编语言描述的，将cpu指令集对应的汇编语言汇编成机器语言，才可以被cpu识别

汇编语言和机器语言是一一对应的关系，可以将汇编语言理解成是机器码

CPU指令是由操作码和操作数组成

操作码是指操作指令，理解成谓语

操作数是指操作对象，理解成宾语

寄存器是存储正在运行的指令和数据

缓存是存储最近运行的数据

### 内存

内存是存储可能运行的数据，程序运行在内存中

<!-- 寻址方式是CPU根据指令中的数据地址信息来寻找数据地址的方式

内存管理是程序运行时对内存资源的分配和使用

内存地址 -->

内存地址，指针，存储单元的标识符

## 数据结构

bit 位，描述数据的最小单位，一个二进制单位，只有0和1

byte 字节，数据存储单元，以8位二进制作为一个存储单元，理解成一个存储单元可以存256个不同的数据，但是地址只有一个，是标识符，也是用8位二进制表示



## 编译原理

汇编器，将汇编语言汇编成机器语言。v8引擎就自带汇编器。

编译器，将高级语言编译成汇编语言，再通过汇编器汇编成机器语言，也就是说编译器包含了汇编器

解释器，将动态语言解释成字节码，再编译执行，实际上可以把动态语言的代码看成是解释器的一部分

强类型语言和弱类型语言，强类型语言是数据类型在编译时就已经确定
.5
运行时，动态语言在虚拟机上运行时，虚拟机提供了内存管理

## 虚拟机和引擎

虚拟机包含了执行引擎，同时提供了运行时环境

html运行在渲染引擎上

javascript运行在执行引擎上

### v8引擎


源代码 => 抽象语法树 => JIT => 机器码

编译：JIT直接编译成机器码

优化：内联缓存


# nodejs

nodejs是一个runtime, 可以理解成是js的虚拟机，同时nodejs还提供了大量的工具库

nodejs是一个exe程序，需要配置环境变量。npm是一个nodejs的package

nvm

不需要web服务器

非阻塞IO模型，阻塞是指数据传输时，异步是指函数调用时

## 作用

- cli
- electron
- web backend

## [开始](https://nodejs.org/en/docs/guides/getting-started-guide/)

```
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

## [全局对象](https://nodejs.org/dist/latest-v14.x/docs/api/globals.html)

- [require()](https://nodejs.org/docs/latest-v13.x/api/globals.html#globals_require)
  - arg 参数是url
  - res 返回的是一个对象，需要module.exports
  - 如果参数是路径，则导入一个文件，如果参数是模块名，则会在node_modules查找模块，如果当前目录没有，会从父级目录继续查找
  - 内部是使用了Module._load()方法，所以require属于module模块
- [console](https://nodejs.org/dist/latest-v14.x/docs/api/console.html)
- [__dirname](https://nodejs.org/dist/latest-v14.x/docs/api/modules.html#modules_dirname)
- [__filename](https://nodejs.org/dist/latest-v14.x/docs/api/modules.html#modules_filename)
  - log
  - error
  - warn

- [buffer](https://nodejs.org/dist/latest-v14.x/docs/api/buffer.html)

  二进制字节数组，序列化，后端传输数据类型只有string和buffer
- [process](https://nodejs.org/docs/latest-v14.x/api/process.html)
  - versions
    - node
  - title
- timer

- [mudule](https://nodejs.org/docs/latest-v13.x/api/modules.html)

- [exports](https://nodejs.org/docs/latest-v13.x/api/modules.html#modules_module_exports)

    - module.exports 导出一个对象，被require引用

## 模块

- [fs](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html)
  - [writeFile()](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback)
  - [readFile()](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_readfile_path_options_callback)
- [path](https://nodejs.org/dist/latest-v14.x/docs/api/path.html)
  - [join()](https://nodejs.org/dist/latest-v14.x/docs/api/path.html#path_path_join_paths)
- http
  - [createServer()](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_http_createserver_options_requestlistener)
  - respone
    - [write()](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_response_write_chunk_encoding_callback)
    - [end()](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_response_end_data_encoding_callback)
    - [setHeader()](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_response_setheader_name_value)
    - [writeHeader()](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_response_writehead_statuscode_statusmessage_headers)
- url
  好像变成全局对象

- [Modules: Packages](https://nodejs.org/dist/latest-v14.x/docs/api/packages.html)
  - package.json
- 


