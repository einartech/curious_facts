import { getRandomFacts } from "./api.js";

// Elementos
const musicOn = document.getElementById("music-on");
const musicOff = document.getElementById("music-off");
const backgroundMusic = document.getElementById("background-music");
const clickSoundOn = document.getElementById("click-sound-on");
const clickSoundOff = document.getElementById("click-sound-off");
// Inicializar música
let isMusicPlaying = false;

// Función para poner música
musicOn.addEventListener("click", () => {
  if (!isMusicPlaying) {
    backgroundMusic.play();
    isMusicPlaying = true;
  }
  clickSoundOn.play();
});

// Función quitar música
musicOff.addEventListener("click", () => {
  if (isMusicPlaying) {
    backgroundMusic.pause();
    isMusicPlaying = false;
  }
  clickSoundOff.play();
});

// Función para reproducir sonido desde un elemento de audio en el HTML
function playSound(audioId) {
  const audioElement = document.getElementById(audioId);
  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const newFactButton = document.getElementById("new-fact");
  const savedFactsButton = document.getElementById("saved-facts");
  const likeFactButton = document.getElementById("like-fact");

  newFactButton.addEventListener("click", () => playSound("newFactSound"));
  savedFactsButton.addEventListener("click", () =>
    playSound("savedFactsSound")
  );
  likeFactButton.addEventListener("click", () => playSound("likeFactSound"));
});

//Einar y Carol codigo-------------------------------------------------

//Listeners
//Cuando mi pagina web se carga, se visualizan los random facts
document.addEventListener("DOMContentLoaded", getRandomFacts); //Llamar a la funcion showRandomText cada vez que el evento cargar pagina se ejecute

//Cuando yo aprieto el boton favoritos, este boton hace algo
document.addEventListener("click", saveFavoriteFacts);

//Funciones DOM
function showRandomText(apiRandomText) {
  let getRandomFactText = document.querySelector("#random-fact");
  getRandomFactText.textContent = apiRandomText;
}

function saveFavoriteFacts() {
  console.log("saveFavoriteFacts esta funcionando correctamente");

  let favoriteFact = document.querySelector("#random-fact").textContent;

  let myfavoriteFacts = new Array();
  myfavoriteFacts = favoriteFact;

  console.table(myfavoriteFacts);
}

export { showRandomText };
