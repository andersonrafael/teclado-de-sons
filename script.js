function tocar_play(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != nul && elemento.localName === 'Audio') {
        elemento.play();
    }
    else {
        console.log("elemento não existe");
    }
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
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}





