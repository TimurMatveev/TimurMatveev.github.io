var Reflector = function(s, e) {
  this.sx = s.x;
  this.sy = s.y;
  this.ex = e.x;
  this.ey = e.y;

  this.vec = {
    x: e.x - s.x,
    y: e.y - s.y
  };
  this.l = distance(s, e);
  this.normal = {
    x: this.vec.y / this.l,
    y: -this.vec.x / this.l
  };
  this.mir = {
    s: {
      x: s.x + this.normal.x * ball.r,
      y: s.y + this.normal.y * ball.r,  
    },
    e: {
      x: e.x + this.normal.x * ball.r,
      y: e.y + this.normal.y * ball.r,  
    }
  };
  this.dempher = 0.7;
  
  

  
  
  this.render = function() {
    var n = Math.round(this.l / UNIT / 2);

    reflect.beginPath();
    reflect.strokeStyle = "red";
    reflect.lineWidth = 1;
    reflect.moveTo(this.mir.s.x, this.mir.s.y);
    reflect.lineTo(this.mir.e.x, this.mir.e.y);
    reflect.stroke();
    reflect.closePath();

    reflect.beginPath();
    reflect.strokeStyle = "#000000";
    reflect.lineWidth = UNIT / 3 * 2;
    reflect.lineCap = "round";
    reflect.moveTo(s.x, s.y);
    reflect.lineTo(e.x, e.y);
    reflect.stroke();
    reflect.closePath();

    for (var i = 1; i < n; i++) {
      var s_x = s.x + i / n * (e.x - s.x),
          s_y = s.y + i / n * (e.y - s.y),
          e_x = s_x - this.normal.x * UNIT,
          e_y = s_y - this.normal.y * UNIT;
      reflect.beginPath();
      reflect.lineCap = "round";
      reflect.moveTo(s_x, s_y);
      reflect.lineTo(e_x, e_y);
      reflect.stroke();
      reflect.closePath();
    }
  };

  this.reflect = function(mirror) {
    var vec = {
      x: ball.cur.x - mirror.s.x,
      y: ball.cur.y - mirror.s.y
    }, mirvec = {
      x: mirror.e.x - mirror.s.x,
      y: mirror.e.y - mirror.s.y
    }
    factor = scalar(vec, mirvec) / scalar(mirvec, mirvec);

    ball.cur.x = 2 * factor * mirvec.x - vec.x + this.mir.s.x;
    ball.cur.y = 2 * factor * mirvec.y - vec.y + this.mir.s.y;

    factor = scalar(ball.v, mirvec) / scalar(mirvec, mirvec);
    ball.v.x = (2 * factor * mirvec.x - ball.v.x);
    ball.v.y = (2 * factor * mirvec.y - ball.v.y);

    ball.next.x = ball.cur.x + ball.v.x;
    ball.next.y = ball.cur.y + ball.v.y;
    if (norm(ball.v) > 0.5) {
      ball.v.x *= this.dempher;
      ball.v.y *= this.dempher;
    }
//========================





//for START



/*
    var im = {};
var mirror = reflectors[0].mir;
var vec = {
      x: ball.cur.x - reflectors[0].sx,
      y: ball.cur.y - reflectors[0].sy
    }
var factor = scalar(vec, mirror) / scalar(mirror, mirror);
var deleteIt = ball;
var refvec = {};

    refvec.x = 2 * factor * mirror.x - vec.x;
    refvec.y = 2 * factor * mirror.y - vec.y;
    im.x = refvec.x + reflectors[0].sx;
    im.y = refvec.y + reflectors[0].sy;
    */
  }

  this.hit = function() {
    if (pointToLinePosition(ball.cur, ball.next, this.mir.s) !== pointToLinePosition(ball.cur, ball.next, this.mir.e)) {
      if (pointToLinePosition(this.mir.s, this.mir.e, ball.cur) === 1 && pointToLinePosition(this.mir.s, this.mir.e, ball.next) !== 1) {
        this.reflect(this.mir);
      } 
    } else {
      /*var bpnt_r = {
        x: ball.cur.x - ball.v.y / norm(ball.v) * ball.r,
        y: ball.cur.y + ball.v.x / norm(ball.v) * ball.r
      }
      var bpnt_l = {
        x: ball.cur.x + ball.v.y / norm(ball.v) * ball.r,
        y: ball.cur.y - ball.v.x / norm(ball.v) * ball.r
      }
      var npnt_r = {
        x: bpnt_r.x + ball.v.x,
        y: bpnt_r.y + ball.v.y
      }
      var npnt_l = {
        x: bpnt_l.x + ball.v.x,
        y: bpnt_l.y + ball.v.y
      }*/
      

      var checkP = {
        x: s.x - ball.v.y / norm(ball.v) * ball.r,
        y: s.y + ball.v.x / norm(ball.v) * ball.r
      }
      var temp = ball;
      if (PTLP(ball.cur, ball.next, s) !== PTLP(ball.cur, ball.next, checkP) &&
          PTLP(s, checkP, ball.cur) !== PTLP(s, checkP, ball.next)) {
        //alert('left rect hit S');
        var nrm = {
          x: -ball.v.y / norm(ball.v) * ball.r,
          y: ball.v.x / norm(ball.v) * ball.r
        }
        var h = 2 * triangleSquare(ball.cur, ball.next, s) / distance(ball.cur, ball.next)
        var mirVect = {
          x: (-h * nrm.y + Math.sqrt(h * nrm.y - (nrm.x * nrm.x + nrm.y * nrm.y) * (h * h - nrm.x * nrm.x))) / (nrm.x * nrm.x + nrm.y * nrm.y),
          y: (h + nrm.y * this.x) / nrm.x
        }
      }
      checkP = {
        x: s.x + ball.v.y / norm(ball.v) * ball.r,
        y: s.y - ball.v.x / norm(ball.v) * ball.r
      }
      if (PTLP(ball.cur, ball.next, s) !== PTLP(ball.cur, ball.next, checkP) &&
          PTLP(s, checkP, ball.cur) !== PTLP(s, checkP, ball.next)) {
        alert('right rect hit S');
      }
      checkP = {
        x: e.x + ball.v.y / norm(ball.v) * ball.r,
        y: e.y - ball.v.x / norm(ball.v) * ball.r
      }
      if (PTLP(ball.cur, ball.next, e) !== PTLP(ball.cur, ball.next, checkP) &&
          PTLP(e, checkP, ball.cur) !== PTLP(e, checkP, ball.next)) {
        alert('right rect hit E');
      }
      checkP = {
        x: e.x - ball.v.y / norm(ball.v) * ball.r,
        y: e.y + ball.v.x / norm(ball.v) * ball.r
      }
      if (PTLP(ball.cur, ball.next, e) !== PTLP(ball.cur, ball.next, checkP) &&
          PTLP(e, checkP, ball.cur) !== PTLP(e, checkP, ball.next)) {
        alert('left rect hit E');
      }
/*
      var checkLine = {
        s: s,
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
      if (distance(s, ball.next) < ball.r) {
        this.reflect(endLine);
      }




      checkLine = {
        s: e,
        e: ball.next
      }
      mirr = {
        x: checkLine.s.y - ball.next.y,
        y: ball.next.x - checkLine.s.x
      }
      tv = {
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
      if (distance(e, ball.next) < ball.r) {
        this.reflect(endLine);
      }*/
    }
  }
}