import Block from "../library/Block.js";

class RegistrationForm extends Block {
  constructor() {
    super();
    this.registrationForm = this.registrationForm.bind(this);
  }
  registrationForm(props) {
    let regDiv = document.createElement("div");
    regDiv.classList.add(props.regClassList);
    let regProps = {
      inputs: [
        {
          label: true,
          labelText: "First Name",
          id: "firstName",
          name: "firstName",
          class: "reg-input",
          value: props.firstNameValue,
          handleInput: props.handleInput,
          required: true,
        },
        {
          label: true,
          labelText: "Last Name",
          id: "lastName",
          name: "lastName",
          class: "reg-input",
          value: props.lastNameValue,
          handleInput: props.handleInput,
          required: true,
        },
        {
          label: true,
          labelText: "Email",
          id: "regEmail",
          name: "email",
          class: "reg-input",
          value: props.emailValue,
          handleInput: props.handleInput,
          required: true,
        },
        {
          label: true,
          labelText: "Please enter a password",
          id: "password1",
          name: "password1",
          class: "reg-input",
          value: props.password1Value,
          handleInput: props.handleInput,
          required: true,
        },
        {
          label: true,
          labelText: "Please re-enter the password",
          id: "password2",
          name: "password2",
          class: "reg-input",
          value: props.password2Value,
          handleInput: props.handleInput,
          required: true,
        },
      ],
      btns: [
        {
          type: "submit",
          id: "regSubBtn",
          class: "reg-sub-btn",
          toggleText: false,
          text1: "REGISTER",
        },
      ],
      formId: "regForm",
      class: "reg-form",
      handleSubmit: props.handleRegSubmit,
    };
    this.Form(regProps, regDiv);
    return regDiv;
  }
}

export default RegistrationForm;
