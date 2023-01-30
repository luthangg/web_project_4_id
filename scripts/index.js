// const editButton = document.querySelector('.button_type_edit');
const closeButton = document.querySelector('.popupclose-button');
const popupButton = document.querySelector('.button_type_edit');

const modalEditPopUp = document.querySelector('.popup');

const nameProfile = document.querySelector('.profilename');
const jobProfile = document.querySelector('.profilejob');

const formElement = document.querySelector('.popupform');
const nameInput = document.querySelector('.popupinput_type_name');
const jobInput = document.querySelector('.popupinput_type_job');

// editButton.addEventListener('click', togglePopup);
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

// function togglePopup() {
//   if (!popup.classList.contains('popup_opened')) {
//     nameInput.value = nameProfile.textContent;
//     jobInput.value = jobProfile.textContent;
//   }
//   popup.classList.toggle('popup_opened');
// }

function formSubmitHandler(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  // triggerCloseModal();
}