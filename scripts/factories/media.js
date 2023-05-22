export function mediaFactory(data) {
  const { title, id, image, video, likes, date, price, photographerId } = data;
  const Image = `assets/images
  /${photographerId}/${id}/${image}`;
  const Video = `assets/images
  /${photographerId}/${video}`;
  function getMediaCardDOM() {
    // Create an article element
    const article = document.createElement("article");
    article.id = id;

    // Create a image element for the artist image
    const isImage = document.createElement("img");
    isImage.classList.add("image");
    isImage.setAttribute("src", Image);
    isImage.setAttribute("alt", title);

    // Create a image element for the artist image
    const isVideo = document.createElement("video");
    isVideo.setAttribute("source", Video);

    // Create a likes element for the artist likes
    const isLikes = document.createElement("likes");
    isLikes.classList.add("likes");
    isLikes.textContent = likes;

    // Create a date element for the artist date

    const isDate = document.createElement("date");
    isDate.classList.add("date");
    isDate.textContent = date;

    // Create a price element for the artist price

    const isPrice = document.createElement("price");
    isPrice.classList.add("price");
    isPrice.textContent = `${price}€/jour`;

    // append  an Image, a date, a likes, a title,  an image to the article element
    article.appendChild(isVideo);
    article.appendChild(isImage);
    article.appendChild(isDate);
    article.appendChild(isLikes);
    article.appendChild(isPrice);

    return article;
  }
  return { getMediaCardDOM };
}
