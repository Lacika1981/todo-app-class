import todoApp from '/todoApp.js';

const addBtn = document.querySelector('.add_content');

const app = new todoApp('p', 'p', 'button', 'button', 'button');

addBtn.addEventListener('click', (e) => {
    const inputValue = e.target.closest('.add_text_field').querySelector('input').value;
    app.createFields(inputValue);
});