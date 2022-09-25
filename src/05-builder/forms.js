const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');
const form3 = document.querySelector('#form3');
const form4 = document.querySelector('#form4');
const form5 = document.querySelector('#form5');

class Form {
  constructor(controls, action) {
    this.controls = controls;
    this.action = action;
  }

  getContent() {
    return `<form action="" method="post" action="${this.action}">
    ${this.controls.reduce((ac, c) => {
      return (
        ac +
        `<div>
        ${this.getLabel(c)}
        ${this.getInput(c)}
      </div>`
      );
    }, '')}
      <button type="submit">Enviar</button>
    </form>`;
  }

  getLabel(control) {
    return `
    <label for="${control.name}">${control.text}</label>
    `;
  }

  getInput(control) {
    return `<input type="${control.type}" id="${control.name}" name="${control.name}" />`;
  }
}

class FormBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.action = '';
    this.controls = [];
  }

  setAction(action) {
    this.action = action;
    return this;
  }

  setText(name, text) {
    this.controls.push({ name, text, type: 'text' });
    return this;
  }

  setEmail(name, text) {
    this.controls.push({ name, text, type: 'email' });
    return this;
  }

  build() {
    const form = new Form(this.controls, this.action);
    this.reset();
    return form;
  }
}

class FormDirector {
  constructor(formBuilder) {
    this.setBuilder(formBuilder);
  }

  /**
   * @param {FormBuilder} formBuilder
   */
  setBuilder(formBuilder) {
    this.formBuilder = formBuilder;
  }

  createPeopleForm() {
    this.formBuilder.reset();
    this.formBuilder.setText('firstname', 'Nombre').setText('lastname', 'Apellido');
  }
}

const frmBuilder = new FormBuilder();
const personForm = frmBuilder
  .setAction('add.php')
  .setText('firstname', 'Nombre')
  .setText('lastname', 'Apellido')
  .setEmail('email', 'Correo Electronico')
  .build();

form1.innerHTML = personForm.getContent();

const formDirector = new FormDirector(frmBuilder);
formDirector.createPeopleForm();
form2.innerHTML = frmBuilder.build().getContent();

console.log(form1, form2, form3, form4, form5);
