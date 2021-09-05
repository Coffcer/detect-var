# wait-for-any

Wait until the condition is met. Used to detect dynamically injected variables, such as `window.ethereum`

## Install

```
npm install wait-for-any
```

## Example

Wait until ethereum injection
``` js
import waitFor from 'wait-for-any'
const ethereum = await waitFor(() => window.ethereum)
console.log(ethereum === window.ethereum) // true
```

Browser
``` html
<script src="dist/index.js">
<script>
  window.waitFor()
</script>
```

## Parameter

`waitFor(condition, [options])`

* `condition`: function - if the return value is not null, the condition is true
* `options`
  * `timeout`: number - maximum detection time, default 5000 ms
  * `step`: number - interval between each detect, default 500 ms