import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_FORM = "feedback-form-state";
const obj = {};

console.dir(form)

form.addEventListener('input', throttle(onInputHandler, 500));
form.addEventListener('submit', onFormSubmit);

function onInputHandler(e) {

    obj[e.target.name] = e.target.value;

    // e.target.name === 'email' ? obj.email = e.target.value : obj.message = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(obj));
}

function onFormSubmit(e) {
    e.preventDefault();

const email = form.querySelector('email');
const message = form.querySelector('message');

    console.dir(event.target);
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state")
}
