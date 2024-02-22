function tocar_play(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');

//enquanto
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //tamplate string
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function () {
        tocar_play(idAudio);
    }

}




