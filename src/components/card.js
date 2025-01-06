import {deleteCard, addLike, deleteLike } from './api.js'

const cardsTemplate = document.querySelector('#card-template').content;

const getCard = (element, removeCard, likeCard, openImage, userId) => {
  const cardItem = cardsTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardItem.querySelector('.card__image');
  const cardContent = cardItem.querySelector('.card__title');
  const cardLikeButton = cardItem.querySelector('.card__like-button');
  const cardDeleteButton = cardItem.querySelector('.card__delete-button');
  const cardLikeCount = cardItem.querySelector('.card__like-count');

  cardItem.dataset.cardId = element._id;
  cardItem.dataset.ownerId = element.owner['_id'];
  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardContent.textContent = element.name;
  cardLikeCount.textContent = element.likes.length;

  const isLiked = element.likes.some((like) => like._id === userId);
  if (isLiked) {
    cardLikeButton.classList.add('card__like-button_is-active');
  }

  if (element.owner._id === userId) {
    cardDeleteButton.addEventListener('click', (event) => {
      removeCard(cardItem, element._id);
    })
  }
  else {
    cardDeleteButton.remove();
  }

  cardLikeButton.addEventListener('click', (event) => {
    likeCard(cardLikeCount, cardLikeButton, element._id)
  })

  cardImage.addEventListener('click', openImage);

  return cardItem;
}

const removeCard = (cardItem, cardId) => {
  deleteCard(cardId)
  .then((result) => {
    cardItem.remove();
  })
  .catch((error) => {
    console.log(error);
  })
}

const likeCard = (cardLikeCount, cardLikeButton, cardId) => {
  if (cardLikeButton.classList.contains('card__like-button_is-active')) {
    deleteLike(cardId)
    .then((result) => {
      cardLikeButton.classList.toggle('card__like-button_is-active');
      cardLikeCount.textContent = result.likes.length;
    })
    .catch((error) => {
      console.log(error);
    })
  }
  else {
    addLike(cardId)
    .then((result) => {
      cardLikeButton.classList.toggle('card__like-button_is-active');
      cardLikeCount.textContent = result.likes.length;
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

export { getCard, removeCard, likeCard };