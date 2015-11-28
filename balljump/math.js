var scalar = function(v1, v2) {
  return v1.x * v2.x + v1.y * v2.y;
}

var triangleSquare = function(a, b, c) {
  return ((a.y - b.y) * (c.x - a.x) + (b.x - a.x) * (c.y - a.y)) / 2;
}

var distance = function(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) / UNIT;
}

var pointToLinePosition = function(p1, p2, p3) {
  var d = (p2.x - p1.x) * (p3.y - p1.y) - (p3.x - p1.x) * (p2.y - p1.y);
  if (d > 0) return -1;
  if (d < 0) return 1;
  return 0;
}