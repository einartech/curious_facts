import { getRandomFacts } from "./api.js";

// Elementos de la página
const musicOn = document.getElementById("music-on");
const musicOff = document.getElementById("music-off");
const backgroundMusic = document.getElementById("background-music");
const clickSoundOn = document.getElementById("click-sound-on");
const clickSoundOff = document.getElementById("click-sound-off");

let isMusicPlaying = false;

musicOn.addEventListener("click", () => {
  if (!isMusicPlaying) {
    backgroundMusic.play(); 
    isMusicPlaying = true;
  }
  clickSoundOn.play();
});

musicOff.addEventListener("click", () => {
  if (isMusicPlaying) {
    backgroundMusic.pause(); 
    isMusicPlaying = false;
  }
  clickSoundOff.play(); 
});

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
  savedFactsButton.addEventListener("click", () => playSound("savedFactsSound"));
  likeFactButton.addEventListener("click", () => playSound("likeFactSound"));
});

document.addEventListener("DOMContentLoaded", getRandomFact); // Llamar a la función getRandomFact cuando se cargue la página

function showRandomText(apiRandomText) {
  console.log("showRandomText() >> OUTPUT >>");
  console.table(apiRandomText);

  let getRandomFactText = document.querySelector("#random-fact");
  getRandomFactText.textContent = apiRandomText;
  console.log(getRandomFactText);
}

function showErrorPopup() {
  const popup = document.getElementById('error-popup');
  popup.style.display = 'flex'; // Muestra el pop-up
}

function closeErrorPopup() {
  const popup = document.getElementById('error-popup');
  popup.style.display = 'none'; // Oculta el pop-up
}

// event click cerrar el pop-up
document.getElementById('error-close').addEventListener('click', closeErrorPopup);

async function getRandomFact() {
  const fact = await getRandomFacts(); // Llamamos a la API

  if (!fact) {
    showErrorPopup(); // Si la API devuelve null (error), mostramos el pop-up
  }
}

export { showRandomText };
