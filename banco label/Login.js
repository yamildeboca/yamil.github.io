var usuarioLogueado = false;


function mostrarFormulario() {
    var contenidoDinamico = document.getElementById("contenidoDinamico");

    // Verifica si el usuario está logueado antes de mostrar el formulario de turnos
    if (usuarioLogueado) {
        if (contenidoDinamico) {
            contenidoDinamico.innerHTML = '<object type="text/html" data="formulario_turno.html" width="100%" height="500px"></object>';
        }
    } else {
        alert("Debe iniciar sesión para reservar un turno.");
    }

    return false;
}


function viajar(){
}    var userDisplay= document.getElementById("volver");
