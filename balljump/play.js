var play = function() {
  setInterval(function() {
    bl.clearRect(0, 0, w, h);
    bl.fillStyle = "#000000";
    bl.beginPath();
    bl.arc(ball.cur.x, ball.cur.y, ball.r, 0, 2 * Math.PI, true);
    bl.closePath();
    bl.fill();

    bl.fillStyle = "rgba(255,0,0,0.3)";
    bl.beginPath();
    bl.arc(ball.next.x, ball.next.y, ball.r, 0, 2 * Math.PI, true);
    bl.closePath();
    bl.fill();

    var bpnt_r = {
      x: ball.cur.x - ball.v.y / norm(ball.v) * ball.r,
      y: ball.cur.y + ball.v.x / norm(ball.v) * ball.r
    }
    var bpnt_l = {
      x: ball.cur.x + ball.v.y / norm(ball.v) * ball.r,
      y: ball.cur.y - ball.v.x / norm(ball.v) * ball.r
    }
    bl.fillStyle = "rgb(0, 0, 255)";
    bl.beginPath();
    bl.arc(bpnt_l.x, bpnt_l.y, 4, 0, 2 * Math.PI, true);
    bl.closePath();
    bl.fill();
    bl.fillStyle = "rgb(255, 0, 0)";
    bl.beginPath();
    bl.arc(bpnt_r.x, bpnt_r.y, 4, 0, 2 * Math.PI, true);
    bl.closePath();
    bl.fill();

    for (var i = 0; i < reflectors.length; i++) {
      reflectors[i].hit();

      var checkLine = {
        s: {
          x: reflectors[i].sx,
          y: reflectors[i].sy
        },
        e: ball.next
      }
      var mirr = {
        x: checkLine.s.y - ball.next.y,
        y: ball.next.x - checkLine.s.x
      }
      var tv = {
        x: (checkLine.e.x - checkLine.s.x) / distance(checkLine.s, checkLine.e) * ball.r,
        y: (checkLine.e.y - checkLine.s.y) / distance(checkLine.s, checkLine.e) * ball.r
      }
      var endLine = {
        s: {
          x: checkLine.s.x + tv.x,
          y: checkLine.s.y + tv.y
        },
        e: {
          x: checkLine.s.x + mirr.x + tv.x,
          y: checkLine.s.y + mirr.y + tv.y
        }
      }
      tmp1.clearRect(0, 0, w, h);
      tmp1.beginPath();
      tmp1.strokeStyle = "red";
      tmp1.lineWidth = 1;
      tmp1.moveTo(checkLine.s.x, checkLine.s.y);
      tmp1.lineTo(checkLine.e.x, checkLine.e.y);
      tmp1.stroke();
      tmp1.closePath();

      tmp1.beginPath();
      tmp1.strokeStyle = "blue";
      tmp1.lineWidth = 1;
      tmp1.moveTo(endLine.s.x, endLine.s.y);
      tmp1.lineTo(endLine.e.x, endLine.e.y);
      tmp1.stroke();
      tmp1.closePath();

      checkLine = {
        s: {
          x: reflectors[i].ex,
          y: reflectors[i].ey
        },
        e: ball.next
      }
      mirr = {
        x: checkLine.s.y - ball.next.y,
        y: ball.next.x - checkLine.s.x
      }
      var tv = {
        x: (checkLine.e.x - checkLine.s.x) / distance(checkLine.s, checkLine.e) * ball.r,
        y: (checkLine.e.y - checkLine.s.y) / distance(checkLine.s, checkLine.e) * ball.r
      }
      endLine = {
        s: {
          x: checkLine.s.x + tv.x,
          y: checkLine.s.y + tv.y
        },
        e: {
          x: checkLine.s.x + mirr.x + tv.x,
          y: checkLine.s.y + mirr.y + tv.y
        }
      }
      tmp1.beginPath();
      tmp1.strokeStyle = "red";
      tmp1.lineWidth = 1;
      tmp1.moveTo(checkLine.s.x, checkLine.s.y);
      tmp1.lineTo(checkLine.e.x, checkLine.e.y);
      tmp1.stroke();
      tmp1.closePath();

      tmp1.beginPath();
      tmp1.strokeStyle = "blue";
      tmp1.lineWidth = 1;
      tmp1.moveTo(endLine.s.x, endLine.s.y);
      tmp1.lineTo(endLine.e.x, endLine.e.y);
      tmp1.stroke();
      tmp1.closePath();
      

      var checkLine = {
        s: {
          x: reflectors[i].sx,
          y: reflectors[i].sy
        },
        e: {
          x: reflectors[i].sx - ball.v.y / norm(ball.v) * ball.r,
          y: reflectors[i].sy + ball.v.x / norm(ball.v) * ball.r
        }
      }
      //tmp1.clearRect(0, 0, w, h);
      tmp1.beginPath();
      tmp1.strokeStyle = "#666666";
      tmp1.lineWidth = 1;
      tmp1.moveTo(checkLine.s.x, checkLine.s.y);
      tmp1.lineTo(checkLine.e.x, checkLine.e.y);
      tmp1.stroke();
      tmp1.closePath();

      checkLine = {
        s: {
          x: reflectors[i].ex,
          y: reflectors[i].ey
        },
        e: {
          x: reflectors[i].ex + ball.v.y / norm(ball.v) * ball.r,
          y: reflectors[i].ey - ball.v.x / norm(ball.v) * ball.r
        }
      }
      tmp1.beginPath();
      tmp1.strokeStyle = "#666666";
      tmp1.lineWidth = 1;
      tmp1.moveTo(checkLine.s.x, checkLine.s.y);
      tmp1.lineTo(checkLine.e.x, checkLine.e.y);
      tmp1.stroke();
      tmp1.closePath();
    }

    ball.cur = ball.next;
    ball.v.y += ball.down;
    ball.vNorm = norm(ball.v);
    ball.next = {
      x: ball.cur.x + ball.v.x,
      y: ball.cur.y + ball.v.y
    }
    
    
//==========================

    
//===========================
    //document.getElementById('temp').innerHTML = pointToLinePosition({x: cast.sx, y: cast.sy}, {x: cast.ex, y: cast.ey}, ball.cur);
  }, 1000/60); 
};