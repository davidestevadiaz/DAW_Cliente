//1
var numaleatorio = Math.round(Math.random());
var numaleatorio2 = Math.round(Math.random() * (200 - 100) + 100);
document.write("Primer número aleatorio: "+numaleatorio+"<br>");
document.write("Segundo número aleatorio: "+numaleatorio2+"<br>");
var num1 = prompt("Introduce el primer número: ");
var num2 = prompt("Introduce el segundo número: ");
var num3 = Math.round(Math.random() * (parseInt(num1) - parseInt(num2)));
var numaleatorio3 = parseInt(num3) +parseInt(num2);
document.write("Tercer número aleatorio: "+numaleatorio3+"<br>");


//5
  var valora =prompt("Dame el valor de a: ");
  var valorb =prompt("Dame el valor de b: ");
  var valorc =prompt("Dame el valor de c: ");
  var a= parseInt(valora);
  var b= parseInt(valorb);
  var c = parseInt(valorc);
  var bcuadrado=b*b;
  var operacionraiz=Math.sqrt(bcuadrado-(4*a*c));
  var operacionfinal1= (b*-1 + operacionraiz)/2*a;
  var operacionfinal2= (b*-1 - operacionraiz)/2*a;
  if(isNaN(operacionfinal1)){
    alert("NO TIENE RESULTADO CUIDADO BRO");
  }else{
    document.write("Un resultado es: "+operacionfinal1+"<br>");
    document.write("Otro resultado es: "+operacionfinal2);
  }


//7
var numaleatorio = Math.round(Math.random() * (50));
document.write("<table border = 0 cellspacing =2 bgcolor=black >");
for(var j =1;j<=parseInt(numaleatorio);j++){
  document.write("<tr bgcolor=white height=50>")
  for(var i =1;i<=2;i++){
    if(i%2!=0){
      document.write("<td width =50>"+j+"</td>");
    }else{
      document.write("<td width =50>"+Math.sin(j)+"</td>");
    }
  }
  document.write("</tr>");
}
document.write("</table>");


//8

var numaleatorio = Math.round(Math.random() * (4));
if(numaleatorio==1){
  document.write("<img src=https://canalhistoria.es/wp-content/uploads/2019/06/Francisco_Franco_1930.png>");
}else if(numaleatorio==2){
  document.write("<img src=https://senderosdelahistoria.files.wordpress.com/2007/06/stalin-1.jpg>");
}else{
  document.write("<img src=https://ichef.bbci.co.uk/news/640/cpsprodpb/8D34/production/_111984163_gettyimages-515168000.jpg>");
}