import { showRandomText } from "./dom.js";

async function getRandomFacts() {
  const url = "https://uselessfacts.jsph.pl/api/v2/facts/random";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.table(json);

    let curiousFactRandomText = json.text; // Aquí obtenemos el texto del fact

    // Mostrar el texto del "fact" en el DOM
    showRandomText(curiousFactRandomText);
  } catch (error) {
    console.error('An error ocurred, press the botton again', error.message);
    return null; // null en caso de error
  }
}

export { getRandomFacts };
