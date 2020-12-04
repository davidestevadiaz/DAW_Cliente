var nota=parseInt(prompt("Introduce nota [0-10]"));

if(nota>=0 && nota<5)
    document.write("Suspenso!");
else if(nota>=5 && nota<7)
    document.write("Aprobado");
else if(nota>=7 && nota<9)
    document.write("Notable");
else if(nota>=9 && nota<10)
    document.write("Sobresaliente");
else
    document.write("<h4>Nota no válida [0-10]</h4>");