// Pantalla
function mostrar(valor) {
    var pantalla = document.getElementById('display');

    if (pantalla.textContent === '0') {
        pantalla.textContent = valor;
    } else {
        pantalla.textContent += valor;
    }
}

// Operaciones
function evaluarOperacion() {
    var total = eval(document.getElementById('display').textContent);
    var pantalla = document.getElementById('display');

    pantalla.textContent = total;

}

// Borrado

function borrarTodo() {
    var c = document.getElementById('display');
    c.innerText = c.innerText.slice(0, -99);
    c.innerText = '0';
}

function borrarCaracteres() {
    var c = document.getElementById('display');
    c.textContent = c.textContent.slice(0, -1);

    if (c.textContent.length === 0) {
        c.textContent = '0';
    }
}

