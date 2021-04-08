# [ELECTRON](https://www.electronjs.org/docs)

## how works
- main
    主进程只有一个
- render
    渲染进程可以有多个，一个渲染进程可以包含多个线程

## [Quickstart](https://www.electronjs.org/docs/tutorial/quick-start)

### [install](https://www.electronjs.org/docs/tutorial/installation)

```
npm install --save-dev electron
```

- `.npmrc`修改镜像源`ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"`
- 由于electron-v-win32-x64.zip下载会很慢，修改@electron/git的path不成功，只能单独从release下载zip，然后解压到modules/electron下，重命名为dist，新建path.txt文件，输入electron.exe保存

### run

```
electron .
```


## [API](https://www.electronjs.org/docs/api)

### [app](https://www.electronjs.org/docs/api/app)

* on(event, callback)
  * event.window-all-closed
  * event.ready
* quit()
* whenReady()

### [process](https://www.electronjs.org/docs/api/process)

* platform
  * drawin

    旧的mac os

### [BrowserWindow](https://www.electronjs.org/docs/api/browser-window)

* new BrowserWindow({option})
  * option.width
  * option.height
  * option.webPreferences({option})
      * option.nodeIntegration
* getAllWindows()
* loadFile(filePath)
* webContents

### [web-contents](https://www.electronjs.org/docs/api/web-contents)

* openDevTools()

### [notification](https://www.electronjs.org/docs/tutorial/notifications)

- new Notification(options)
  - options.title
  - options.body
- show()