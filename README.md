# bestfitwidth

Useful for determining best image widths in responsive applications. 

Given a width integer and an array of possible values, like pre-cut image file widths, find the best fit, opting for a larger file over smaller one. 

```javascript
bestFitWidth($imageContainer.width(), [320, 600, 900, 1200]))
```
