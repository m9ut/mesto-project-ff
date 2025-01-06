import "./pages/index.css";

import { createCard, deleteCard, toggleLike } from "./components/card.js";
import { handleClick, openModal, closeModal } from "./components/modal.js";
import { enableValidation, clearValidation } from "./components/validation.js";
import {
  getUserData,
  updateUserData,
  updateProfileImage,
  getInitialCards,
  postNewCard,
  removeCard,
  tagLike,
  removeLike,
} from "./components/api.js";

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
  profileImageButton, 
  profileImagePopup, 
  profileImageForm,
  profileImage
} from "./components/constants.js";

const placesList = document.querySelector(".places__list");

let userId = "";

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const showLoading = (isLoading, buttonElement) => {
  if (isLoading) {
    buttonElement.innerHTML = "Сохранение...";
  } else {
    buttonElement.innerHTML = "Сохранить";
  }
};

const showCards = (element, deleteCard, toggleLike, openImg, userId) => {
  const cardElement = createCard(
    element,
    deleteCard,
    toggleLike,
    openImg,
    userId
  );
  placesList.append(cardElement);
};

const setProfilePopup = (formElement, name, description) => {
  formElement.name.value = name;
  formElement.description.value = description;
};

const setProfileData = (userData) => {
  profileNameContent.textContent = userData.name;
  profileJobContent.textContent = userData.about;
  profileImage.style.backgroundImage = `url(${userData.avatar})`;
  userId = userData._id;
};

const handleProfileFormSubmit = (event) => {
  event.preventDefault();
  const profilePopupButton = profileForm.querySelector(".popup__button");
  showLoading(true, profilePopupButton);
  updateUserData({
    name: profileName.value,
    about: profileJob.value,
  })
    .then((updateProfile) => {
      setProfileData(updateProfile);
      closeModal(profilePopup);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      showLoading(false, profilePopupButton);
    });
};

profileEditButton.addEventListener("click", (event) => {
  clearValidation(profileForm, validationConfig);
  setProfilePopup(
    profileForm,
    profileNameContent.textContent,
    profileJobContent.textContent
  );
  openModal(profilePopup);
});

profilePopup.addEventListener("click", handleClick);
profileForm.addEventListener("submit", handleProfileFormSubmit);

const handleProfileImageFormSubmit = (event) => {
  event.preventDefault();
  const profileImagePopupButton = profileImageForm.querySelector(".popup__button");
  showLoading(true, profileImagePopupButton);
  updateProfileImage(profileImageForm.link.value)
    .then((updateProfile) => {
      setProfileData(updateProfile);
      closeModal(profileImagePopup);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      showLoading(false, profileImagePopupButton);
    });
};

profileImageButton.addEventListener("click", (event) => {
  profileImageForm.reset();
  clearValidation(profileImageForm, validationConfig);
  openModal(profileImagePopup);
});

profileImagePopup.addEventListener("click", handleClick);
profileImageForm.addEventListener("submit", handleProfileImageFormSubmit);

addCardButton.addEventListener("click", (event) => {
  openModal(cardPopup);
});
cardPopup.addEventListener("click", handleClick);

const handleNewCardFormSubmit = (event) => {
  event.preventDefault();
  const cardPopupButton = cardForm.querySelector(".popup__button");
  showLoading(true, cardPopupButton);
  const name = cardName.value;
  const link = cardLink.value;
  postNewCard({ name, link })
    .then((cardElement) => {
      const newCard = createCard(
        cardElement,
        deleteCard,
        toggleLike,
        openImg,
        userId
      );
      placesList.prepend(newCard);
      closeModal(cardPopup);
      cardForm.reset();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      showLoading(false, cardPopupButton);
    });
};

cardForm.addEventListener("submit", handleNewCardFormSubmit);

addCardButton.addEventListener("click", () => {
  cardForm.reset();
  clearValidation(cardForm, validationConfig);
  openModal(cardPopup);
});

Promise.all([getUserData(), getInitialCards()])
  .then(([userData, element]) => {
    setProfileData(userData);
    element.forEach((cardElement) => {
      showCards(cardElement, deleteCard, toggleLike, openImg, userId);
    });
  })
  .catch((error) => {
    console.error("Did not get any data: ", error);
  });

enableValidation(validationConfig);

const openImg = (event) => {
  imageItem.src = event.target.src;
  imageItem.alt = event.target.alt;
  imageSign.textContent = event.target.alt;
  openModal(imagePopup);
};

imagePopup.addEventListener("click", handleClick);
