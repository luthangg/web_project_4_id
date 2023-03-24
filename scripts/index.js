// constants

// cards
const initialCards = [
  {
    name: 'Yosemite Valley',
    link: 'https://code.s3.yandex.net/web-code/yosemite.jpg',
  },
  {
    name: 'Lake Louise',
    link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg',
  },
  {
    name: 'Bald Mountains',
    link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg',
  },
  {
    name: 'Latemar',
    link: 'https://code.s3.yandex.net/web-code/latemar.jpg',
  },
  {
    name: 'Vanoise National Park',
    link: 'https://code.s3.yandex.net/web-code/vanoise.jpg',
  },
  {
    name: 'Lago di Braies',
    link: 'https://code.s3.yandex.net/web-code/lago.jpg',
  },
];
const initialCardsReverse = Object.assign([], initialCards).reverse();

// cardTemplate
const cardTemplate = document
  .querySelector('.card__template')
  .content.querySelector('.card');
const list = document.querySelector('.places__list');

// wrappers
const addPopup = document.querySelector('.popup_type_add');
const editPopup = document.querySelector('.popup_type_edit');
const imagePopup = document.querySelector('.popup_type_image');

// openButtons
const openEditPopupButton = document.querySelector('.button_type_edit');
const openAddPopupButton = document.querySelector('.button_type_add');

// closeButtons
const closeAddPopupButton = addPopup.querySelector('.button_type_close');
const closeEditPopupButton = editPopup.querySelector('.button_type_close');
const closeImagePopupButton = imagePopup.querySelector('.button_type_close');

// profileText
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

// editForm
const editForm = document.querySelector('.popup__form_type_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

// addForm
const addForm = document.querySelector('.popup__form_type_add');
const titleInput = document.querySelector('.popup__input_type_title');
const imageURLInput = document.querySelector('.popup__input_type_image-url');

// imagePopup
const popupImage = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

// functions

function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}

// sumbitHandlers
function editFormSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  togglePopup(editPopup);
}
function addFormSubmitHandler(evt) {
  evt.preventDefault();
  addNewCard(titleInput.value, imageURLInput.value);
  togglePopup(addPopup);
}

// cardGenerators
function addNewCard(title, link) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  const cardLikeButton = cardElement.querySelector('.button_type_like');
  const cardDeleteButton = cardElement.querySelector('.button_type_delete');

  cardTitle.textContent = title;
  cardImage.style.backgroundImage = `url(${link})`;

  cardLikeButton.addEventListener('click', () => {
    toggleLikeState(cardLikeButton);
  });

  cardDeleteButton.addEventListener('click', (evt) => {
    handleCardDeleteClick(evt);
  });

  cardImage.addEventListener('click', () => {
    popupImage.src = link;
    popupImage.alt = title;
    popupCaption.textContent = title;
    togglePopup(imagePopup);
  });

  list.prepend(cardElement);
}
function toggleLikeState(cardLikeButton) {
  cardLikeButton.classList.toggle('button_type_like_liked');
}
function handleCardDeleteClick(evt) {
  evt.target.parentNode.remove();
}

// eventListeners

// editForm
editForm.addEventListener('submit', editFormSubmitHandler);
openEditPopupButton.addEventListener('click', () => {
  if (!editPopup.classList.contains('popup_opened')) {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
  }
  togglePopup(editPopup);
});
closeEditPopupButton.addEventListener('click', () => {
  togglePopup(editPopup);
});

// addForm
addForm.addEventListener('submit', addFormSubmitHandler);
openAddPopupButton.addEventListener('click', () => {
  togglePopup(addPopup);
  addPopup.classList.add('popup_opened');
});
closeAddPopupButton.addEventListener('click', () => {
  togglePopup(addPopup);
});

// imagePopup
closeImagePopupButton.addEventListener('click', () => {
  togglePopup(imagePopup);
});

// cardGeneration
initialCardsReverse.forEach((data) => {
  addNewCard(data.name, data.link);
});
