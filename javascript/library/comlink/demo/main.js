import * as Comlink from "./node_modules/comlink/dist/esm/comlink.mjs";
function callback(value) {
    alert(`Result: ${value}`);
  }
  async function init() {
    const remoteFunction = Comlink.wrap(new Worker("worker.js"));
    console.log(remoteFunction)
    await remoteFunction(Comlink.proxy(callback));
  }
  init();

  async function remoteFunction(callback) {
    await callback("A string from a worker");
  }