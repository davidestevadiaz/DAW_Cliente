class Vista{
    constructor(arrayNotas,nota,contenedor)
    {
        this.arrayNotas=arrayNotas;
        this.nota=nota;
        this.contenedor=contenedor;
        this.section=document.createElement("section");
        this.section.id=arrayNotas.length-1;
        this.input=document.createElement("input");
        this.contenidoTextArea=document.createElement("textarea");
        
        this.botonBorrar=document.createElement("button");
    }
    
    disposicionInternaNotas()
    {
        this.section.appendChild(this.input);
        this.input.type="text";
        this.input.value=this.nota.titulo;
        this.contenidoTextArea.appendChild(document.createTextNode(this.nota.contenido));
        this.section.appendChild(this.contenidoTextArea);
        this.botonBorrar.appendChild(document.createTextNode("Borrar"));
        this.section.appendChild(this.botonBorrar);
        this.contenedor.appendChild(this.section);
    }

    eventoBorrar()
    {
        this.section.remove();
    }
    
}

var titulo,contenido,fecha,contenedor,notaEnMovimiento,vistaNotas;
var pulsacion=false;
var notas={"listaNotas":[]};
var x=20;
var y;
var estilo;

window.onload=()=>
    {
    var boton=document.getElementById("botonAnadir");
    boton.addEventListener("click",anadirNota);

    contenedor=document.getElementById("tablero");
    
    if(JSON.parse(localStorage.getItem("estiloJSON"))==null)
        estilo=false;
    else
        estilo=JSON.parse(localStorage.getItem("estiloJSON"));
    
    y=document.querySelector("header").getBoundingClientRect().height+20;
    recibirJSON();    
    }

    function eventosNotas(vistaNotas,nota)
    {
    
        vistaNotas.botonBorrar.addEventListener("click",()=>
            {
            notas.listaNotas.splice(vistaNotas.section.id,1);
            
            vistaNotas.eventoBorrar();

            localStorage.setItem("listaNotas",JSON.stringify(notas.listaNotas));
            })
    }

function anadirNota()
{
    titulo=document.getElementById("titulo").value;
    contenido=document.getElementById("textarea").value;
    fecha=Date.now();
    notas.listaNotas.push({"titulo":titulo,"contenido":contenido,"fecha":fecha});

    let notaActual=notas.listaNotas[notas.listaNotas.length-1];
   
    if(estilo){
        vistaNotas=new Vista(notas.listaNotas,notaActual,contenedor);
        vistaNotas.disposicionInternaNotas();
        vistaNotas.colocarNotas2();
    }
        else
        {
        vistaNotas=new Vista(notas.listaNotas,notaActual,contenedor);
        vistaNotas.disposicionInternaNotas();
        vistaNotas.colocarNotas1();
        }

    eventosNotas(vistaNotas,notaActual);

    vistaNotas.section.addEventListener("click",pulsarNota);
        
    limpiar();
    localStorage.setItem("listaNotas",JSON.stringify(notas.listaNotas));
}

function limpiar()
{
    document.getElementById("titulo").value="";
    document.getElementById("textarea").value="";
}

function recibirJSON()
{
    let notasJSON=JSON.parse(localStorage.getItem("listaNotas"));
    if(JSON.parse(localStorage.getItem("listaNotas"))!=null)
    {
        notas.listaNotas=notasJSON;
        recorrerNotas(notas.listaNotas);
    }
}

