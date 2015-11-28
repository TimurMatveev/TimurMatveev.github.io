var ball = {
  x: w / 2,
  y: UNIT,
  vx: 0,
  vy: -1,
  r: UNIT
}



document.body.addEventListener('click', function(e) {
  var d = distance(ball.x, ball.y, e.clientX, e.clientY);
  if (ball.x !== e.clientX) {
    ball.vx += (ball.x - e.clientX) / d * 2;
  }
  if (ball.y !== e.clientY) {
    ball.vy += (ball.y - e.clientY) / d * 2;
  }
});


play();