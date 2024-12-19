import "./pages/index.css";

import { initialCards } from "./components/cards.js";

import { createCard, deleteCard, toggleLike } from "./components/card.js";

import {
  profileEditButton,
  profilePopup,
  profileForm,
  profileName,
  profileJob,
  profileNameContent,
  profileJobContent,
  addCardButton,
  cardPopup,
  cardForm,
  cardName,
  cardLink,
  imageItem,
  imagePopup,
  imageSign,
} from "./components/constants.js";

import { openModal, handleClick, closeModal } from "./components/modal.js";

const cardsContainer = document.querySelector(".places__list");

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileNameContent.textContent = profileName.value;
  profileJobContent.textContent = profileJob.value;
  closeModal(profilePopup);
}

profileEditButton.addEventListener("click", () => {
  profileName.value = profileNameContent.textContent;
  profileJob.value = profileJobContent.textContent;
  openModal(profilePopup);
});

profilePopup.addEventListener("click", handleClick);
profileForm.addEventListener("submit", handleProfileFormSubmit);

function addCard(element) {
  cardsContainer.append(createCard(element, deleteCard, toggleLike, openImg));
}

initialCards.forEach((element) => addCard(element));

addCardButton.addEventListener("click", () => {
  openModal(cardPopup);
});

cardPopup.addEventListener("click", handleClick);

function newCardSubmit(event) {
  event.preventDefault();
  const cardInfo = {
    name: cardName.value,
    link: cardLink.value,
  };
  cardsContainer.prepend(createCard(cardInfo, deleteCard, toggleLike, openImg));
  cardForm.reset();
  closeModal(cardPopup);
}

cardForm.addEventListener("submit", newCardSubmit);

function openImg(event) {
  imageItem.src = event.target.src;
  imageItem.alt = event.target.alt;
  imageSign.textContent = event.target.alt;
  openModal(imagePopup);
}

imagePopup.addEventListener("click", handleClick);
