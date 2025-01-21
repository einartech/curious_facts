import { showRandomText, saveFavoriteFacts, typeWriterText } from "./dom.js";

async function getRandomFacts() {
  const url = "https://uselessfacts.jsph.pl/api/v2/facts/random";

  try {
    while (true) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Error al obtener datos: Status ${response.status}, StatusText: ${response.statusText}`
        );
      }
      const json = await response.json();
      const {
        id: curiousFactRandomId,
        text: curiousFactRandomText,
        source: curiousFactRandomSource,
        source_url: curiousFactRandomSourceUrl,
        language: curiousFactRandomLanguage,
        permalink: curiousFactRandomPermalink,
      } = json;

      const maxLength = 140;
      if (curiousFactRandomText && curiousFactRandomText.length <= maxLength) {
        showRandomText(curiousFactRandomText);

        const likeFactButton = document.getElementById("favorite-fact");
        likeFactButton.addEventListener("click", () =>
          saveFavoriteFacts(curiousFactRandomId, curiousFactRandomText)
        );

        const elementToType = document.getElementById("random-fact");
        elementToType.textContent = "";
        typeWriterText(elementToType, curiousFactRandomText);
        break;
      }
    }
  } catch (error) {
    console.error("Error al obtener o procesar datos:", error);
    alert(
      `No se pudo cargar el hecho curioso desde ${url}.\n\nDetalles del error: ${error.message}`
    );
    console.warn("Stack trace:", error.stack);
  }
}
export { getRandomFacts };
