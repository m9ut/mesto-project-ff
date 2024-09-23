const cardTemplate = document.querySelector("#card-template").content;

const cardsContainer = document.querySelector(".places__list");

const createCard = (cardData, deleteCard) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardElement.querySelector(".card__title").textContent = cardData.name;

  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.alt;

  deleteButton.addEventListener("click", () => deleteCard(cardElement));
  return cardElement;
};

function deleteCard(cardData) {
  cardData.remove();
}

initialCards.forEach((cardData) => {
  cardsContainer.append(createCard(cardData, deleteCard));
});
