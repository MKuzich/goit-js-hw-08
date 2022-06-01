import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textArea = form.querySelector('textarea');
const LOCALSTORAGE_FORM = "feedback-form-state";
const savedLocalObj = localStorage.getItem(LOCALSTORAGE_FORM);
const savedObj = JSON.parse(savedLocalObj);
const obj = savedLocalObj ? savedObj : {};

onFormReload();

form.addEventListener('input', throttle(onInputHandler, 500));
form.addEventListener('submit', onFormSubmit);

function onInputHandler(e) {
    obj[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_FORM, JSON.stringify(obj));
}

function onFormReload() {
    if (savedLocalObj) {
        input.value = savedObj.email ?? "";
        textArea.value = savedObj.message ?? "";
    }
}

function onFormSubmit(e) {
    e.preventDefault();
    obj.email = input.value;
    obj.message = textArea.value;
    console.log(obj);
    e.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_FORM);
}
