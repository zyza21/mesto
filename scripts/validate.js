/*
const formElement = document.querySelector('.popup__in-container');
const formInput = formElement.querySelector('.popup__text');
const buttonElement = formElement.querySelector('.popup__submit-button');
*/
// Функция, которая добавляет параметры ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__text_type_error');
  errorElement.classList.add('popup__text-error_active');
  errorElement.textContent = errorMessage;
};

// Функция, которая удаляет параметры ошибки
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__text_type_error');
  errorElement.classList.remove('popup__text-error_active');
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// Функция проверяет все поля, чтобы настроить статус кнопки
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.remove('popup__submit-button_active');
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.add('popup__submit-button_active');
    buttonElement.disabled = false;

  }
};

//Функция, которая примет параметры элемента формы и добавит её полям нужные обработчики
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__text'));
  const buttonElement = formElement.querySelector('.popup__submit-button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

//Функция, которая найдёт и переберёт все формы на странице
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__in-container'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
}

enableValidation();
/*
enableValidation({
  formSelector: '.popup__in-container',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_active',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__text-error_active'
}); 
*/