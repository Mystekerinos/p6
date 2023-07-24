import { getPhotographers } from "../utils/fetchJsonData.js";
import { mediaFactory } from "../factories/media.js";

let media;
let photographers ;
const arrow = "assets/icons/arrow.svg";
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

  

  const photographersCreationDropDownWord = document.createElement("span");
  photographersCreationDropDownWord.classList.add(
    "photograph_Creations_dropDown_word"
  );
  photographersCreationDropDownWord.textContent = option;
  photographersCreation.appendChild(photographersCreationDropDownWord);
  photographersCreation.appendChild(dropDownSort);
  dropDownSort.appendChild(getDropDownMenu());
  dropDownEventListener(media);

  // //  Description element photographer
  // const dropDown = document.createElement("div");
  // dropDown.classList.add("dropDown");

  // dropDownSort.appendChild(dropDown);

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

  const photographerIdentity = mediaFactory(photographer,media);
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
  isHeartPrice.setAttribute("alt", "text");

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
  const dropDownMenuSection = document.createElement("div");
  dropDownMenuSection.classList.add("dropdown-menu");
  // Create an image element for the portrait

  const dropDownArrow = document.createElement("img");
  dropDownArrow.classList.add("dropdown-icon");
  dropDownArrow.setAttribute("src", arrow);
  // dropDownArrow.setAttribute("alt", "text");
 
  const dropDownOption4 = document.createElement("button");
  dropDownOption4.classList.add("dropdown-options2");
  
 
  


  const dropDownArrow2 = document.createElement("img");
  dropDownArrow2.classList.add("dropdown-icon2");
  dropDownArrow2.setAttribute("src", arrow);

  
  const dropDownOptionInitialWord = document.createElement("span");
  dropDownOptionInitialWord.classList.add("dropdown-optionsSpan2");
  dropDownOptionInitialWord.setAttribute("id", "dropMenuId");
 
 
  dropDownOptionInitialWord.value = "Popularité";
  dropDownOptionInitialWord.textContent = "Popularité";
  dropDownOption4.appendChild(dropDownOptionInitialWord);
  const dropDownUl = document.createElement("ul");
  dropDownUl.classList.add("sort-drop");
  dropDownUl.setAttribute("id","sortDrop")
 
  const dropDownIl1 = document.createElement("li");
 
  
  const dropDownOption = document.createElement("button");
   dropDownOption.classList.add("dropdown-options3");
  const dropDownOptionSpan = document.createElement("span");
  dropDownOptionSpan.classList.add("dropdown-optionsSpan");
  dropDownOptionSpan.value = "Popularité";
  dropDownOptionSpan.textContent = "Popularité";
  dropDownOption.appendChild(dropDownOptionSpan);
  dropDownIl1.appendChild(dropDownOption);
  const dropDownOption2 = document.createElement("button");
  dropDownOption2.classList.add("dropdown-options4");
  const dropDownOptionSpan2 = document.createElement("span");
  dropDownOptionSpan2.classList.add("dropdown-optionsSpan");
  dropDownOptionSpan2.value = "Date";
  dropDownOptionSpan2.textContent = "Date";
  dropDownOption2.appendChild(dropDownOptionSpan2);
  const dropDownIl2 = document.createElement("li");
  dropDownIl2.appendChild(dropDownOption2);
  const dropDownOption3 = document.createElement("button");
  dropDownOption3.classList.add("dropdown-options5");
  const dropDownOptionSpan3 = document.createElement("span");
  dropDownOptionSpan3.classList.add("dropdown-optionsSpan");
  dropDownOptionSpan3.value = "Titre";
  dropDownOptionSpan3.textContent = "Titre";
  dropDownOption3.appendChild(dropDownOptionSpan3);

  const dropDownIl3 = document.createElement("li");
  dropDownIl3.appendChild(dropDownOption3);
  dropDownUl.appendChild(dropDownIl1);
  dropDownUl.appendChild(dropDownIl2);
  dropDownUl.appendChild(dropDownIl3);


  
 

  // console.log("option"," date");
  console.log("dropDownOption", dropDownOption);

  // dropDownMenuSection.appendChild(dropDownOption);
  // dropDownMenuSection.appendChild(dropDownOption2);
  // dropDownMenuSection.appendChild(dropDownOption3);

  const dropDownTouchOriginal = document.createElement("button");
  dropDownTouchOriginal.classList.add("dropdown-touch");
  dropDownTouchOriginal.setAttribute("id", "dropMenuId");

  
 
  
  dropDownTouchOriginal.appendChild(dropDownOptionInitialWord);
  dropDownTouchOriginal.appendChild(dropDownArrow);
  dropDownOption.appendChild(dropDownArrow2);



  dropDownMenuSection.appendChild(dropDownUl);
 
  
  

  console.log("dropDownMenuSection", dropDownMenuSection);

  return dropDownMenuSection;
}

// const dropDownfoldBtn = document.getElementById("dropMenuId");
// console.log("dropDownfoldBtn",dropDownfoldBtn)
// dropDownfoldBtn.addEventListener("click", () => {
//   foldDropMenu();
// }
// );


// function foldDropMenu(){
//   const dropDownMenuFold = document.getElementById("sortDrop");
//   dropDownMenuFold.style.display = "block";
// }
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



export async function mediaInit() {
  // Récupère les datas des photographes
  let mediaObject  = await getPhotographers();
   media= mediaObject.media;
  
    photographers= mediaObject.photographers;
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
  console.log("medias",medias)
  const dropdownMenu = document.querySelector(".dropdown-menu");
  console.log("dropdownMenu",dropdownMenu);
  dropdownMenu.addEventListener("click", (e) => {
    // Retrieve the selected option value
    console.log(" dropdownMenu",  dropdownMenu);
    const selectedOption = e.target.innerText;
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
    const photographerCreation = mediaFactory(mediaData,medias);  
    console.log("mediaData",mediaData);
    const userPhotographerCreationCardDOM =
      photographerCreation.getPhotographerCreationCardDOM();
    mediaList.appendChild(userPhotographerCreationCardDOM);
    
  });
}

mediaInit();
