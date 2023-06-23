import { getPhotographers } from "../utils/fetchJsonData.js";
import { mediaFactory } from "../factories/media.js";

const photographersHeader = document.querySelector(".photograph-header");
const photographersProfil = document.querySelector("#main");
const photographersPortrait = document.querySelector(".user");
const photographersProfile = document.querySelector(".photograph-profile");

function displayData(media, photographer) {
  const option = "Trier par";
  const photographersCreation = document.createElement("div");
  photographersCreation.classList.add("photograph_Creations");
  const photographersDropDownCreation = document.createElement("div");
  photographersDropDownCreation.classList.add("photograph_creations_dropDown");
  photographersProfil.appendChild(photographersCreation);
  photographersProfil.appendChild(getDropDownMenu());
  dropDownEventListener(media);
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

  //  Description render like
  const photographersAboutLike = document.createElement("div");
  photographersAboutLike.classList.add("about-like-and-price-photographer");
  photographersHeader.appendChild(photographersAboutLike);

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

  const photographerIdentity = mediaFactory(photographer);
  const userPhotographersCardDOM =
    photographerIdentity.getPhotographerIdentityCardDOM();
  console.log("photographerIdentity", userPhotographersCardDOM);
  photographersHeaderDescription.appendChild(userPhotographersCardDOM);
  displayDataList(media);
}

// photographers.forEach((mediaData) => {
//   const pictureMedia = photographerFactory(mediaData);

//   const userPictureMediaCardDOM = pictureMedia.getPhotographyUserDOM();
//   console.log("userPictureMediaCardDOM", userPictureMediaCardDOM);
//   photographersPicture.appendChild(userPictureMediaCardDOM);
// });

// function getPhotographyUserDOM() {
//   // Create an article element
//   const userPhoto = document.createElement("article");

//   // Create an image element for the portrait
//   const isPicture = document.createElement("img");
//   isPicture.classList.add("photograph-header_description_picture_user");
//   isPicture.setAttribute("src", picture);

//   // append  an Image, a date, a likes, a title,  an image to the header element

//   userPhoto.appendChild(isPicture);
//   return userPhoto;
// }

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

  dropDownMenuSection.appendChild(dropDownOption);
  dropDownMenuSection.appendChild(dropDownOption2);
  dropDownMenuSection.appendChild(dropDownOption3);
  console.log("dropDownMenuSection", dropDownMenuSection);

  return dropDownMenuSection;
}

// function renderLikes() {
//   // Get the media like span element
//   const mediaLikeSpanEl = this.parentNode.firstElementChild;

//   // Get the media like icon element
//   const mediaLikeIconEl = this.firstElementChild;

//   if (mediaLikeIconEl.classList.contains("fa-regular")) {
//     // Convert media like span content to a number and store it as mediaLikeCount variable
//     let mediaLikeCount = Number(mediaLikeSpanEl.textContent);

//     // Increment the mediaLikeCount variable
//     mediaLikeCount++;

//     // Define the mediaLikeCount value as media likes span element new content
//     mediaLikeSpanEl.textContent = mediaLikeCount;

//     // Render the photographer footer to recalculate the total likes count
//     renderPhotographFooter(photographerInfo);

//     // Replace the fa-regular with the fa-solid class
//     mediaLikeIconEl.classList.replace("fa-regular", "fa-solid");
//   } else if (mediaLikeIconEl.classList.contains("fa-solid")) {
//     // Convert media like span content to a number and store it as mediaLikeCount variable
//     let mediaLikeCount = Number(mediaLikeSpanEl.textContent);

//     // Decrease the mediaLikeCount variable
//     mediaLikeCount--;

//     // Define the mediaLikeCount value as media likes span element new content
//     mediaLikeSpanEl.textContent = mediaLikeCount;

//     // Render the photographer footer to recalculate the total likes count
//     renderPhotographFooter(photographerInfo);

//     // Replace the fa-solid with the fa-regular class
//     mediaLikeIconEl.classList.replace("fa-solid", "fa-regular");
//   }
// }

//   const mediaCardLikeButtons = document.querySelectorAll(".media-like-button");
//   mediaCardLikeButtons.forEach((button) => {
//     button.addEventListener("click", renderLikes);
//   });

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
  let photographer = photographers.find(
    (photographersItem) => photographersItem.id === Id
  );

  displayData(media, photographer);
}

function dropDownEventListener(medias) {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.addEventListener("change", (e) => {
    // Retrieve the selected option value
    const selectedOption = e.currentTarget.value;
    console.log("selectedOption", selectedOption);
    console.log(e);
    if (selectedOption == "Popularité") {
      medias.sort((a, b) => {
        return b.likes - a.likes;
      });
    }

    if (selectedOption == "Date") {
      medias.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
    }

    if (selectedOption == "Titre") {
      medias.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    }
    displayDataList(medias);
  });
}

function displayDataList(medias) {
  const mediaList = document.querySelector(".photograph_Creations_card");
  mediaList.innerHTML = "";
  medias.forEach((mediaData) => {
    const photographerCreation = mediaFactory(mediaData);
    const userPhotographerCreationCardDOM =
      photographerCreation.getPhotographerCreationCardDOM();
    mediaList.appendChild(userPhotographerCreationCardDOM);
  });
}

mediaInit();
