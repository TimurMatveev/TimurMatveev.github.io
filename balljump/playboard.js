var ball = {
  cur: {
    x: w / 2,
    y: 20*UNIT
  },
  next: {
    x: w / 2,
    y: 20*UNIT - 1
  },
  v: {
    x: -2,
    y: 1
  },
  vNorm: 1,
  r: 2 * UNIT,
  down: gravity
}



document.body.addEventListener('click', function(e) {
  var d = distance(ball.cur, {x: e.clientX, y: e.clientY});
  if (ball.cur.x !== e.clientX) {
    ball.v.x += (ball.cur.x - e.clientX) / d * 2 * UNIT;
  }
  if (ball.y !== e.clientY) {
    ball.v.y += (ball.cur.y - e.clientY) / d * 2 * UNIT;
  }
});


play();