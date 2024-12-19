function handleEscape(event) {
  if (event.key === "Escape") {
    closeModal(document.querySelector(".popup_is-opened"));
  }
}

function handleClick(event) {
  if (event.target.classList.contains(".popup__close") || event.target.classList.contains("popup_is-opened")) {
     closeModal(event.currentTarget);
  }
}

function openModal(element) {
  element.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscape);
}

function closeModal(element) {
  element.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscape);
}

export { handleClick, openModal, closeModal };
