import './pages/index.css';

import { initialCards } from './components/cards.js';

const placesList = document.querySelector(".places__list");

import { getCard, removeCard } from './components/card.js';

const addCard = (element) => {
  placesList.append(getCard(element, removeCard));
}

initialCards.forEach((element) => addCard(element));