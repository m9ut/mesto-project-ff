const cardsTemplate = document.querySelector("#card-template").content;

function createCard(element, deleteCard, toggleLike, openImg) {
  const cardItem = cardsTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardItem.querySelector(".card__image");
  const cardContent = cardItem.querySelector(".card__title");
  const cardLikeButton = cardItem.querySelector(".card__like-button");
  const cardDeleteButton = cardItem.querySelector(".card__delete-button");

  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardContent.textContent = element.name;

  cardDeleteButton.addEventListener("click", () => {
    deleteCard(cardItem);
  });

  cardLikeButton.addEventListener("click", toggleLike);

  cardImage.addEventListener("click", openImg);

  return cardItem;
}

function deleteCard(element) {
  element.remove();
}

function toggleLike(event) {
  event.target.classList.toggle("card__like-button_is-active");
}

export { createCard, deleteCard, toggleLike };
