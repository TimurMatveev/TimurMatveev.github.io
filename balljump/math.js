var scalar = function(v1, v2) {
  return v1.x * v2.x + v1.y * v2.y;
}

var triangleSquare = function(a, b, c) {
  return Math.abs(((a.y - b.y) * (c.x - a.x) + (b.x - a.x) * (c.y - a.y)) / 2);
}

var sqDistance = function(p1, p2) {
  return (p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y);
}

var distance = function(p1, p2) {
  return Math.sqrt(sqDistance(p1, p2));
}

var norm = function(v) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
} 

var pointToLinePosition = function(p1, p2, p3) {
  var det = (p2.x - p1.x) * (p3.y - p1.y) - (p3.x - p1.x) * (p2.y - p1.y);
  if (det > 0) return -1;
  if (det < 0) return 1;
  return 0;
}

var PTLP = pointToLinePosition;