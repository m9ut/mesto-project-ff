const cardTemplate = document.querySelector("#card-template").content;

const placesList = document.querySelector(".places__list");

const cardCreate = (name, link, removeCard) => {
  const cardElement = cardTemplate.cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  cardElement.querySelector(".card__image").src = link;
  cardElement.querySelector(".card__image").alt = name;
  cardElement.querySelector(".card__title").textContent = name;
  deleteButton.addEventListener("click", function (event) {
    cardRemove(event);
  });
  return cardElement;
};

const cardRemove = function (event) {
  let cardDelete = event.target.closest(".places__item");
  cardDelete.remove();
};

initialCards.forEach((item) => {
  placesList.append(cardCreate(item.name, item.link, cardRemove));
});
