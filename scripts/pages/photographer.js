import { getPhotographers } from "../utils/fetchJsonData.js";
import { mediaFactory } from "../factories/media.js";

async function displayData(media) {
  const photographersHeader = document.querySelector(".photograph-header");

  media.forEach((mediaData) => {
    const photographerMedia = mediaFactory(mediaData);
    const userMediaCardDOM = photographerMedia.getMediaCardDOM();
    photographersHeader.appendChild(userMediaCardDOM);
  });
}

async function mediaInit() {
  // Récupère les datas des photographes
  const { media } = await getPhotographers();
  console.log(media);
  displayData(media);
}

mediaInit();
