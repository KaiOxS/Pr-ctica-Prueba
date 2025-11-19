function guardar() {
    validacion();
}

function validacion() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var edad = document.getElementById('edad').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (nombre === "") {
        limpiarMensaje();
        mostrarMensaje("Nombre necesario");
        mostrarAsterisco("error_nombre");
        return;
    }

    if (apellido === "") {
        limpiarMensaje();
        mostrarMensaje("Apellido necesario");
        mostrarAsterisco("error_apellido");
        return;
    }

    if (edad === "") {
        limpiarMensaje();
        mostrarMensaje("Edad necesaria");
        mostrarAsterisco("error_edad")
        return;
    }

    if (email === "") {
        limpiarMensaje();
        mostrarMensaje("E-mail necesario");
        mostrarAsterisco("error_email");
    }

    if (password === "") {
        limpiarMensaje();
        mostrarMensaje("Password necesario");
        mostrarAsterisco("error_password");
        return;
    }

}

function mostrarMensaje(msg) {
    var mensaje = document.getElementById('mensaje_error');
    mensaje.textContent = msg;
    mensaje.style.display = "block";
}

function limpiarMensaje() {
    var mensaje = document.getElementById('mensaje_error');
    mensaje.textContent = "";
    mensaje.style.display = "none";

    const erroresAstericos = document.querySelectorAll('.asterisco');
    erroresAstericos.forEach(e => e.innerText = '');
}

function mostrarAsterisco(idElemento) {
    document.getElementById(idElemento).textContent = "*";
}