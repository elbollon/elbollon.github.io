document.getElementById("tipoOrden").addEventListener("change", mostrar);

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