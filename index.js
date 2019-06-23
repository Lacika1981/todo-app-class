import todoApp from '/todoApp.js';

const addBtn = document.querySelector('.add_content');

const app = new todoApp('p', 'p', 'button', 'button', 'button');

const inputField = document.querySelector('input');

inputField.addEventListener('keyup', function() {
    app.updateStateText(this.value);
});

addBtn.addEventListener('click', (e) => {
    app.createFields();
    app.clearStateText();
    app.clearInputField(inputField);
});