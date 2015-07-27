# bestfitwidth

Useful for determining best image widths in responsive applications, for node or the browser.

Given a width integer and an array of possible values, like pre-cut image file widths, find the best fit, opting for a larger file over smaller one. 

## Install

```shell
npm install bestfitwidth
```

## Useage

```javascript
var bestFitWidth = require('bestfitwidth');
console.log(bestFitWidth(500, [320, 600, 900, 1200])))
// 600

```

