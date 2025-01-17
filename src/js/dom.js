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
  const likeFactButton = document.getElementById("favorite-fact");

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

const newFactButton = document.getElementById("new-fact");
newFactButton.addEventListener("click", () => getRandomFacts()); //Llamar a la misma función al dar al botón New Fact

//Funciones DOM
function showRandomText(apiRandomText) {
  let getRandomFactText = document.querySelector("#random-fact");
  getRandomFactText.textContent = apiRandomText;
}
//Implementar almacenamiento en el navegador (localStorage) para los favoritos.
function saveFavoriteFacts(curiousFactRandomId, curiousFactRandomText) {
  localStorage.setItem(curiousFactRandomId, curiousFactRandomText);
  console.log("TABLA DE FAVORITOS");
  console.table(localStorage);
}

// POP UP info botón
const gameInfoButton = document.getElementById("game-info");
const popupContainer = document.getElementById("popup-container");
const closePopupButton = document.getElementById("close-popup");


gameInfoButton.addEventListener("click", () => {
    popupContainer.classList.remove("hidden");
   
});


closePopupButton.addEventListener("click", () => {
    popupContainer.classList.add("hidden");
    
});

document.addEventListener("DOMContentLoaded", () => {
    popupContainer.classList.add("hidden");
   
});

const elementToType = document.getElementById("random-fact")
function typeWriterText(element, textToType, i = 0) {
  const totalTime = 2000;  // 2000 is two seconds
  const timePerCharacter = totalTime / textToType.length;
  element.textContent += textToType[i];
  if (i === textToType.length -1){
    return;
  }
  setTimeout(() => typeWriterText(element, textToType, i + 1), timePerCharacter);
}

export { showRandomText, typeWriterText, saveFavoriteFacts };

