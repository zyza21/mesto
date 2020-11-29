let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__in-container');
let editButton = document.querySelector('.profile__edit-button');
let name = document.querySelector('.profile__name');
let infoAbout = document.querySelector('.profile__info-about');
let inputName = formElement.querySelector('.popup__input-name');
let inputInfoAbout = formElement.querySelector('.popup__input-about');
let submitButton = formElement.querySelector('.popup__submit-button');
let closeButton = document.querySelector('.popup__close-button');

function openPopup() {
  inputName.value = name.textContent;
  inputInfoAbout.value = infoAbout.textContent;
  popup.classList.add('popup_active'); 
}

function closePopup() {
  popup.classList.remove('popup_active');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  name.textContent = inputName.value; 
  infoAbout.textContent = inputInfoAbout.value;
  closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler); 


