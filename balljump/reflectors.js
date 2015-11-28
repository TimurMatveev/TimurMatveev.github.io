var reflectors = [];

var rl = new Reflector(2 * UNIT, 0, 2 * UNIT, h);
var rr = new Reflector(w - 2 * UNIT, h, w - 2 * UNIT, 0);
var rb = new Reflector(0, h - 2 * UNIT, w, h - 2 * UNIT);
rl.render();
rr.render();
rb.render();
reflectors.push(rl, rr, rb);