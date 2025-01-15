import { showRandomText } from "./dom.js";
// !! ERROR - POR ALGUN MOTIVO NO SE PUEDE ACCEDER A ESTE ARCHIVO

async function getRandomFacts() {
  console.log("asodaiopsdjoasd");
  const url = "https://uselessfacts.jsph.pl/api/v2/facts/random";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.table(json);

    let curiousFactRandomId = json.id;
    let curiousFactRandomText = json.text;
    let curiousFactRandomSource = json.source;
    let curiousFactRandomSourceUrl = json.source_url;
    let curiousFactRandomLenguage = json.language;
    let curiousFactRandomPermaLink = json.permalink;

    showRandomText(curiousFactRandomText);
  } catch (error) {
    console.error(error.message);
  }
}

function saludo() {
  console.log("HOLA PERRAAA");
}

getRandomFacts();
saludo();
