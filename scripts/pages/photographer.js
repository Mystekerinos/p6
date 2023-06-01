import { getPhotographers } from "../utils/fetchJsonData.js";
import { mediaFactory } from "../factories/media.js";

async function displayData(media, photographers, user) {
  const photographersHeader = document.querySelector(".photograph-header");
  const photographersProfil = document.querySelector("#main");
  const photographersPortrait = document.querySelector(".user");
  const photographersProfile = document.querySelector(".photograph-profile");
  const photographersCreation = document.createElement("div");
  photographersCreation.classList.add("photograph_Creations");
  photographersProfil.appendChild(photographersCreation);
  const photographersPicture = document.createElement("div");
  photographersPicture.classList.add("picture");
  photographersPortrait.appendChild(photographersPicture);

  //  Description element photographer
  const photographersHeaderDescription = document.createElement("div");
  photographersHeaderDescription.classList.add("profile");
  photographersProfile.appendChild(photographersHeaderDescription);

  //  Description element photographer
  const photographersHeaderPicture = document.createElement(
    "photographers-header-picture"
  );
  photographersHeaderPicture.classList.add("photographers-profile");
  photographersHeader.appendChild(photographersHeaderPicture);

  photographers.forEach((photographersData) => {
    const photographerIdentity = mediaFactory(photographersData);
    const userPhotographersCardDOM =
      photographerIdentity.getPhotographerIdentityCardDOM();
    console.log("photographerIdentity", userPhotographersCardDOM);
    photographersHeaderDescription.appendChild(userPhotographersCardDOM);
  });

  media.forEach((mediaData) => {
    const photographerCreation = mediaFactory(mediaData);

    const userPhotographerCreationCardDOM =
      photographerCreation.getPhotographerCreationCardDOM();
    console.log("photographerMedia", userPhotographerCreationCardDOM);
    photographersCreation.appendChild(userPhotographerCreationCardDOM);
  });
  photographers.forEach((mediaData) => {
    const pictureMedia = mediaFactory(mediaData);

    const userPictureMediaCardDOM = pictureMedia.getPhotographyUserDOM();
    console.log("userPictureMediaCardDOM", userPictureMediaCardDOM);
    photographersPicture.appendChild(userPictureMediaCardDOM);
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
