# comlink

将worker.js的一个对象暴露出来，给main.js使用。使用了proxy，原理是worker.postMessage

* wrap
* expose
* proxy


main 

postmsg(msg, port2)

port1.postmsg

transfer