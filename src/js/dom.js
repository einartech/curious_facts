import { getRandomFacts } from "./api.js";

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
  const likeFactButton = document.getElementById("favorite-fact");

  newFactButton.addEventListener("click", () => playSound("newFactSound"));
  savedFactsButton.addEventListener("click", () =>
    playSound("savedFactsSound")
  );
  likeFactButton.addEventListener("click", () => playSound("likeFactSound"));
});

document.addEventListener("DOMContentLoaded", getRandomFacts);

const newFactButton = document.getElementById("new-fact");
newFactButton.addEventListener("click", () => getRandomFacts());

function showRandomText(apiRandomText) {
  let getRandomFactText = document.querySelector("#random-fact");
  getRandomFactText.textContent = apiRandomText;
}

function saveFavoriteFacts(curiousFactRandomId, curiousFactRandomText) {
  localStorage.setItem(curiousFactRandomId, curiousFactRandomText);
  console.log("TABLA DE FAVORITOS");
  console.table(localStorage);
}

const gameInfoButton = document.getElementById("game-info");
const popupContainer = document.getElementById("popup-container");
const closePopupButton = document.getElementById("close-popup");

gameInfoButton.addEventListener("click", () => {
  popupContainer.classList.remove("hidden");
  document.getElementById("content-container").classList.add("blur-background");
});

closePopupButton.addEventListener("click", () => {
  popupContainer.classList.add("hidden");
  document
    .getElementById("content-container")
    .classList.remove("blur-background");
});

document.addEventListener("DOMContentLoaded", () => {
  popupContainer.classList.add("hidden");
});

const elementToType = document.getElementById("random-fact");

function typeWriterText(element, textToType, i = 0) {
  const totalTime = 2000;
  const timePerCharacter = totalTime / textToType.length;
  element.textContent += textToType[i];
  if (i === textToType.length - 1) {
    return;
  }
  setTimeout(
    () => typeWriterText(element, textToType, i + 1),
    timePerCharacter
  );
}

export { showRandomText, typeWriterText, saveFavoriteFacts };

document.getElementById("saved-facts").addEventListener("click", () => {
  window.location.href = "./saved-facts.html";
});
