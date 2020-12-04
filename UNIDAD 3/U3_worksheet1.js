//2. Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.Para ello
//define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6.
//document.write("El número aleatorio es: "+lanzamiento());
function lanzamiento(){
  var num = Math.random()*(7-1)+1;
  return parseInt(num);
}


//3. Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
//modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
//de ocurrencias de cada uno de los valores.
var num1=0,num2=0,num3=0,num4=0,num5=0,num6=0;
function lanzamiento(){
  var num = Math.random()*(7-1)+1;
  return parseInt(num);
}
for(var i =0;i<6000;i++){
  var valor= lanzamiento();
  if( valor==1){ num1=num1+1;
  }else if(valor==2){ num2=num2+1;
  }else if(valor==3){ num3=num3+1;
  }else if(valor==4){ num4=num4+1;
  }else if(valor==5){ num5=num5+1;
  }else if(valor==6){ num6=num6+1;
  }
}
document.write("El número 1 ha salido "+num1+" veces<br>");
document.write("El número 2 ha salido "+num2+" veces<br>");
document.write("El número 3 ha salido "+num3+" veces<br>");
document.write("El número 4 ha salido "+num4+" veces<br>");
document.write("El número 5 ha salido "+num5+" veces<br>");
document.write("El número 6 ha salido "+num6+" veces<br>");


//6. Crea una función para calcular potencias de un modo recursivo.
document.write("El resultado final da: "+calcupotencia(5,3));
function calcupotencia(base,exponente){
  if(exponente==1){
    return base;
  }else{
    return base *= calcupotencia(base,exponente-1);
  }
}


//7. Crea una función que calcule el factorial de un número dado. Para comprobarlo,
//diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10.

document.write("El factorial es : "+factorialnumdado(5));

function factorialnumdado(num){
  if(num==0){
    return 1;
  }else{
    return num * factorialnumdado(num-1);
  }
}