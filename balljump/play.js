var play = function() {
  setInterval(function() {
    bl.clearRect(0, 0, w, h);
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (ball.x + ball.r >= w || ball.x - ball.r <= 0) {
      ball.vx = -ball.vx;
    }
    ball.vy += 0.6;
    for (var i = 0; i < reflectors.length; i++) {
      if (reflectors[i].isHit()) {
        var temp = reflectors[i].reflect({x: ball.vx, y: ball.vy});
        ball.vx = temp.x;
        ball.vy = temp.y;
      }
    }
    bl.fillStyle = "#000000";
    bl.beginPath();
    bl.arc(ball.x, ball.y, ball.r * 2, 0, 2 * Math.PI, true);
    bl.closePath();
    bl.fill();
  }, 1000/60); 
};