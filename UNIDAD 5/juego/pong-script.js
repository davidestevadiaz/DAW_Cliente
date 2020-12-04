var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 650;
canvas.height = 400;
var puntuacion1 = 0;
var puntuacion2 = 0;
var keys = {};
window.addEventListener('keydown', function (e) {
keys[e.keyCode] = true;
e.preventDefault();
});
window.addEventListener('keyup', function (e) {
delete keys[e.keyCode];
});
function Box(opciones) {
this.x = opciones.x || 10;
this.y = opciones.y || 10;
this.width = opciones.width || 40;
this.height = opciones.height || 50;
this.color = opciones.color || '#FFFFFF';
this.speed = opciones.speed || 2;
this.movimiento = opciones.movimiento || 2;
}
var jugador1 = new Box({
x: 10,
y: 200,
width: 15,
height: 80,
color: '#FFFFFF',
movimiento: 2
});
var jugador2 = new Box({
x: 625,
y: 100,
width: 15,
height: 80,
color: '#FFFFFF',
movimiento: 2
});
var Bola = new Box({
x: (canvas.width / 2),
y: (canvas.height / 2),
width: 15,
height: 15,
color: '#FF0000',
speed: 1,
movimiento: 1
})
function input() {
if (87 in keys) {
if (jugador1.y - jugador1.movimiento > 0) {
    jugador1.y -= jugador1.movimiento;
}
} else if (83 in keys) {
if (jugador1.y + jugador1.height + jugador1.movimiento < canvas.height) {
    jugador1.y += jugador1.movimiento;
}
}
if (38 in keys) {
if (jugador2.y - jugador2.movimiento > 0) {
    jugador2.y -= jugador2.movimiento;
}
} else if (40 in keys) {
if (jugador2.y + jugador2.height + jugador2.movimiento < canvas.height) {
    jugador2.y += jugador2.movimiento;
}
}
}
function drawBox(box) {
ctx.fillStyle = box.color;
ctx.fillRect(box.x, box.y, box.width, box.height);
}
function Puntuacion1() {
ctx.font = "20px Arial";
ctx.fillStyle = "rgb(255,255,255)";
var str1 = puntuacion1;
ctx.fillText(str1, (canvas.width/2) - 50, 30);
}
function Puntuacion2() {
ctx.font = "20px Arial";
ctx.fillStyle = "rgb(255,255,255)";
var str2 = puntuacion2;
ctx.fillText(str2, (canvas.width / 2) + 50, 30);
}
function Rebote() {
if (((Bola.y+Bola.movimiento) <= 0) || ((Bola.y+Bola.movimiento+Bola.height) >= canvas.height)){
    Bola.movimiento = Bola.movimiento * -1;
    Bola.y += Bola.movimiento;
    Bola.x += Bola.speed;
} else {
    Bola.x += Bola.speed;
    Bola.y += Bola.movimiento
}
Colision();
}
function Colision() {
if (((Bola.x + Bola.speed <= jugador1.x + jugador1.width) && (Bola.y + Bola.movimiento > jugador1.y) && (Bola.y + Bola.movimiento <= jugador1.y + jugador1.height))
|| ((Bola.x + Bola.width + Bola.speed >= jugador2.x) && (Bola.y + Bola.movimiento > jugador2.y) && (Bola.y + Bola.movimiento <= jugador2.y + jugador2.height))) {
    Bola.speed = Bola.speed * -1;
} else if (Bola.x + Bola.speed < jugador1.x) {
puntuacion2 += 1;
Bola.speed = Bola.speed * -1;
Bola.x = 100 + Bola.speed;
Bola.y += Bola.movimiento;
} else if (Bola.x + Bola.speed > jugador2.x + jugador2.width) {
puntuacion1 += 1;
Bola.speed = Bola.speed * -1;
Bola.x = 500 + Bola.speed;
Bola.y += Bola.movimiento;
} else {
Bola.x += Bola.speed;
Bola.y += Bola.movimiento;
}
draw();
}
function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
Puntuacion1();
Puntuacion2();
drawBox(jugador1);
drawBox(jugador2);

drawBox(Bola);
}
function loop() {
Rebote();
input(jugador1);
input(jugador2);
window.requestAnimationFrame(loop);
}
loop();