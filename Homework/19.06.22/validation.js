const FORM = document.querySelector('.form');
// let formInputs = document.querySelectorAll('.js-input');

let postCode = /^[0-9]{2} - [0-9]{3}$/;
let name = /^[a-zA-Z]{2, }$/;
let surname = /^[a-zA-Z]{2, }$/;
let myPesel = /^[0-9]{11}$/
// let mail = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+.[a-zA-Z]{2,3}$/;

const INPUT_NAME = FORM.querySelector('input[name=name]');

FORM.addEventListener('onclick', e => {
    e.preventDefault();

    let formErrors = [];

    if (!name.test(INPUT_NAME.value)) {
        e.target.submit();
        formErrors.push("You have to fill in this input field!");
    }

})








