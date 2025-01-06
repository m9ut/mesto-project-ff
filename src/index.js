import './pages/index.css';
import { initialCards } from './components/cards.js'
import { getCard, removeCard, likeCard } from './components/card.js'
import { handleClick, openModal, closeModal } from './components/modal.js'
import { enableValidation, clearValidation } from './components/validation.js';
import { getUserData, updateUserData, updateUserImage, getInitialCards, postNewCard, deleteCard, addLike, deleteLike } from './components/api.js'

const placesList = document.querySelector('.places__list');

const profileEditButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_type_edit');
const profileForm = document.forms['edit-profile'];
const profileNameInput = profileForm.elements.name;
const profileJobInput = profileForm.elements.description;
const profileNameContent = document.querySelector('.profile__title');
const profileJobContent = document.querySelector('.profile__description');

const userImageButton = document.querySelector('.profile__image_overlay')
const userImagePopup = document.querySelector('.popup_type_user-image');
const userImageForm = document.forms['edit-user-image'];
const userImage = document.querySelector('.profile__image'); 

const cardAddButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.popup_type_new-card');
const cardForm = document.forms['new-place'];
const cardNameInput = document.querySelector('.popup__input_type_card-name'); 
const cardLinkInput = document.querySelector('.popup__input_type_url');

const imageItem = document.querySelector('.popup__image');
const imagePopup = document.querySelector('.popup_type_image');
const imageCaption = document.querySelector('.popup__caption');

let userId = '';

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const showLoading = (isLoading, buttonElement) => {
  if (isLoading){
    buttonElement.innerHTML = 'Сохранение...';
  }
  else {
    buttonElement.innerHTML ='Сохранить';
  }
}

const showCards = (element, removeCard, likeCard, openImage, userId) => {
  const cardElement =  getCard(element, removeCard, likeCard, openImage, userId);
  placesList.append(cardElement);
}

const setProfilePopup = (formElement, name, description) => {
  formElement.name.value = name;
  formElement.description.value = description;
}

const setProfileData = (userData) => {
  profileNameContent.textContent = userData.name;
  profileJobContent.textContent = userData.about;
  userImage.style.backgroundImage = `url(${userData.avatar})`;
  userId = userData._id;
}

const handleProfileFormSubmit = (event) => {
  event.preventDefault();
  const profilePopupButton = profileForm.querySelector('.popup__button');
  showLoading(true, profilePopupButton);
  updateUserData({
    name: profileNameInput.value,
    about: profileJobInput.value
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
  })
}

profileEditButton.addEventListener('click', (event) => {
  clearValidation(profileForm, validationConfig);
  setProfilePopup(profileForm, profileNameContent.textContent, profileJobContent.textContent);
  openModal(profilePopup);
})

profilePopup.addEventListener('click', handleClick);
profileForm.addEventListener('submit', handleProfileFormSubmit);

const handleUserImageFormSubmit = (event) => {
  event.preventDefault();
  const userImagePopupButton = userImageForm.querySelector('.popup__button');
  showLoading(true, userImagePopupButton);
  updateUserImage(userImageForm.link.value)
  .then((updateProfile) => {
    setProfileData(updateProfile);
    closeModal(userImagePopup);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    showLoading(false, userImagePopupButton);
  })
}

userImageButton.addEventListener('click', (event) => {
  userImageForm.reset();
  clearValidation(userImageForm, validationConfig);
  openModal(userImagePopup);
})

userImagePopup.addEventListener('click', handleClick);
userImageForm.addEventListener('submit', handleUserImageFormSubmit);

cardAddButton.addEventListener('click', (event)=> {
  openModal(cardPopup);
});
cardPopup.addEventListener('click', handleClick);

const handleNewCardFormSubmit = (event) => {
  event.preventDefault();
  const cardPopupButton = cardForm.querySelector('.popup__button');
  showLoading(true, cardPopupButton);
  const name = cardNameInput.value;
  const link = cardLinkInput.value;
  postNewCard({ name, link })
  .then((cardElement) => {
    const newCard = getCard(cardElement, removeCard, likeCard, openImage, userId);
    placesList.prepend(newCard);
    closeModal(cardPopup);
    cardForm.reset();
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    showLoading(false, cardPopupButton);
  })
}

cardForm.addEventListener('submit', handleNewCardFormSubmit);

cardAddButton.addEventListener('click', () => {
  cardForm.reset();
  clearValidation(cardForm, validationConfig);
  openModal(cardPopup);
})

Promise.all([getUserData(), getInitialCards()])
.then(([userData, element]) => {
  setProfileData(userData);
  element.forEach((cardElement) => {
    showCards(cardElement, removeCard, likeCard, openImage, userId);
  })
})
.catch((error) => {
  console.error('Did not get any data: ', error);
})

enableValidation(validationConfig);

const openImage = (event) => {
  imageItem.src = event.target.src;
  imageItem.alt = event.target.alt;
  imageCaption.textContent = event.target.alt;
  openModal(imagePopup);
}

imagePopup.addEventListener('click', handleClick);