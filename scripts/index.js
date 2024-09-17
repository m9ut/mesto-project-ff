// @todo: Темплейт карточки

const cardsTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки

const createCard = (name, link, removeCard) => {
    const placesItem = cardsTemplate.cloneNode(true);
    const deleteButton = placesItem.querySelector('.card__delete-button');
    placesItem.querySelector('.card__image').src = link;
    placesItem.querySelector('.card__image').alt = name;
    placesItem.querySelector('.card__title').textContent = name;
    deleteButton.addEventListener('click', (event) => {
      removeCard(event);
    });

    return placesItem;
}

// @todo: Функция удаления карточки

const removeCard = (event) => {
    let placeToDelete = event.target.closest('.places__item');
    placeToDelete.remove();
  }

// @todo: Вывести карточки на страницу

initialCards.forEach((item) => {
    addCard(item.name, item.link, removeCard);
    placesList.append(createCard(item.name, item.link, removeCard));
  })
