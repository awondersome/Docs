# worker-dom

## 

```index.html
<div src="hello-world.js" id="upgrade-me"></div>
<script type="module">
    import {upgradeElement} from './node_modules/@ampproject/worker-dom/dist/main.mjs';
    upgradeElement(document.getElementById('upgrade-me'), './node_modules/@ampproject/worker-dom/dist/worker/worker.mjs');
</script>
```

```hello-world.js
createElement()
appendChild()
```

* `import upgradeElement from main.js`
* `upgradeElement(element, 'worker.js')`
* element 容器
* 容器需要挂载js和worker.js