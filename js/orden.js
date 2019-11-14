document.getElementById("tipoOrden").addEventListener("change", mostrar);
document.getElementById("botonEnviar").addEventListener("click", enviar);

function mostrar(){
    var select = document.getElementById("tipoOrden");
    if(select.value=="elegir"){
        var elegir=document.getElementById("pastelAElegir");
        var personalizado=document.getElementById("pastelPersonalizado");
        var boton= document.getElementById("seccionBoton");
        elegir.classList.remove("d-none");
        personalizado.classList.add("d-none");
        boton.classList.remove("d-none");
    }else if(select.value=="personalizado"){
        var elegir=document.getElementById("pastelAElegir");
        var personalizado=document.getElementById("pastelPersonalizado");
        var boton= document.getElementById("seccionBoton");
        elegir.classList.add("d-none");
        personalizado.classList.remove("d-none");
        boton.classList.remove("d-none");
    }else{
        var elegir=document.getElementById("pastelAElegir");
        var personalizado=document.getElementById("pastelPersonalizado");
        var boton= document.getElementById("seccionBoton");
        elegir.classList.add("d-none");
        personalizado.classList.add("d-none");
        boton.classList.add("d-none");
    }
}

function enviar(){
    var select = document.getElementById("selectPastel");
    var nombre = document.getElementById("nombreCliente");
    var comentarios = document.getElementById("comentariosExtra");
    var nombrePer = document.getElementById("nomCliente");
    var descPastel = document.getElementById("descripcionPastel");

    if((select.value!="seleccion" && nombre.value!="" && comentarios.value!="") || (nombrePer.value!="" && descPastel.value!="")){
        alert("La orden fue enviada correctamente");
        var elegir=document.getElementById("pastelAElegir");
        var personalizado=document.getElementById("pastelPersonalizado");
        var boton= document.getElementById("seccionBoton");

        elegir.classList.add("d-none");
        personalizado.classList.add("d-none");
        boton.classList.add("d-none");
        nombre.value="";
        comentarios.value="";
        nombrePer.value="";
        descPastel.value="";
    }else{
        alert("Llena todos los campos antes de enviar la orden");
    }
}