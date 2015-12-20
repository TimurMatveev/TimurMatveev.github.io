var w = document.getElementsByTagName('html')[0].clientWidth,
    h = document.getElementsByTagName('html')[0].clientHeight;
while (w > h) {
  w /= 2;
}

var UNIT = w / 60;
var gravity = 0.5;