'use strict'

// selecciono la caja donde se va mostrar el importe a abonar
var precioAbonar = document.querySelector("#importeAbonar");
//oculto la caja donde se van a mostrar los datos (importe final)
precioAbonar.style.display = "none";

function validar() {
    console.log("Evento submit capturado para BOTON RESUMEN");
    
    // con value obtengo los valores dentro
    var nombre = document.querySelector("#nombre").value;
    var apellido = document.querySelector("#apellido").value;
    var email = document.querySelector("#email").value;

    // convierto el string ingresado a numero con parseInt, también puedo hacerlo a través de Number
    //cantidadSeleccionada = Number(cantidadSeleccionada);
    var cantidadSeleccionada = parseInt(document.querySelector("#cantidad").value);
    // compruebo en consola que tipo de dato es cantidad, para validar la conversión realizada
    console.log("Cantidad es: "+typeof(cantidadSeleccionada));

    // ----- VALIDACIONES PARA LOS CAMPOS
    if (nombre.trim() == null || nombre.trim().length == 0) {
        // Mostrar que el nombre no es válido
        document.querySelector("#mensajeNombre").innerHTML = "El nombre no es válido";
        document.querySelector("#mensajeNombre").style.color = "red";
        return false;
    } else {
        // si el nombre es correcto oculto el mensaje de error
        document.querySelector("#mensajeNombre").style.display = "none";
    }

    if (apellido.trim() == null || apellido.trim().length == 0) {
        document.querySelector("#mensajeApellido").innerHTML = "El apellido no es válido";
        document.querySelector("#mensajeApellido").style.color = "red";
        return false;
    } else {
        // si el apellido es correcto oculto el mensaje de error
        document.querySelector("#mensajeApellido").style.display = "none";
    }
    
    if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|ar)+$/.test(email)))
    {
        document.querySelector("#mensajeCorreo").innerHTML = "La dirección de mail no es válida";
        document.querySelector("#mensajeCorreo").style.color = "red";
        return false;
    } else {
        // si el mail es correcto oculto el mensaje de error
        document.querySelector("#mensajeCorreo").style.display = "none";
    }

    if(cantidadSeleccionada <= 0 || isNaN(cantidadSeleccionada)) 
    {
        document.querySelector("#mensajeCantidad").innerHTML = "Debe ingresar al menos 1";
        document.querySelector("#mensajeCorreo").style.color = "red";
        //document.getElementById('mensajeCantidad').innerHTML = "Debe ingresar al menos 1";
        return false;
    } else {
        document.querySelector("#mensajeCantidad").style.display = "none";
    }
    
    // Muestro la caja con el importe final en el navegador
    precioAbonar.style.display = "block";

    // --- CÁLCULO PARA EL VALOR DE LA ENTRADA SEGÚN LA CANTIDAD SELECCIONADA
    // Como estoy seleccionando los índices, comienzo seleccionando el 0
    var indice = document.getElementById("opciones").selectedIndex;
    let costo = 200;

    if(indice == 0) {
        precioAbonar.innerHTML = "Total a Pagar:$ "+cantidadSeleccionada * (costo * 0.2);
        // console.log("Precio Final: "+precioAbonar);
    } else if(indice == 1) {
        precioAbonar.innerHTML = "Total a Pagar:$ "+cantidadSeleccionada * (costo * 0.5);
        // console.log("Precio Final: "+precioAbonar);
    } else if(indice == 2) {
        precioAbonar.innerHTML = "Total a Pagar:$ "+cantidadSeleccionada * (costo * 0.85);
        // console.log("Precio Final: "+precioAbonar);
    } else {
        precioAbonar.innerHTML = "";
    }

    return true;
}

// Eliminar datos o limpiar campos en el formulario
function eliminar() {
    console.log("Evento submit capturado para BOTON ELIMINAR");
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("email").value="";
    document.getElementById("cantidad").value="";
    document.getElementById("importeAbonar").value=""
}

