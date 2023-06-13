function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

  function getUserCardDOM() {
    // Create an article element
    const article = document.createElement("article");

    // Create an link element for the card artist

    const photographerCardLink = document.createElement("a");
    photographerCardLink.classList.add("photographerLink");
    photographerCardLink.setAttribute("href", `photographer.html?id=${id}`);
    photographerCardLink.setAttribute(
      "aria-label",
      `Lien vers le portfolio de ${name}`
    );

    // Create an image element for the portrait
    const img = document.createElement("img");
    img.setAttribute("src", picture);

    // Create a name element for the artist name
    const isName = document.createElement("h2");
    isName.textContent = name;

    // Create a location element for the artist city and artist country
    const location = document.createElement("div");
    location.classList.add("city", "country");
    location.textContent = `${city}, ${country}`;

    // Create a tagline element for the artist tagline
    const isTagline = document.createElement("div");
    isTagline.classList.add("tagline");
    isTagline.textContent = tagline;

    // Create a price element for the artist price
    const isPrice = document.createElement("div");
    isPrice.classList.add("price");
    isPrice.textContent = `${price}€/jour`;

    // append  an image, a name,  to the photographerCardLink element
    photographerCardLink.appendChild(img);
    photographerCardLink.appendChild(isName);

    // append  a location, a link, a price, a tagline, a name, an image to the article element

    article.appendChild(photographerCardLink);
    article.appendChild(location);
    article.appendChild(isTagline);
    article.appendChild(isPrice);
    return article;
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
    sortPhotographerCreationCardDOM,
    dropDownEventListener,
    getUserCardDOM,
  };
}
