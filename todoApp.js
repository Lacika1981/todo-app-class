export default class todoApp {
    constructor(position, textField, updateBtn, finishBtn, deleteBtn) {
        this.position = position;
        this.textField = textField;
        this.updateBtn = updateBtn;
        this.finishBtn = finishBtn;
        this.deleteBtn = deleteBtn;

        this.state = {
            text: '',
            numberOfElems: 0,
        }
    }

    updateStateText(value) {
        this.state.text = value;
    }

    clearStateText() {
        this.state.text = '';
    }

    clearInputField(elem) {
        elem.value = '';
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
        position.setAttribute('class', 'listNumber');
        position.textContent = this.state.numberOfElems;

        const textField = document.createElement(this.textField);
        textField.setAttribute('class', 'textField');
        textField.textContent = this.state.text;
        
        const updateBtn = document.createElement(this.updateBtn);
        updateBtn.setAttribute('class', 'updateBtn');
        updateBtn.addEventListener('click', e => {
            this.updateField(e.target.closest('.container').querySelector('.textField'));
        });

        const finishBtn = document.createElement(this.finishBtn);
        finishBtn.setAttribute('class', 'finishBtn');
        finishBtn.addEventListener( 'click', e => {
            this.doneField(e.target.closest('.container').querySelector('.textField'));
        });

        const deleteBtn = document.createElement(this.deleteBtn);
        deleteBtn.setAttribute('class', 'deleteBtn');
        deleteBtn.addEventListener('click', e => {
            this.deleteField(e.target.closest('.container'));
        });

        this.addToDOM([position, textField, updateBtn, finishBtn, deleteBtn]);
    }

    updateNumbers() {
        console.log('called');
        var containers = document.querySelectorAll('.container');
        console.log(containers);
        [...containers].map( (container, i) => {
            console.log(container, i)
            container.querySelector('.listNumber').textContent = i + 1;
        });
    }

    updateField(elem) {
        console.log(this.updateStateText);
        if(!elem.getAttribute('contenteditable')) {
            elem.setAttribute('contenteditable', true);
            elem.addEventListener('keyup', e => {
                this.updateStateText(elem.textContent);
            })
        } else elem.setAttribute('contenteditable', false);
    }

    deleteField(elem) {
        elem.remove();
        this.state.numberOfElems--;
        this.updateNumbers();
    }

    doneField(elem) {
        elem.setAttribute('style', 'text-decoration: line-through')
    }

}