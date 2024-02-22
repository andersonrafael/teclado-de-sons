function tocar_play() {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelectorAll('.tecla').onclick = tocar_play;

