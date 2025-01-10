// Elementos
const musicOn = document.getElementById("music-on");
const musicOff = document.getElementById("music-off");
const backgroundMusic = document.getElementById("background-music");
const clickSoundOn = document.getElementById("click-sound-on");
const clickSoundOff = document.getElementById("click-sound-off");

// Inicializar estado de la música
let isMusicPlaying = false;

// Función para poner música
musicOn.addEventListener("click", () => {
    if (!isMusicPlaying) {
        backgroundMusic.play(); // Inicia la música
        isMusicPlaying = true;
    }
    clickSoundOn.play(); // Reproduce el sonido del botón
});

// Función quitar música
musicOff.addEventListener("click", () => {
    if (isMusicPlaying) {
        backgroundMusic.pause(); // Pausar música
        isMusicPlaying = false;
    }
    clickSoundOff.play(); // Reproduce el sonido del botón
});
