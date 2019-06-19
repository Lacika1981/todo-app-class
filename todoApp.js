export default class todoApp {
    constructor(position, textField, updateBtn, finishBtn, deleteBtn) {
        this.position = position;
        this.textField = textField;
        this.updateBtn = updateBtn;
        this.finishBtn = finishBtn;
        this.deleteBtn = deleteBtn;

        this.state = {
            numberOfElems: 0,
        }
    }


    addToDOM(elems) {
        const content = document.querySelector('.content');
        const container = document.createElement('div');
        container.setAttribute('class', 'container');

        elems.map( elem => {
            container.appendChild(elem);
        });
        content.appendChild(container);
    }

    createFields(value) {
        this.state.numberOfElems++;

        const position = document.createElement(this.position);
        position.textContent = this.state.numberOfElems;

        const textField = document.createElement(this.textField);
        textField.textContent = value;

        const updateBtn = document.createElement(this.updateBtn);
        updateBtn.setAttribute('class', 'updateBtn');

        const finishBtn = document.createElement(this.finishBtn);
        finishBtn.setAttribute('class', 'finishBtn');

        const deleteBtn = document.createElement(this.deleteBtn);
        deleteBtn.setAttribute('class', 'deleteBtn');

        this.addToDOM([position, textField, updateBtn, finishBtn, deleteBtn]);
    }


}