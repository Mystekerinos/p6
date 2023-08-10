export function mediaFactory(data, tabDatas, tabindex) {
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

  const ArrayCreationArtist = [];
  ArrayCreationArtist.push(data);

  let currentLightboxMediaId = 0;

  // Variable initialization

  const Image = `assets/images/${photographerId}/${image}`;
  const Video = `assets/images/${photographerId}/${video}`;
  const picture = `assets/photographers/Photographers ID Photos/${portrait}`;
  const heart = "assets/images/likes.svg";

  // creation of the image of the heart
  const isHeart = document.createElement("img");
  isHeart.classList.add("heart");
  isHeart.setAttribute("src", heart);
  isHeart.setAttribute("alt", "coeur");

  // Create an card element

  function getPhotographerCreationCardDOM() {
    const card = document.createElement("card");
    card.classList.add("card");
    card.id = id;

    card.setAttribute("tabindex", tabindex);

    const description = document.createElement("div");
    description.classList.add("card_description");

    // Create a image element for the artist image
    const isImage = document.createElement("img");

    if (image) {
      isImage.classList.add("card_image");
      isImage.classList.add("hover-shadow");
      isImage.setAttribute("src", Image);
      isImage.setAttribute("alt", "image avec le titre");

      isImage.addEventListener("click", () => {
        renderLightBoxMedia(id);
        addLightBoxActions();
      });

      card.appendChild(isImage);
    }

    // Create a image element for the artist image
    const isVideo = document.createElement("video");

    if (video) {
      isVideo.classList.add("card_video");
      isVideo.setAttribute("src", Video);
      isVideo.setAttribute("aria-label", "vidéo avec le titre");

      isVideo.addEventListener("click", () => {
        renderLightBoxMedia(id);
        addLightBoxActions();
      });

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

    isHeart.addEventListener("click", () => renderLikes(isLikes));

    description.appendChild(isTitle);

    description.appendChild(creationLikes);

    card.appendChild(description);

    return card;
  }

  // Lightbox navigation

  function addLightBoxActions() {
    const closeLightBox = document.getElementById("lightbox");
    closeLightBox.style.display = "block";
    const lightboxNextBtn = document.getElementById("lightboxNextBtn");
    lightboxNextBtn.addEventListener("click", (e) => {
      nextLightBoxMedia();
    });

    const lightboxPrevBtn = document.getElementById("lightboxPrevBtn");
    lightboxPrevBtn.addEventListener("click", () => {
      previousLightBoxMedia();
    });
    // Add an event listener to the close button in the lightbox modal to close the modal on click
    const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");
    lightboxCloseBtn.addEventListener("click", () => {
      closeModalLightBox();
    });
  }

  // creation of the photographer's information space

  function getPhotographerIdentityCardDOM() {
    // Create an article element
    const article = document.createElement("article");
    article.id = id;

    // Create a name element for the artist name
    const isName = document.createElement("h1");
    isName.textContent = name;
    isName.setAttribute("tabindex", (tabindex = 0));
    document.title = `${name} - Fisheye`;

    // Create a location element for the artist city and artist country
    const location = document.createElement("div");
    location.classList.add("photograph-header_description_location");
    location.setAttribute("tabindex", (tabindex = 0));
    location.textContent = `${city}, ${country}`;

    // Create a tagline element for the artist tagline
    const isTagline = document.createElement("div");
    isTagline.classList.add("photograph-header_description_tagline");
    isTagline.textContent = tagline;
    isTagline.setAttribute("tabindex", (tabindex = 0));
    const isPicture = document.createElement("img");
    isPicture.setAttribute("src", picture);
    isPicture.setAttribute("alt", "text");

    // append  a name, a tagline, a location,  to the article element
    article.appendChild(isName);
    article.appendChild(location);
    article.appendChild(isTagline);

    return article;
  }
  //  Photographer's profile picture

  function getPhotographerImage() {
    // Create an article element
    const artistFace = document.createElement("article");
    artistFace.id = id;

    const isPicture = document.createElement("img");
    isPicture.setAttribute("src", picture);
    isPicture.setAttribute("alt", `image de ${name}`);
    isPicture.setAttribute("tabindex", tabindex);
    // append  an Image, a date, a likes, a title,  an image to the header element
    artistFace.appendChild(isPicture);

    return artistFace;
  }

  //photographer's price
  function getPhotographerPrice() {
    // Create an article element
    const PhotographerPrice = document.createElement("article");
    PhotographerPrice.id = id;

    // Create a price element for the artist price

    const isPrice = document.createElement("div");
    isPrice.classList.add("price");
    isPrice.setAttribute("tabindex", (tabindex = 25));
    isPrice.textContent = `${price}€/jour`;
    isPrice.setAttribute("alt", `${price}€/jour`);

    PhotographerPrice.appendChild(isPrice);

    return PhotographerPrice;
  }

  //calculate the number of likes

  function renderLikes(isLikes) {
    let allLikes = document.querySelector(".allLikes");
    let NbAllLike = parseInt(allLikes.textContent);
    let NbLike = parseInt(isLikes.textContent);
    if (NbLike == likes) {
      NbLike++;
      NbAllLike++;
    } else {
      NbLike--;
      NbAllLike--;
    }
    isLikes.textContent = NbLike;
    allLikes.textContent = NbAllLike;
  }

  // adapt the form to the name of the photographer
  function getNameForm() {
    const nameForm = document.createElement("span");
    nameForm.textContent = name;

    return nameForm;
  }

  // Initialize a variable that will contain the current lightbox media id

  function renderLightBoxMedia(mediaId) {
    const mediaObject = tabDatas.find((media) => media.id == mediaId);

    // Update the currentMediaId variable with the current lightbox media id
    currentLightboxMediaId = mediaId;

    // Get the lightboxMedia element
    const lightboxMedia = document.getElementById("lightboxMedia");

    lightboxMedia.style.display = "block";

    // If the media is an image add the appropriate media card html to the lightboxMedia element

    if (mediaObject?.image) {
      lightboxMedia.innerHTML = `<img class="lightbox-img" title="${mediaObject.title}" id="${mediaObject.id}" src="assets/images/${mediaObject.photographerId}/${mediaObject.image}"  alt="image ${mediaObject.title}"><figcaption class="lightbox-caption"  alt="${mediaObject.title}">${mediaObject.title}</figcaption>`;
    }

    // If the media is a video add the appropriate media card html to the lightboxMedia element

    if (mediaObject?.video) {
      lightboxMedia.innerHTML = `
        <video  controls="false" class="lightbox-video" title=" ${mediaObject.title}  alt=" ${mediaObject.title} " id="${mediaObject.id}"  controls>
          <source src="assets/images/${mediaObject.photographerId}/${mediaObject.video}" type="video/mp4");>
        </video>
        <figcaption class="lightbox-caption" tabindex=41 alt="${mediaObject.title}">${mediaObject.title}</figcaption>
    `;
    }
    currentLightboxMediaId = mediaObject.id;
    return currentLightboxMediaId;
  }

  // function to move to the next element

  function nextLightBoxMedia() {
    const currentLightboxMediaId = parseInt(
      document.querySelector(".lightbox-img")?.id ??
        document.querySelector(".lightbox-video")?.id
    );

    // Find the index of the current media item in the photographerMedia array
    const currentIndex = tabDatas.findIndex(
      (media) => media.id == currentLightboxMediaId
    );

    // If the current media item is not the last item in the array, display the next item
    if (currentIndex < tabDatas.length - 1) {
      const nextMediaId = tabDatas[currentIndex + 1].id;

      renderLightBoxMedia(nextMediaId);
      // Else display the first item of the array
    } else {
      const nextMediaId = tabDatas[0].id;

      renderLightBoxMedia(nextMediaId);
    }
  }

  // function to move to the previous element

  function previousLightBoxMedia() {
    const currentLightboxMediaId = parseInt(
      document.querySelector(".lightbox-img")?.id ??
        document.querySelector(".lightbox-video")?.id
    );
    // Find the index of the current media item in the photographerMedia array
    const currentIndex = tabDatas.findIndex(
      (media) => media.id == currentLightboxMediaId
    );

    // If the current media item is not the first item in the array, display the previous item
    if (currentIndex > 0) {
      const previousMediaId = tabDatas[currentIndex - 1].id;
      renderLightBoxMedia(previousMediaId);
      // Else display the last item of the array
    } else {
      const previousMediaId = tabDatas[tabDatas.length - 1].id;
      renderLightBoxMedia(previousMediaId);
    }
  }

  // closing the lightbox
  function closeModalLightBox() {
    // const closeModalLightBox = document.getElementById("lightboxMedia");
    // closeModalLightBox.style.display = "none";
    const closeLightBox = document.getElementById("lightbox");
    closeLightBox.style.display = "none";
  }

  return {
    getNameForm,
    getPhotographerCreationCardDOM,
    getPhotographerIdentityCardDOM,
    getPhotographerImage,
    getPhotographerPrice,
    renderLikes,
    renderLightBoxMedia,
    nextLightBoxMedia,
    previousLightBoxMedia,
    closeModalLightBox,
  };
}
