function ver() {
    var fila = document.getElementById('fila').value;
    var columna = document.getElementById('columna').value;

    if (fila === "1" && columna === "1") {
        limiparMensaje();
        const label1 = document.getElementById("1");
        const button1 = document.createElement("button");
        button1.textContent = "1";
        label1.replaceWith(button1);
        button1.onclick = aleatorio(button1);
        win();
    } else if (fila === "1" && columna === "2") {
        limiparMensaje();
        const label2 = document.getElementById("2");
        const button2 = document.createElement("button");
        button2.textContent = "2";
        button2.onclick = aleatorio(button2);
        label2.replaceWith(button2);
        win();
    } else if (fila === "1" && columna === "3") {
        limiparMensaje();
        const label3 = document.getElementById("3");
        const button3 = document.createElement("button");
        button3.textContent = "3";
        button3.onclick = aleatorio(button3);
        label3.replaceWith(button3);
        win();
    } else if (fila === "2" && columna === "1") {
        limiparMensaje();
        const label4 = document.getElementById("4");
        const button4 = document.createElement("button");
        button4.textContent = "4";
        button4.onclick = aleatorio(button4);
        label4.replaceWith(button4);
        win();
    } else if (fila === "2" && columna === "2") {
        limiparMensaje();
        const label5 = document.getElementById("5");
        const button5 = document.createElement("button");
        button5.textContent = "5";
        button5.onclick = aleatorio(button5);
        label5.replaceWith(button5);
        win();
    } else if (fila === "2" && columna === "3") {
        limiparMensaje();
        const label6 = document.getElementById("6");
        const button6 = document.createElement("button");
        button6.textContent = "6";
        button6.onclick = aleatorio(button6);
        label6.replaceWith(button6);
        win();
    } else if (fila === "3" && columna === "1") {
        limiparMensaje();
        const label7 = document.getElementById("7");
        const button7 = document.createElement("button");
        button7.textContent = "1";
        button7.onclick = aleatorio(button7);
        label7.replaceWith(button7);
        win();
    } else if (fila === "3" && columna === "2") {
        limiparMensaje();
        const label8 = document.getElementById("8");
        const button8 = document.createElement("button");
        button8.textContent = "1";
        button8.onclick = aleatorio(button8);
        label8.replaceWith(button8);
        win();
    } else if (fila === "3" && columna === "3") {
        limiparMensaje();
        const label9 = document.getElementById("9");
        const button9 = document.createElement("button");
        button9.textContent = "1";
        button9.onclick = aleatorio(button9);
        label9.replaceWith(button9);
        win();
    } else {
        error("Celda Incorrecta - Fuera de rango");
    }


}

function limiparMensaje() {
    const error = document.getElementById("error");
    error.style.display = "none";
}


function error(msg) {
    const error = document.getElementById("error");
    error.innerText = msg
    error.style.display = "block";

}

function aleatorio(boton) {
    const n1 = Math.floor(Math.random() * 100) + 1;
    const n2 = Math.floor(Math.random() * 100) + 1;
    const suma = n1 + n2;

    if (suma % 2 === 0) {
        return boton.textContent = "O";
    } else {
        return boton.textContent = "X";
    }
}

function win() {
    if (button1.textContent === button2.textContent === button3.textContent) {
        error("Felicidades has ganado");
    } else if (button1.textContent === button4.textContent === button7.textContent) {
        error("Felicidades has ganado");
    } else if (button1.textContent === button5.textContent === button9.textContent) {
        error("Felicidades has ganado");
    } else if (button2.textContent === button5.textContent === button8.textContent) {
        error("Felicidades has ganado");
    } else if (button3.textContent === button6.textContent === button9.textContent) {
        error("Felicidades has ganado");
    } else if (button3.textContent === button5.textContent === button7.textContent) {
        error("Felicidades has ganado");
    } else if (button4.textContent === button5.textContent === button6.textContent) {
        error("Felicidades has ganado");
    } else if (button7.textContent === button8.textContent === button9.textContent) {
        error("Felicidades has ganado");
    }
}