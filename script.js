function tocar_play(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;
//enquanto
while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //tamplate string
    const idAudio = '#som_${instrmento}';
    tecla.onclick = function () {
        tocar_play(idAudio);
    }
}
contador = contador + 1;



