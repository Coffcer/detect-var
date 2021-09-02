# detect-var

Wait for any async injected variables. such as ethereum provider `window.ethereum`

## Usage

``` js
import detectVar from 'detect-var'
const ethereum = await detectVar(() => window.ethereum)
console.log(ethereum === window.ethereum) // true
```

## Parameter

`detectVar(fn, [options])`

* fn: `function` return the object to be detected
* options
  * timeout: `number` maximum detection time, default 5000 ms
  * step: `number` interval between each detect, default 500 ms