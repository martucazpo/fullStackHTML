import Block from "../library/Block.js";

class LoginForm extends Block {
  constructor() {
    super();
    this.loginForm = this.loginForm.bind(this);
  }
  loginForm(props) {
    let loginFormDiv = document.createElement("div");
    loginFormDiv.setAttribute("id", "loginFormDiv");
    loginFormDiv.classList.add(props.logClassList)
    let loginProps = {
      inputs: [
        {
          label: true,
          labelText: "Email",
          id: "loginEmail",
          class: "reg-input",
          value: props.emailValue,
          required: true,
          handleInput: props.handleInput,
        },
        {
          label: true,
          labelText: "Password",
          id: "Password",
          class: "reg-input",
          value: props.passwordValue,
          required: true,
          handleInput: props.handleInput,
        },
      ],
      btns: [
        {
          type: "submit",
          id: "loginBtn",
          class: "login-btn",
          toggleText: false,
          text1: "LOGIN",
        },
      ],
      formId: "LoginForm",
      class: "login-form",
      handleSubmit: props.handleLoginSubmit,
    };
    this.Form(loginProps, loginFormDiv);
    return loginFormDiv;
  }
}

export default LoginForm;
