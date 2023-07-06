import { getPhotographers } from "../utils/fetchJsonData.js";
import { mediaFactory } from "../factories/media.js";

const photographersHeader = document.querySelector(".photograph-header");
const photographersProfil = document.querySelector("#main");

const photographersProfile = document.querySelector(".photograph-profile");
const heartTotal = "assets/images/likesTotal.svg";
function displayData(media, photographer) {
  const option = "Trier par";
  const photographersCreation = document.createElement("div");
  photographersCreation.classList.add("photograph_Creations");
  const photographersDropDownCreation = document.createElement("div");
  photographersDropDownCreation.classList.add("photograph_creations_dropDown");
  photographersProfil.appendChild(photographersCreation);

  //  Description element photographer
  const photographersHeaderDescription = document.createElement("div");
  photographersHeaderDescription.classList.add("profile");
  photographersProfile.appendChild(photographersHeaderDescription);

  //  Description element dropDown

  const dropDownSort = document.createElement("div");
  dropDownSort.classList.add("dropDownSort");

  photographersCreation.appendChild(dropDownSort);

  const photographersCreationDropDownWord = document.createElement("span");
  photographersCreationDropDownWord.classList.add(
    "photograph_Creations_dropDown_word"
  );
  photographersCreationDropDownWord.textContent = option;
  dropDownSort.appendChild(photographersCreationDropDownWord);
  dropDownSort.appendChild(getDropDownMenu());
  dropDownEventListener(media);

  //  Description element photographer
  const dropDown = document.createElement("div");
  dropDown.classList.add("dropDown");

  dropDownSort.appendChild(dropDown);

  //  Description element photographer
  const photographersHeaderDescriptionSection =
    document.createElement("section");
  photographersHeaderDescriptionSection.classList.add(
    "photograph_Creations_card"
  );
  photographersCreation.appendChild(photographersHeaderDescriptionSection);

  //  Description element photographer
  const photographersImage = document.createElement("div");
  photographersImage.classList.add("photographers-Image");
  photographersHeader.appendChild(photographersImage);

  const photographersPrice = document.createElement("div");
  photographersPrice.classList.add("photographers-Price");
  photographersHeader.appendChild(photographersPrice);

  const photographersAllLikes = document.createElement("div");
  photographersAllLikes.classList.add("photographers-allLikes");
  photographersHeader.appendChild(photographersAllLikes);

  const photographerIdentity = mediaFactory(photographer);
  const userPhotographersCardDOM =
    photographerIdentity.getPhotographerIdentityCardDOM();
  console.log("photographerIdentity", userPhotographersCardDOM);
  photographersHeaderDescription.appendChild(userPhotographersCardDOM);

  const userPhotographersPicture = photographerIdentity.getPhotographerImage();
  console.log("userPhotographersPicture", userPhotographersPicture);
  photographersImage.appendChild(userPhotographersPicture);

  const userPhotographersAllLikes = getPhotographerLikes(media);
  console.log("userPhotographersPicture", userPhotographersAllLikes);

  // const moreUserPhotographersAllLikes = photographerIdentity.renderLikes();
  // console.log("userPhotographersPicture", moreUserPhotographersAllLikes);

  const allLikes = document.createElement("div");
  allLikes.classList.add("allLikes");
  allLikes.innerHTML = userPhotographersAllLikes;

  const isHeartPrice = document.createElement("img");
  isHeartPrice.classList.add("heartTotal");
  isHeartPrice.setAttribute("src", heartTotal);

  const photographersPriceHeart = document.createElement("div");
  photographersPriceHeart.classList.add("photographersPriceHeart");
  photographersPriceHeart.appendChild(allLikes);
  photographersPriceHeart.appendChild(isHeartPrice);

  photographersPrice.appendChild(photographersPriceHeart);

  const userPhotographersPrice = photographerIdentity.getPhotographerPrice();
  console.log("userPhotographersPicture", userPhotographersPrice);
  photographersPrice.appendChild(userPhotographersPrice);

  const moreLikes = document.createElement("div");
  moreLikes.classList.add("moreLikes");
  moreLikes.innerHTML = moreLikes;

  displayDataList(media);
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

  dropDownMenuSection.appendChild(dropDownOption);
  dropDownMenuSection.appendChild(dropDownOption2);
  dropDownMenuSection.appendChild(dropDownOption3);
  console.log("dropDownMenuSection", dropDownMenuSection);

  return dropDownMenuSection;
}

function getPhotographerLikes(medias) {
  let allLikes = 0;
  if (medias !== undefined) {
    console.log(medias.length);
    for (let i = 0; i < medias.length; i++) {
      allLikes += parseInt(medias[i].likes);

      console.log("YYYYYY", allLikes);
    }
    return allLikes;
  }
}

// function renderLikes(isLikes) {
//   console.log("isLikes", isLikes);
//   let moreLikes = 0;
//   moreLikes = ++isLikes;
//   allLikes = ++isLikes;
//   console.log("renderLikes", moreLikes);
//   return moreLikes;
// }

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

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
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
