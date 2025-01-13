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

// Selecciona los botones
const newFactButton = document.getElementById('newFact');
const savedFactsButton = document.getElementById('savedFacts');
const likeFactButton = document.getElementById('likeFact');

// Función para reproducir sonido desde un elemento de audio en el HTML
function playSound(audioId) {
  const audioElement = document.getElementById(audioId);
  if (audioElement) {
    audioElement.currentTime = 0; // Reinicia el audio
    audioElement.play();
  }
}

//Eventos clack ratón botones principales
newFactButton.addEventListener('click', () => {
  playSound('newFactSound');
});

savedFactsButton.addEventListener('click', () => {
  playSound('savedFactsSound');
});

likeFactButton.addEventListener('click', () => {
  playSound('likeFactSound');
});


function showRandomText(apiRandomText) {
  console.log("showRandomText () >> OUTPUT >>");
  console.table(apiRandomText);
}

export { showRandomText };
