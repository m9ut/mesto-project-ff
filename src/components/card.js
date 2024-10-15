import {
  cardTemplate,
  cardsContainer,
  popupImageElement,
  popupImageTitle,
  popupImage,
  newCardNameInput,
  newCardUrlInput,
  popupNewCardElement,
} from "../constants.js";
import { openModal, closeModal } from "./modal.js";

export function createCard(
  cardData,
  { deleteCard, likeCard, openImage }
) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");

  const cardTitle = cardElement.querySelector(".card__title");

  const cardImage = cardElement.querySelector(".card__image");

  const likeButton = cardElement.querySelector(".card__like-button");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.alt;
  cardTitle.textContent = cardData.name;
 

  cardImage.addEventListener("click", () => openImage(cardData));
  likeButton.addEventListener("click", likeCard);
  deleteButton.addEventListener("click", () => deleteCard(cardElement));

  return cardElement;
}

export function deleteCard(cardData) {
  cardData.remove();
}

export function likeCard(evt) {
  const card = evt.target;
  card.classList.toggle("card__like-button_is-active");
}

export function openImage(cardData) {
  openModal(popupImageElement);
  popupImageTitle.textContent = cardData.name;
  popupImage.src = cardData.link;
  popupImage.alt = cardData.alt;
}

export function handleAddNewCard(evt) {
  evt.preventDefault();

  const newCard = {
    name: newCardNameInput.value,
    link: newCardUrlInput.value,
    alt: "",
  };

  renderCard(newCard);
  closeModal(popupNewCardElement);
  evt.target.reset();
}

function prependCard(card, cardsContainer) {
  cardsContainer.prepend(card);
}

function renderCard(cardData) {
  const card = createCard(cardData, { deleteCard, likeCard, openImage });
  prependCard(card, cardsContainer);
}
