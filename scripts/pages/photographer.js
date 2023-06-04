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
  const photographersHeaderDescriptionSection =
    document.createElement("section");
  photographersHeaderDescriptionSection.classList.add(
    "photograph_Creations_card"
  );
  photographersCreation.appendChild(photographersHeaderDescriptionSection);

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
    photographersHeaderDescriptionSection.appendChild(
      userPhotographerCreationCardDOM
    );
  });
  photographers.forEach((mediaData) => {
    const pictureMedia = mediaFactory(mediaData);

    const userPictureMediaCardDOM = pictureMedia.getPhotographyUserDOM();
    console.log("userPictureMediaCardDOM", userPictureMediaCardDOM);
    photographersPicture.appendChild(userPictureMediaCardDOM);
  });
}

// async function sortMediaSection() {
//   // Retrieve the selected option value
//   const selectedOption = this.value;

//   // Sort the photographerMedia array using the likes key if the selected option is "Popularité"
//   if (selectedOption == "Popularité") {
//     await photographerMedia.sort((a, b) => {
//       return b.likes - a.likes;
//     });
//   }

//   // Sort the photographerMedia array using the date key if the selected option is "Date"
//   if (selectedOption == "Date") {
//     await photographerMedia.sort((a, b) => {
//       return new Date(a.date) - new Date(b.date);
//     });
//   }

//   // Sort the photographerMedia array using the title key if the selected option is "Titre"
//   if (selectedOption == "Titre") {
//     await photographerMedia.sort((a, b) => {
//       if (a.title < b.title) {
//         return -1;
//       }
//       if (a.title > b.title) {
//         return 1;
//       }
//       return 0;
//     });
//   }
// }

// function addEventListeners() {
//   // Add an event listener to the dropdown menu to sort the media section on change
//   const dropdownMenu = document.getElementById("dropdownMenu");
//   dropdownMenu.addEventListener("change", sortMediaSection);

//   // Add an event listener to the contact button to open the contact modal on click
//   const contactBtn = document.getElementById("contactBtn");
//   contactBtn.addEventListener("click", () => {
//     displayModal("contactModal");
//   });

//   // Add an event listener to the close button in the modal to close the contact modal on click
//   const modalCloseBtn = document.getElementById("modalCloseBtn");
//   modalCloseBtn.addEventListener("click", () => {
//     closeModal("contactModal");
//   });

//   // Add an event listener to validate the contact modal form on submit
//   const modalForm = document.getElementById("modalForm");
//   modalForm.addEventListener("submit", validateModalForm);

//   // Add an event listener to each media card button to open the lightbox modal on click
//   const mediaCardButtons = document.querySelectorAll(".media-card-button");
//   mediaCardButtons.forEach((card) => {
//     card.addEventListener("click", () => {
//       const mediaId = card.parentElement.id;
//       renderLightBoxMedia(mediaId);
//       displayModal("lightboxModal");
//     });
//   });
// };

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
