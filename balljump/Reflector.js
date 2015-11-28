var Reflector = function(sx, sy, ex, ey) {
  var l = distance(sx, sy, ex, ey);
  this.v = {
    x: ex - sx,
    y: ey - sy
  };
  this.k = 0.6;
  this.render = function() {
    var n = Math.round(l / UNIT),
        norm = {
          x: -this.v.y / l * 2,
          y:  this.v.x / l * 2
        };
    reflect.beginPath();
    reflect.strokeStyle = "#000000";
    reflect.lineWidth = UNIT / 3 * 2;
    reflect.lineCap = "round";
    reflect.moveTo(sx, sy);
    reflect.lineTo(ex,ey);
    reflect.stroke();
    reflect.closePath();
    for (var i = 1; i < 4*n; i++) {
      var s_x = sx + i / n * (ex - sx) / 4,
          s_y = sy + i / n * (ey - sy) / 4,
          e_x = s_x + norm.x,
          e_y = s_y + norm.y;
      reflect.beginPath();
      reflect.lineCap = "round";
      reflect.moveTo(s_x, s_y);
      reflect.lineTo(e_x, e_y);
      reflect.stroke();
      reflect.closePath();
    }
  };

  this.reflect = function(vector) {
    var factor = scalar(vector, this.v) / scalar(this.v, this.v);
    return {
      x: this.k * (2 * factor * this.v.x - vector.x),
      y: this.k * (2 * factor * this.v.y - vector.y)
    }
  }

  this.isHit = function() {
    var t = {
      x: ball.x + ball.vx,
      y: ball.y + ball.vy
    }
    var changePos = function() {
      if (pointToLinePosition({x: sx, y: sy}, {x: ex, y: ey}, ball) === -1 && pointToLinePosition({x: sx, y: sy}, {x: ex, y: ey}, t) !== -1) {
        return true;
      }
      return false;
    }
    var ts = Math.abs(triangleSquare({x: sx, y: sy}, {x: ex, y: ey}, t));
    var vcxv = ts / (l * UNIT);
    if (vcxv <= ball.r || changePos()) {
      return true;
    }
    return false;
  }
}