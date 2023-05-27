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
  const Image = `assets/images/${photographerId}/${image}`;
  const Video = `assets/images/${photographerId}/${video}`;
  function getMediaCardDOM() {
    // Create an article element
    const card = document.createElement("card");
    card.id = id;

    // Create a image element for the artist image
    const isImage = document.createElement("img");
    isImage.classList.add("card_image");
    isImage.setAttribute("src", Image);

    // Create a image element for the artist image
    const isVideo = document.createElement("video");
    isVideo.setAttribute("source", Video);

    // Create a likes element for the artist likes
    const isLikes = document.createElement("div");
    isLikes.classList.add("card_likes");
    isLikes.textContent = likes;

    // Create a date element for the artist date

    const isDate = document.createElement("div");
    isDate.classList.add("card_date");
    isDate.textContent = date;

    // Create a title element for the artist title

    const isTitle = document.createElement("div");
    isTitle.classList.add("card_title");
    isTitle.textContent = title;

    // append  an Image, a date, a likes, a title,  an image to the article element
    card.appendChild(isVideo);
    card.appendChild(isImage);
    card.appendChild(isDate);
    card.appendChild(isLikes);

    card.appendChild(isTitle);

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

    // Create an image element for the portrait
    const isPicture = document.createElement("img");
    isPicture.classList.add("photograph-header_description_picture");
    isPicture.setAttribute("src", picture);
    // Create a price element for the artist price

    const isPrice = document.createElement("div");
    isPrice.classList.add("price");
    isPrice.textContent = `${price}€/jour`;

    // append  an Image, a date, a likes, a title,  an image to the header element

    article.appendChild(isName);
    article.appendChild(location);
    article.appendChild(isTagline);
    article.appendChild(isPrice);

    article.appendChild(isPicture);
    return article;
  }

  return { getMediaCardDOM, getPhotographerIdentityCardDOM };
}
