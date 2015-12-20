var reflectors = [];

var rl = new Reflector({x: 2 * UNIT, y: 0}, {x: 2 * UNIT, y: h});
var rr = new Reflector({x: w - 2 * UNIT, y: h}, {x: w - 2 * UNIT, y: 0});
var rb = new Reflector({x: 0, y: h - 2 * UNIT}, {x: w, y: h - 2 * UNIT});
var cast = new Reflector({x: 213, y: 400}, {x: 400, y: 360});
rl.render();
rr.render();
rb.render();
cast.render();
reflectors.push(rl, rr, rb, cast);
