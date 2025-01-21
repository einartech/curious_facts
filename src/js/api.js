import { showRandomText, saveFavoriteFacts, typeWriterText } from "./dom.js";

/**
 * Obtiene un hecho curioso aleatorio desde la API de "uselessfacts".
 * Maneja errores de red y de análisis de JSON de manera robusta.
 */
async function getRandomFacts() {
  const url = "https://uselessfacts.jsph.pl/api/v2/facts/random";

  try {
    while (true) {
      //From API
      const response = await fetch(url);

      //Check response OK
      if (!response.ok) {
        throw new Error(
          `Error al obtener datos: Status ${response.status}, StatusText: ${response.statusText}`
        );
      }

      //JSON response
      const json = await response.json();

      //Extract data
      const {
        id: curiousFactRandomId,
        text: curiousFactRandomText,
        source: curiousFactRandomSource,
        source_url: curiousFactRandomSourceUrl,
        language: curiousFactRandomLanguage,
        permalink: curiousFactRandomPermalink,
      } = json;

      // Too long
      const maxLength = 140; // Max chars
      if (curiousFactRandomText && curiousFactRandomText.length <= maxLength) {
        showRandomText(curiousFactRandomText);

        const likeFactButton = document.getElementById("favorite-fact");
        likeFactButton.addEventListener("click", () =>
          saveFavoriteFacts(curiousFactRandomId, curiousFactRandomText)
        );

        const elementToType = document.getElementById("random-fact");
        elementToType.textContent = ""; //Clear old fact
        typeWriterText(elementToType, curiousFactRandomText);
        break; //Break length loop
      }
    }
  } catch (error) {
    // Errors
    console.error("Error al obtener o procesar datos:", error);
    alert(
      `No se pudo cargar el hecho curioso desde ${url}.\n\nDetalles del error: ${error.message}`
    );
    console.warn("Stack trace:", error.stack);
  }
}

export { getRandomFacts };

