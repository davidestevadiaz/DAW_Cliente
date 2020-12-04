//Fecha de hoy
var fechaHoy=new Date();
document.write("Fecha de hoy: 2"+fechaHoy+"<br>");

//Fecha dentro de 85 días
var dias85=85*24*60*60*1000;
document.write("Fecha dentro de 85 dias: "+new Date(fechaHoy.getTime()+dias85)+"<br>");

//Fecha dentro de 2 años
var años2=730*24*60*60*1000;
document.write("Fecha dentro de 2 años: "+new Date(fechaHoy.getTime()+años2)+"<br>");

//Fecha 187 días atrás
var dias85=187*24*60*60*1000;
document.write("Fecha hace 187 dias: "+new Date(fechaHoy.getTime()-dias85)+"<br>");

//Fecha
var fechaResto=new Date(fechaHoy.getTime()+dias85)-new Date(fechaHoy.getTime()-dias85);
document.write("Fecha85 - fecha187: "+fechaResto+"<br>");

//Fecha de ayer
var horas24=24*60*60*1000;
document.write("Fecha de ayer: "+new Date(fechaHoy.getTime()-horas24)+"<br>");

