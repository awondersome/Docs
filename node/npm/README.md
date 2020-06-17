npm config list 查看源

npm config set registry url 切换源

npm list -g --depth 查看安装包

npm install --save

* -g 不会安装到当前项目的node_module，通常用于安装工具类
* -s 安装到当前项目，同时在package.json保存
* -d 安装在当前项目的开发环境，不需要部署到生产环境时，通常也用于编译或解析类的包

npx 是可以调用当前目录的cli包，免去全局安装