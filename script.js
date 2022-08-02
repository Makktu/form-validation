'use strict';

const emailField = document.getElementById('email');

emailField.addEventListener('blur', (event) => {
    if (!emailField.checkValidity()) {
        document.getElementById('msgArea').innerHTML =
            emailField.validationMessage;
    }
});
