var layer1 = document.createElement('canvas'),
    layer2 = document.createElement('canvas'),
    layer3 = document.createElement('canvas'),
    layer4 = document.createElement('canvas'),
    bg = layer1.getContext('2d'),
    bl = layer2.getContext('2d'),
    wav = layer3.getContext('2d'),
    reflect = layer4.getContext('2d');

layer1.setAttribute('width', w);
layer1.setAttribute('height', h);
layer1.style.background = '#eee';
layer1.style.position = 'absolute';
layer1.style.top = '0';
layer1.style.left = '0';
layer1.style.zIndex = '-2';

layer2.setAttribute('width', w);
layer2.setAttribute('height', h);
layer2.style.position = 'absolute';
layer2.style.top = '0';
layer2.style.left = '0';
layer2.style.zIndex = '0';

layer3.setAttribute('width', w);
layer3.setAttribute('height', h);
layer3.style.position = 'absolute';
layer3.style.top = '0';
layer3.style.left = '0';
layer3.style.zIndex = '-1';

layer4.setAttribute('width', w);
layer4.setAttribute('height', h);
layer4.style.position = 'absolute';
layer4.style.top = '0';
layer4.style.left = '0';
layer4.style.zIndex = '-1';

document.body.insertBefore(layer1, document.body.firstChild);
document.body.insertBefore(layer2, document.body.firstChild);
document.body.insertBefore(layer3, document.body.firstChild);
document.body.insertBefore(layer4, document.body.firstChild);


var tl = document.createElement('canvas');
tl.setAttribute('width', w);
tl.setAttribute('height', h);
tl.style.position = 'absolute';
tl.style.top = '0';
tl.style.left = '0';
tl.style.zIndex = '101';
document.body.insertBefore(tl, document.body.firstChild);
tmp1 = tl.getContext('2d');