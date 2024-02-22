function tocar_play(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
//enquanto
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocar_play;
    contador = contador + 1;
    console.log(contador);
}



