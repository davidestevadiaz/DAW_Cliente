function NuevoCorreo(){
    var xhttp =new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
    if(this.readyState == 4 && this.status== 200){
        maquetaRespuesta(JSON.parse(this.responseText));
     }   
    };
    xhttp.open("GET", "correo.json", true);
    xhttp.send();
}

function maquetaRespuesta(objetoJSON)
{
    for (i=0; i<objetoJSPN.listaCorreos.length; i++);
    console.log(objetoJSON.listaCorreos[i].name);

}