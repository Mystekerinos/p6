import { getPhotographers } from "../utils/fetchJsonData.js";
import { mediaFactory } from "../factories/media.js";

let currentMedia = []

async function displayData(media, photographers, user) {
  const photographersHeader = document.querySelector(".photograph-header");
  const photographersProfil = document.querySelector("#main");
  const photographersPortrait = document.querySelector(".user");
  const photographersProfile = document.querySelector(".photograph-profile");
  const option = "Trier par";
  const photographersCreation = document.createElement("div");
  photographersCreation.classList.add("photograph_Creations");
  const photographersDropDownCreation = document.createElement("div");
  photographersDropDownCreation.classList.add("photograph_creations_dropDown");
  photographersProfil.appendChild(photographersCreation);
  photographersProfil.appendChild(getDropDownMenu());
  dropDownEventListener();
  const photographersPicture = document.createElement("div");
  photographersPicture.classList.add("picture");
  photographersPortrait.appendChild(photographersPicture);

  //  Description element photographer
  const photographersHeaderDescription = document.createElement("div");
  photographersHeaderDescription.classList.add("profile");
  photographersProfile.appendChild(photographersHeaderDescription);

  //  Description element photographer
  const photographersHeaderDescriptionDropdown = document.createElement("span");
  photographersHeaderDescriptionDropdown.classList.add(
    "photograph_Creations_dropDown"
  );
  photographersHeaderDescriptionDropdown.textContent = option;
  photographersCreation.appendChild(photographersHeaderDescriptionDropdown);

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
  // photographers.forEach((mediaData) => {
  //   const pictureMedia = photographerFactory(mediaData);

  //   const userPictureMediaCardDOM = pictureMedia.getPhotographyUserDOM();
  //   console.log("userPictureMediaCardDOM", userPictureMediaCardDOM);
  //   photographersPicture.appendChild(userPictureMediaCardDOM);
  // });
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

// };

function getPhotographyUserDOM() {
  // Create an article element
  const userPhoto = document.createElement("article");

  // Create an image element for the portrait
  const isPicture = document.createElement("img");
  isPicture.classList.add("photograph-header_description_picture_user");
  isPicture.setAttribute("src", picture);

  // append  an Image, a date, a likes, a title,  an image to the header element

  userPhoto.appendChild(isPicture);
  return userPhoto;
}

function getDropDownMenu() {
  // Create an article element
  const dropDownMenuSection = document.createElement("select");
  dropDownMenuSection.classList.add("dropdown-menu");
  // Create an image element for the portrait
  const dropDownOption = document.createElement("option");
  dropDownOption.classList.add("dropdown-options");
  dropDownOption.value = "Date";
  dropDownOption.textContent = "Date";
  const dropDownOption2 = document.createElement("option");
  dropDownOption2.classList.add("dropdown-options");
  dropDownOption2.value = "Popularité";
  dropDownOption2.textContent = "Popularité";
  const dropDownOption3 = document.createElement("option");
  dropDownOption3.classList.add("dropdown-options");
  dropDownOption3.value = "Titre";
  dropDownOption3.textContent = "Titre";

  // console.log("option"," date");
  console.log("dropDownOption", dropDownOption);

  // // sort Menu
  // const dropDown = document.createElement("select");
  // dropDown.classList.add("dropDown");
  // dropDown.textContent = "Trier par";

  // // sort Element
  // const dropDownOption = document.createElement("option");
  // dropDownOption.classList.add("dropDownOption");
  // dropDownOption;

  // append  an Image, a date, a likes, a title,  an image to the header element

  dropDownMenuSection.appendChild(dropDownOption);
  dropDownMenuSection.appendChild(dropDownOption2);
  dropDownMenuSection.appendChild(dropDownOption3);
  console.log("dropDownMenuSection", dropDownMenuSection);

  return dropDownMenuSection;
}

export async function mediaInit() {
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
  
  currentMedia = media
  console.log("mediaFilter", media);
  console.log("photographersFilter", photographers);

  displayData(media, photographers);
}

function dropDownEventListener() {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.addEventListener("change", (e) => {
    // Retrieve the selected option value
    const selectedOption = e.currentTarget.value;
    console.log("selectedOption", selectedOption);
    console.log(e);
    if (selectedOption == "Popularité") {
      currentMedia.sort((a, b) => {
        return b.likes - a.likes;
      });
    }

    if (selectedOption == "Date") {
      currentMedia.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
    }

    if (selectedOption == "Titre") {
      currentMedia.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    }
    reorderList()
  });
}

function reorderList() {
  const mediaList = document.querySelector(".photograph_Creations_card");
  mediaList.innerHTML = ''
  currentMedia.forEach((mediaData) => {
    const photographerCreation = mediaFactory(mediaData);
    const userPhotographerCreationCardDOM =
      photographerCreation.getPhotographerCreationCardDOM();
    mediaList.appendChild(
      userPhotographerCreationCardDOM
    );
  });
  
}

mediaInit();

