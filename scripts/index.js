const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupImg = document.querySelector('.popup_type_img');
const openButtonEditProfile = document.querySelector('.profile__edit-button');
const openButtonAddCard = document.querySelector('.profile__add-button');
const inputProfileName = popupEditProfile.querySelector('.popup__text_type_name');
const inputProfileInfoAbout = popupEditProfile.querySelector('.popup__text_type_about');
const inputCardName = popupAddCard.querySelector('.popup__text_type_card-name');
const inputCardLink = popupAddCard.querySelector('.popup__text_type_link');
const profileName = document.querySelector('.profile__name');
const profileInfoAbout = document.querySelector('.profile__info-about');
const formElementEditProfile = popupEditProfile.querySelector('.popup__in-container');
const cardTemplate = document.querySelector('#card-template');
const formElementAddCard = popupAddCard.querySelector('.popup__in-container');
const cardContainer = document.querySelector('.elements');
const popupImgImg = popupImg.querySelector('.popup__img');
const popupImgCaption = popupImg.querySelector('.popup__caption');
const submitButtonAddCard = popupAddCard.querySelector('.popup__submit-button');


//Функции открытия и закрытия popoup
function openPopup(popup) {
  popup.classList.add('popup_active');
  popup.addEventListener('click', closingViaClick);
  document.addEventListener('keydown', closingViaKeydown);
}

function closePopup(popup) {
  popup.classList.remove('popup_active');
  popup.removeEventListener('click', closingViaClick);
  document.removeEventListener('keydown', closingViaKeydown);
}

function closingViaClick(evt) {
  if (evt.target.classList.contains('popup__close-button') || evt.target.classList.contains('popup_active')) {
    const targetElement = evt.target;
    const targetPopup = targetElement.closest('.popup_active');
    closePopup(targetPopup);
  }
}

function closingViaKeydown(evt) {
  if (evt.key === 'Escape') {
    const targetPopup = document.querySelector('.popup_active');
    closePopup(targetPopup);
  }
}

//Функция редактирования профайла
function editProfile(evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileInfoAbout.textContent = inputProfileInfoAbout.value;
  closePopup(popupEditProfile);
}

//Функции для создания карточки и ее элементов
function creatCard(cardNameValue, cardLinkValue) {
  const cardElement = cardTemplate.content.cloneNode(true);
  const cardName = cardElement.querySelector('.card__title');
  const cardImg = cardElement.querySelector('.card__img');
  const removeButton = cardElement.querySelector('.card__trash');
  const likeButton = cardElement.querySelector('.card__like');
  cardName.textContent = cardNameValue;
  cardImg.src = cardLinkValue;
  cardImg.alt = cardNameValue;
  cardImg.addEventListener('click', openButtonImg);
  likeButton.addEventListener('click', addLike);
  removeButton.addEventListener('click', removeCard);
  return cardElement;
}

function openButtonImg(evt) {
  const targetElement = evt.target;
  popupImgImg.src = targetElement.src;
  popupImgImg.alt = targetElement.alt;
  popupImgCaption.textContent = targetElement.alt;
  openPopup(popupImg);
}

function addLike(evt) {
  evt.target.classList.toggle('card__like_active');
}

function removeCard(evt) {
  evt.target.closest('.card').remove();
}

function addCard(evt) {
  evt.preventDefault();
  cardContainer.prepend(creatCard(inputCardName.value, inputCardLink.value));
  closePopup(popupAddCard);
  submitButtonAddCard.classList.remove('popup__submit-button_active');
  submitButtonAddCard.disabled = true;
}

//Применение функции открытия popup
openButtonEditProfile.addEventListener('click', function () {
  inputProfileName.value = profileName.textContent;
  inputProfileInfoAbout.value = profileInfoAbout.textContent;
  openPopup(popupEditProfile);
});

openButtonAddCard.addEventListener('click', function () {
  formElementAddCard.reset();
  openPopup(popupAddCard);
});

//Применение функций добавления сарточек и редактирования профайла
formElementEditProfile.addEventListener('submit', editProfile);
formElementAddCard.addEventListener('submit', addCard);

//Добавление изначальных карточек
initialCards.forEach(function (item) {
  cardContainer.prepend(creatCard(item.name, item.link));
});
