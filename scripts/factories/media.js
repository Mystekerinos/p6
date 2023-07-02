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

  const isHeart = document.createElement("img");
  isHeart.classList.add("heart");
  isHeart.setAttribute("src", heart);

  function renderLikes(isLikes) {
    console.log("isLikes", isLikes);
    let moreLikes = 0;
    moreLikes = ++isLikes;
    // allLikes = ++isLikes;
    console.log("renderLikes", moreLikes);
    return moreLikes;
  }

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

    // Create a date element for the artist date

    const isDate = document.createElement("div");
    isDate.classList.add("card_date");
    isDate.textContent = date;

    // Create a title element for the artist title

    const isTitle = document.createElement("div");
    isTitle.classList.add("card_description_title");
    isTitle.textContent = title;

    const isTagline = document.createElement("div");
    isTagline.classList.add("card_description_Tagline");
    isTagline.textContent = tagline;

    const heartButton = document.createElement("button");
    heartButton.classList.add("heartButton");

    heartButton.addEventListener("click", renderLikes);
    heartButton.src = "assets/images/likes.svg";

    // Create a likes element for the artist likes
    const isLikes = document.createElement("div");
    isLikes.classList.add("card_description_likes");
    isLikes.textContent = likes;

    const creationLikes = document.createElement("div");
    creationLikes.classList.add("card_description_creationLikes");
    creationLikes.appendChild(isLikes);
    creationLikes.appendChild(isHeart);
    isHeart.addEventListener("click", () => renderLikes(likes));

    description.appendChild(isTitle);

    description.appendChild(creationLikes);

    console.log("isHeart", isLikes);

    // append  an Image, a date, a likes, a title,  an image to the article element

    card.appendChild(description);

    return card;
  }

  //ToDo
  //recuperer le chiffre total et le chiffre de la card  l'element le plus pres l'id et la classe
  //je dois les incrementer en meme temps.

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

    const isPicture = document.createElement("img");
    isPicture.setAttribute("src", picture);

    // append  an Image, a date, a likes, a title,  an image to the header element

    article.appendChild(isName);
    article.appendChild(location);
    article.appendChild(isTagline);

    return article;
  }

  function getPhotographerImage() {
    // Create an article element
    const artistFace = document.createElement("article");
    artistFace.id = id;

    const isPicture = document.createElement("img");
    isPicture.setAttribute("src", picture);

    // append  an Image, a date, a likes, a title,  an image to the header element
    artistFace.appendChild(isPicture);

    return artistFace;
  }

  function getPhotographerPrice() {
    // Create an article element
    const PhotographerPrice = document.createElement("article");
    PhotographerPrice.id = id;

    // Create a price element for the artist price

    const isPrice = document.createElement("div");
    isPrice.classList.add("price");
    isPrice.textContent = `${price}€/jour`;
    // Create a price element for the artist price

    // append  an Image, a date, a likes, a title,  an image to the header element

    PhotographerPrice.appendChild(isPrice);

    return PhotographerPrice;
  }

  return {
    getPhotographerCreationCardDOM,
    getPhotographerIdentityCardDOM,
    getPhotographerImage,
    getPhotographerPrice,
    renderLikes,
  };
}
