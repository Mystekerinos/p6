export function mediaFactory(data) {
  console.log(data, "data");
  const {
    title,
    id,
    image,
    video,
    likes,
    date,
    price,
    photographerId,
    tagline,
    city,
    country,
    name,
    portrait,
  } = data;

  const picture = `assets/photographers/Photographers ID Photos/${portrait}`;
  const heart = "assets/images/likes.svg";
  const option1 = "Popularité";
  const option2 = "Date";
  const option3 = "Titre";
  const photographerMedia = data;

  function getPhotographerCreationCardDOM() {
    // Create an article element
    const card = document.createElement("card");
    card.id = id;

    const description = document.createElement("div");
    description.classList.add("card_description");
    // Create a image element for the artist image
    const isImage = document.createElement("img");
    const isVideo = document.createElement("video");
    if (image) {
      const Image = `assets/images/${photographerId}/${image}`;
      isImage.classList.add("card_image");
      isImage.setAttribute("src", Image);
      card.appendChild(isImage);
    }

    // Create a image element for the artist image

    if (video) {
      console.log("video", video);
      const Video = `assets/images/${photographerId}/${video}`;
      isVideo.classList.add("card_video");
      isVideo.setAttribute("src", Video);
      card.appendChild(isVideo);
    }

    // Create a likes element for the artist likes
    const isLikes = document.createElement("div");
    isLikes.classList.add("card_description_likes");
    isLikes.textContent = likes;

    const isHeart = document.createElement("img");
    isHeart.classList.add("heart");
    isHeart.setAttribute("src", heart);

    // Create a date element for the artist date

    const isDate = document.createElement("div");
    isDate.classList.add("card_date");
    isDate.textContent = date;

    // Create a title element for the artist title

    const isTitle = document.createElement("div");
    isTitle.classList.add("card_description_title");
    isTitle.textContent = title;

    // new node
    description.appendChild(isTitle);
    description.appendChild(isLikes);
    description.appendChild(isHeart);

    // append  an Image, a date, a likes, a title,  an image to the article element

    card.appendChild(description);

    return card;
  }

  function getPhotographerIdentityCardDOM() {
    // Create an article element
    const article = document.createElement("article");
    article.id = id;
    // Create a location element for the artist city and artist country
    const location = document.createElement("div");
    location.classList.add("photograph-header_description_location");
    location.textContent = `${city}, ${country}`;

    // Create a name element for the artist name
    const isName = document.createElement("h1");
    isName.textContent = name;

    // Create a tagline element for the artist tagline
    const isTagline = document.createElement("div");
    isTagline.classList.add("photograph-header_description_tagline");
    isTagline.textContent = tagline;

    // Create a price element for the artist price

    const isPrice = document.createElement("div");
    isPrice.classList.add("price");
    isPrice.textContent = `${price}€/jour`;

    // append  an Image, a date, a likes, a title,  an image to the header element

    article.appendChild(isName);
    article.appendChild(location);
    article.appendChild(isTagline);
    article.appendChild(isPrice);

    return article;
  }

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
    dropDownOption.value = option1;
    dropDownOption.textContent = option1;
    const dropDownOption2 = document.createElement("option");
    dropDownOption2.classList.add("dropdown-options");
    dropDownOption2.value = option2;
    dropDownOption2.textContent = option2;
    const dropDownOption3 = document.createElement("option");
    dropDownOption3.classList.add("dropdown-options");
    dropDownOption3.value = option3;
    dropDownOption3.textContent = option3;

    console.log("option", option1);
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

  function sortPhotographerCreationCardDOM(e) {
    // Retrieve the selected option value
    const selectedOption = e.currentTarget.value;
    console.log("selectedOption", selectedOption);
    console.log(e);
    if (selectedOption == "Popularité") {
      data.sort((a, b) => {
        return b.likes - a.likes;
      });
    }

    if (selectedOption == "Date") {
      data.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
    }

    if (selectedOption == "Titre") {
      data.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    }
  }

  function dropDownEventListener() {
    const dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.addEventListener("change", sortPhotographerCreationCardDOM);
  }

  return {
    getPhotographerCreationCardDOM,
    getPhotographerIdentityCardDOM,
    getPhotographyUserDOM,
    dropDownEventListener,
    getDropDownMenu,
  };
}
