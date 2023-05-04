let contador = 0;
let intervalo;
let vistaContador = document.getElementById("here");

const actualizarContador = () => {
    //vistaContador.innerText = contador;
    if (contador < 10) {
        vistaContador.innerText = "0" + contador;

    } else {
        vistaContador.innerText = contador;
    }
    contador--;
}

const iniciar = () => {
    let valor = parseInt(seconds.value);
    vistaContador.innerText = valor;
    contador = valor;
    intervalo = setInterval(actualizarContador, 1000) //se le pasa funcion actualizarContador --- 1000milisegundos = 1 seg
}

const cancelar = () => {
    clearInterval(intervalo);
    vistaContador.innerText = "00"
}


