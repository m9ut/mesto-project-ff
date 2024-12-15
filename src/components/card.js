const cardsTemplate = document.querySelector("#card-template").content;

const getCard = (element, removeCard) => {

  const cardItem = cardsTemplate.querySelector('.card').cloneNode(true);

  const cardImage = cardItem.querySelector('.card__image');
  const cardContent = cardItem.querySelector('.card__title');

  const cardDeleteButton = cardItem.querySelector('.card__delete-button');

  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardContent.textContent = element.name;

  cardDeleteButton.addEventListener('click', () => {
    removeCard(cardItem);
  });

  return cardItem;
}

const removeCard = (element) => {
  element.remove();
}

export { getCard, removeCard };