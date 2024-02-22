function tocar_play() {
    document.querySelector('#som_tecla_clap').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
//enquanto
while (contador < 8) {
    listaDeTeclas[contador].onclick = tocar_play;
    contador = contador + 1;
    console.log(contador);
}



