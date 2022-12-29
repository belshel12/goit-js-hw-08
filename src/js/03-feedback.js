import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};
const LOCALSTORAGE_KEY = 'feedback-form-state';
let formValue = {};

updateForm();

refs.form.addEventListener('input', throttle(onInputForm, 500));
refs.form.addEventListener('submit', onSubmitForm);

function onInputForm(evt) {
  formValue.email = refs.email.value || '';
  formValue.message = refs.message.value || '';

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formValue));
}

function onSubmitForm(evt) {
  evt.preventDefault();

  const savedValues = localStorage.getItem(LOCALSTORAGE_KEY);
  console.log(JSON.parse(savedValues));

  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function updateForm() {
  const savedValues = localStorage.getItem(LOCALSTORAGE_KEY);

  if (savedValues) {
    const parsedValues = JSON.parse(savedValues);

    refs.email.value = parsedValues.email || '';
    refs.message.value = parsedValues.message || '';
  }
}
