/* globals define */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
}(this, function() {

  /**
   * Find the best sized image, opting for larger over smaller
   *
   * @param  {Number} targetWidth
   * @param  {Array} availableWidths
   * @return {Number}
   */
  return function(targetWidth, availableWidths){
    var selectedWidth = availableWidths[availableWidths.length - 1],
      i = availableWidths.length;

    // sort smallest to largest
    availableWidths.sort(function(a, b) {
      return a - b;
    });

    while (i--) {
      if (targetWidth  <= availableWidths[i]) {
        selectedWidth = availableWidths[i];
      }
    }

    return selectedWidth;
  };
}));