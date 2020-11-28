let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let name = document.querySelector('.profile__name');
let infoAbout = document.querySelector('.profile__info-about');
let inputName = document.querySelector('.popup__input-name');
let inputInfoAbout = document.querySelector('.popup__input-about');
let submitButton = document.querySelector('.popup__submit-button');
let closeButton = document.querySelector('.popup__close-button');

function openPopup() {
  popup.classList.add('popup_active');
  inputName.value = name.textContent;
  inputInfoAbout.value = infoAbout.textContent;
}

function closePopup() {
  popup.classList.remove('popup_active');
}


function editProfile() {
  name.textContent = `${inputName.value}`;
  infoAbout.textContent = `${inputInfoAbout.value}`;
  closePopup();
}

editButton.addEventListener('click', openPopup);
submitButton.addEventListener('click', editProfile);
closeButton.addEventListener('click', closePopup);


