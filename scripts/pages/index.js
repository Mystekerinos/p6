import { getPhotographers } from "../utils/fetchJsonData.js";
import { photographerFactory } from "../factories/photographer.js";
// display photographers
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer, 0);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}
// collects data from photographers
async function init() {
  const { photographers } = await getPhotographers();

  displayData(photographers);
}

init();
