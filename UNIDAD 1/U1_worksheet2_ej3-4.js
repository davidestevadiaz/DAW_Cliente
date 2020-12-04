var radio= parseInt(prompt("Introduce el radio del circulo"));
const PI=3.14159265359;
var area=PI*Math.pow(radio, 2);
var perimetro=2*PI*radio;
document.write("Perimetro del circulo = "+perimetro);
document.write("<br>Area del circulo = "+area);

//
var tempC = parseInt(prompt("Introduce la temperatura en grados Celsius"));
var tempF = (tempC * 9/5) + 32;
document.write(tempC+"°C is "+ tempF + "°F <br>");
var tempF2 = parseInt(prompt("Introduce la temperatura en grados Farenheit"));
var tempC2 =(tempF2-32) *5/9;
document.write(tempF2+"°F is "+ tempC2 + "°C");