# NPM

node package manager

一个代码库，js包存放在npm服务器里，方便下载

安装nodejs会自动在node-modules下安装npm package

## 历史

现有npm，nodejs需要包管理器，就和npm合作，然后火了。

## install

建议先下载nvm，然后安装node.js，node.js会自动安装npm package

##

* npm config list 查看源
* npm config set registry url 切换源
* npm config get cache 查找缓存路径



npm list -g --depth 查看安装包

npm view [package] version 查看包版本

npm install --save

* -g 不会安装到当前项目的node_module，通常用于安装工具类
* -s 安装到当前项目，生产环境依赖，在package.json保存
* -d 安装在当前项目，开发环境依赖，通常用于编译或解析类的包，在package.json保存

npx 是可以调用当前目录的cli包，免去全局安装

yarn cache list 查看缓存

yarn cache clean 清除缓存

## npm run



## publish

`npm publish`发布包

## error

`The operation was rejected by your operating system`

删除node_module后重新install

- [npm-config](https://docs.npmjs.com/cli-commands/config.html)

  - npm config set \<key> \<value>

## [script](https://docs.npmjs.com/cli/v6/using-npm/scripts)

pre和post是两个钩子，运行script时，会同时运行pre和post

## API

- [run-script](https://docs.npmjs.com/cli/v6/commands/npm-run-script)
  
  运行package.json中的script脚本，脚本的path在node_modules/.bin中