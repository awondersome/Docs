# Git 分布式版本控制系统

## 概念

### 版本控制

我们可以记录文件修改的每次版本，在多人协作的时候，甚至能知道是谁在修改，修改了什么，什么时候修改。同时可以回滚到之前的任意一个版本

### 分布式

相对集中式而言，每台客户端都保存一份完整的数据，如果服务端挂了，分布式下的每个客户端的数据都是一个备份。

### repository 仓库

#### local 本地

#### remote 远程

### 状态

修改，暂存，提交

## 安装

## 命令

* git --version 查看版本
* git config 配置
  * git config --global 全局
  * git config user.name 用户名
  * git config user.email 邮箱
* git clone 克隆
* git add 添加到暂存区
* git commit -m "" 提交
* git pull 拉取
* git push 推送

## git pull 出错

Your configuration specifies to merge with the ref 'refs/heads/master' from the remote, but no such ref was fetched.
你的配置指定与来自远程的ref合并，但没有ref被请求

* git status

    On branch master

    Your branch is based on 'origin/master', but the upstream is gone.

    (use "git branch --unset-upstream" to fixup)

    nothing to commit, working tree clean

    没有东西提交，工作区是空的

    直接提交即可
