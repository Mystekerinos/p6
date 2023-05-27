import { getPhotographers } from "../utils/fetchJsonData.js";
import { mediaFactory } from "../factories/media.js";

async function displayData(media, photographers) {
  const photographersHeader = document.querySelector(".photograph-header");
  const photographersProfil = document.querySelector("#main");
  const photographersContent = document.createElement("div");
  photographersContent.classList.add("photograph_Creations");
  photographersProfil.appendChild(photographersContent);

  //  Description element photographer
  const photographersHeaderDescription = document.createElement("div");
  photographersHeaderDescription.classList.add("photograph-header_description");
  photographersHeader.appendChild(photographersHeaderDescription);

  //  Description element photographer
  const photographersHeaderPicture = document.createElement(
    "photographers-header-picture"
  );
  photographersHeaderPicture.classList.add("photographers-header-picture");
  photographersHeader.appendChild(photographersHeaderPicture);

  photographers.forEach((photographersData) => {
    const photographerIdentity = mediaFactory(photographersData);
    const userPhotographersCardDOM =
      photographerIdentity.getPhotographerIdentityCardDOM();
    console.log("photographerIdentity", userPhotographersCardDOM);
    photographersHeaderDescription.appendChild(userPhotographersCardDOM);
  });

  media.forEach((mediaData) => {
    const photographerMedia = mediaFactory(mediaData);

    const userMediaCardDOM = photographerMedia.getMediaCardDOM();
    console.log("photographerMedia", userMediaCardDOM);
    photographersContent.appendChild(userMediaCardDOM);
  });
}

async function mediaInit() {
  // Récupère les datas des photographes
  let { media, photographers } = await getPhotographers();
  console.log(media, photographers);

  const params = new URL(document.location).searchParams;
  const photographerId = parseInt(params.get("id"));
  const Id = parseInt(params.get("id"));
  // Filter the media array to return only items with a matching photographerId
  media = media.filter(
    (mediaItem) => mediaItem.photographerId === photographerId
  );
  photographers = photographers.filter(
    (photographersItem) => photographersItem.id === Id
  );

  console.log("mediaFilter", media);
  console.log("photographersFilter", photographers);
  displayData(media, photographers);
}

mediaInit();
