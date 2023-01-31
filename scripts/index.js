const closeButton = document.querySelector('.popup__close-button');
const popupButton = document.querySelector('.button_type_edit');

const modalEditPopUp = document.querySelector('.popup');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

formElement.addEventListener('submit', formSubmitHandler);
closeButton.addEventListener('click', triggerCloseModal);
popupButton.addEventListener('click', triggerOpenModal);

function triggerOpenModal() {
  modalEditPopUp.style.display = "block";
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function triggerCloseModal() {
  modalEditPopUp.style.display = "none";
}


function formSubmitHandler(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  triggerCloseModal();
}