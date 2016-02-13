var w = document.getElementsByTagName('html')[0].clientWidth,
    h = document.getElementsByTagName('html')[0].clientHeight;
while (w > h) {
  w /= 2;
}

var UNIT = w / 60;
var gravity = 0.5;


if (typeof Object.create != 'function') {
  Object.create = (function() {
    var Temp = function() {};
    return function (prototype) {
      if (arguments.length > 1) {
        throw Error('Second argument not supported');
      }
      if (typeof prototype != 'object') {
        throw TypeError('Argument must be an object');
      }
      Temp.prototype = prototype;
      var result = new Temp();
      Temp.prototype = null;
      return result;
    };
  })();
}

function recursion(array, start, end) {
  console.log(array.slice(start, end));
  if (end - start > 1) {
    var mid = Math.floor(start + (end - start) / 2);
    recursion(array, start, mid);
    recursion(array, mid, end);
  }
}