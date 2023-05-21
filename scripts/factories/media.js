export function mediaFactory(data) {
  const { title, id, image, video, likes, date, price, photographerId, name } =
    data;
  const Image = `assets/photographers/${photographerId}/${image}`;
  function getMediaCardDOM() {
    // Create an article element
    const article = document.createElement("article");
    article.id = id;

    const isName = document.createElement("h2");
    isName.textContent = name;

    const isImage = document.createElement("photographerImage");
    isImage.classList.add("photographerImage");
    isImage.setAttribute("src", Image);

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
    article.appendChild(isImage);
    article.appendChild(isDate);
    article.appendChild(isLikes);
    article.appendChild(isPrice);
    return article;
  }
  return { getMediaCardDOM };
}
