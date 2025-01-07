const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-29",
  headers: {
    authorization: "acded56c-69ba-46c3-84dc-c91bcbdd5c55",
    "Content-Type": "application/json",
  },
};

const getResData = (result) => {
  if (result.ok) {
    return result.json();
  }
  return Promise.reject(`Error: ${result.status}`);
};

const getUserData = () => {
  return fetch(config.baseUrl + "/users/me", {
    headers: config.headers,
  }).then(getResData);
};

const getInitialCards = () => {
  return fetch(config.baseUrl + "/cards", {
    headers: config.headers,
  }).then(getResData);
};

export const getInitialInfo = async () => {
  return Promise.all([getUserInfo(), getInitialCards()]);
};

const editProfile = (userProfileData) => {
  return fetch(config.baseUrl + "/users/me", {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({ 
      name: userProfileData.name,
      about: userProfileData.about,
     }),
  }).then(getResData);
};

const postNewCard = (cardData) => {
  return fetch(config.baseUrl + "/cards", {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: cardData.name,
      link: cardData.link,
    }),
  }).then(getResData);
};

const removeCard = (cardId) => {
  return fetch(config.baseUrl + `/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(getResData);
};

const tagLike = (cardId) => {
  return fetch(config.baseUrl + `/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then(getResData);
};

const removeLike = (cardId) => {
  return fetch(config.baseUrl + `/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(getResData);
};

const updateAvatar = (url) => {
  return fetch(config.baseUrl + "/users/me/avatar", {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({ avatar: url }),
  }).then(getResData);
};

export {
  getUserData,
  editProfile,
  updateAvatar,
  getInitialCards,
  postNewCard,
  removeCard,
  tagLike,
  removeLike,
};
