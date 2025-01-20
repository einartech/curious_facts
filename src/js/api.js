import { showRandomText, saveFavoriteFacts, typeWriterText } from "./dom.js";

/**
 * Obtiene un hecho curioso aleatorio desde la API de "uselessfacts".
 * Maneja errores de red y de análisis de JSON de manera robusta.
 */
async function getRandomFacts() {
  const url = "https://uselessfacts.jsph.pl/api/v2/facts/random";

  try {
    // Realiza la solicitud a la API
    const response = await fetch(url);

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(
        `Error al obtener datos: Status ${response.status}, StatusText: ${response.statusText}`
        //?Preguntar a Alex
      );
    }

    // Intenta analizar el JSON
    const json = await response.json();

    // Verifica que los datos esperados existan
    const {
      id: curiousFactRandomId,
      text: curiousFactRandomText,
      source: curiousFactRandomSource,
      source_url: curiousFactRandomSourceUrl,
      language: curiousFactRandomLanguage,
      permalink: curiousFactRandomPermalink,
    } = json;

    // Muestra el texto del hecho curioso en la interfaz

    if (curiousFactRandomId && curiousFactRandomText) {
      showRandomText(curiousFactRandomText);


      //CODIGO EXISTENTE
      // // document.addEventListener("click", () =>
      //   saveFavoriteFacts(curiousFactRandomId, curiousFactRandomText)
      // );
      //FAVES - CAMBIOS
      const likeFactButton = document.getElementById("favorite-fact");
      likeFactButton.addEventListener("click", () =>
      saveFavoriteFacts(curiousFactRandomId, curiousFactRandomText))
      //END FAVES
      const elementToType = document.getElementById("random-fact") // definir el texto a aplicar la función
      elementToType.textContent = ""; // borrar hecho anterior
      typeWriterText(elementToType, curiousFactRandomText); // teclear hecho nuevo
    } else {
      throw new Error(
        "El texto y la id del hecho curioso no están disponibles."
      );
    }

    // (Opcional) Puedes imprimir en consola otros detalles si es necesario
    // console.table({
    //   curiousFactRandomId,
    //   curiousFactRandomText,
    //   curiousFactRandomSource,
    //   curiousFactRandomSourceUrl,
    //   curiousFactRandomLanguage,
    //   curiousFactRandomPermalink,
    // });
  } catch (error) {
    // Maneja errores de red o análisis de JSON
    console.error("Error al obtener o procesar datos:", error);

    // Muestra un mensaje de alerta al usuario
    alert(
      `No se pudo cargar el hecho curioso desde ${url}.\n\nDetalles del error: ${error.message}`
    );

    // (Opcional) Log adicional si estás rastreando errores
    console.warn("Stack trace:", error.stack);
  }
}

export { getRandomFacts };
