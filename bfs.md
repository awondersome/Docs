# PACKAGE_INFO

- addEventListener("PACKAGE_INFO", res => {})
  - res
    - data: Array[reqId: string, packageInfo: Map]
      - packageInfo: Map({version, appName, packageName, buildNumber})
      
- PACKAGE_INFO.postMessage(msg: string)
  - msg: string
    - JSON.stringify({reqId})

# plaoc

- addEventListener("plaoc", res => {})
  - res
    - data: Array[reqId: string, ActionHanlder]
      
- plaoc.postMessage(msg: string)
  - msg: string "{reqId, plugin, action, data}"
    - reqId
    - plugin 插件名
    - action 插件功能名
    - data