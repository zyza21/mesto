const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const inputNameEditProfile = popupEditProfile.querySelector('.popup__text_type_name');
const inputInfoAboutEditProfile = popupEditProfile.querySelector('.popup__text_type_about');
const editButton = document.querySelector('.profile__edit-button');
const closeButtonEditProfile = popupEditProfile.querySelector('.popup__close-button');
const formElementEditProfile = popupEditProfile.querySelector('.popup__in-container');
const name = document.querySelector('.profile__name'); 
const infoAbout = document.querySelector('.profile__info-about'); 

function openPopupEditProfile() {
  inputNameEditProfile.value = name.textContent;
  inputInfoAboutEditProfile.value = infoAbout.textContent;
  popupEditProfile.classList.toggle('popup_active'); 
}

function closePopupEditProfile() {
  popupEditProfile.classList.toggle('popup_active');
}

editButton.addEventListener('click', openPopupEditProfile);
closeButtonEditProfile.addEventListener('click', closePopupEditProfile);
formElementEditProfile.addEventListener('submit', formSubmitHandlerEditProfile); 

function formSubmitHandlerEditProfile (evt) {
  evt.preventDefault();
  name.textContent = inputNameEditProfile.value; 
  infoAbout.textContent = inputInfoAboutEditProfile.value;
  closePopupEditProfile();
}



const popupAddCard = document.querySelector('.popup_type_add-card');
const inputNameAddCard = popupAddCard.querySelector('.popup__text_type_card-name');
const inputLinkAddCard = popupAddCard.querySelector('.popup__text_type_link');
const addButton = document.querySelector('.profile__add-button');
const closeButtonAddCard = popupAddCard.querySelector('.popup__close-button');

function openPopupAddCard() {
  inputNameAddCard.value = "";
  inputLinkAddCard.value = "";
  popupAddCard.classList.toggle('popup_active');
}

function closePopupAddCard() {
  popupAddCard.classList.toggle('popup_active');
}

addButton.addEventListener('click', openPopupAddCard);
closeButtonAddCard.addEventListener('click', closePopupAddCard);





function addCard(cardNameValue, cardLinkValue) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__title').textContent = cardNameValue;
  cardElement.querySelector('.card__img').src = cardLinkValue;
  cardElement.querySelector('.card__img').alt = cardNameValue;
  cardElement.querySelector('.popup-img__img').src = cardLinkValue;
  cardElement.querySelector('.popup-img__img').alt = cardNameValue;
  cardElement.querySelector('.popup-img__caption').textContent = cardNameValue;

  const imgOpenButton = cardElement.querySelector('.card__img-button');
  const imgCloseButton = cardElement.querySelector('.popup-img__close-button');
  const popupImg = cardElement.querySelector('.popup-img');
  imgOpenButton.addEventListener('click', function () {
    popupImg.classList.toggle('popup-img_active');
  });
  imgCloseButton.addEventListener('click', function () {
    popupImg.classList.toggle('popup-img_active');
  });

  cardElement.querySelector('.card__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like_active');
  });
  
  const trashButton = cardElement.querySelector('.card__trash');
  trashButton.addEventListener('click', function () {
    const trashElement = trashButton.closest('.card');
    trashElement.remove();
  });

  const cardContainer = document.querySelector('.elements');
  cardContainer.prepend(cardElement);
}





const initialCards = [
  {name: 'Архыз', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'},
  {name: 'Челябинская область', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'},
  {name: 'Иваново', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'},
  {name: 'Камчатка', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'},
  {name: 'Холмогорский район', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'},
  {name: 'Байкал', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'}
];

initialCards.forEach(function (item) {
  addCard(item.name, item.link);
});





function formSubmitHandlerAddCard (evt) {
  evt.preventDefault();
  addCard(inputNameAddCard.value, inputLinkAddCard.value);
  closePopupAddCard();
}

const formElementAddCard = popupAddCard.querySelector('.popup__in-container');

formElementAddCard.addEventListener('submit', formSubmitHandlerAddCard);
