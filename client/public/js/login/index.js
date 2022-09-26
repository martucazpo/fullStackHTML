import Block from "../library/Block.js";
import { createUser, loginUser, logoutUser } from "../api/auth.js";
import RegistrationLoginModal from "../components/RegistrationLoginModal.js";
import RegistrationForm from "../components/RegistrationForm.js";
import LoginForm from "../components/LoginForm.js";

class Login extends Block {
  constructor(elem) {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password1: "",
      password2: "",
      password: "",
      modalIsOpen: false,
      loginForm: true,
    };
    this.elem = elem;
    this.handleInput = this.handleInput.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this)
    this.toggleForm = this.toggleForm.bind(this);
    this.display = this.display.bind(this);
    this.loginBtn = document.getElementById("login_register_btn")
    this.loginBtn.addEventListener("click", this.openModal)
  }
  handleInput(e) {
    let { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
    return this;
  }
  handleRegister(e) {
    e.preventDefault();
  }
  handleLogin(e) {
    e.preventDefault();
  }
  closeModal() {
    this.setState({
        ...this.state,
        modalIsOpen: false
    });
    this.display();
    return this;
  }
  openModal(){
    this.setState({
        ...this.state,
        modalIsOpen: true
    })
    this.display()
    return this
  }
  toggleForm() {
    this.setState((prevState) => {
      return {
        ...this.state,
        loginForm: !prevState.loginForm,
      };
    });
    this.display();
    return this;
  }
  display() {
    this.elem.innerHTML = "";
    let newModal = Object.create(new RegistrationLoginModal());
    let newRegistrationForm = Object.create(new RegistrationForm());
    let newLoginForm = Object.create(new LoginForm());
    let modalProps = {
        modalClass: this.state.modalIsOpen ? "reg-log-modal" : "hidden",
      handleModalToggleClick: this.closeModal,
      handleFormToggleClick: this.toggleForm,
      text1: this.state.loginForm ? "REGISTER" : "LOGIN",
    };
    let logProps = {
        logClassList: this.state.loginForm ? "log-form-div" : "hidden",
      handleInput: this.handleInput,
      emailValue: this.state.email,
      passwordValue: this.state.password,
      handleLoginSubmit: this.handleLogin,
    };
    let regProps = {
        regClassList: this.state.loginForm ? "hidden" : "reg-form-div",
      handleInput: this.handleInput,
      firstNameValue: this.state.firstName,
      lastNameValue: this.state.lastName,
      emailValue: this.state.email,
      password1Value: this.state.password1,
      password2Value: this.state.password2,
      handleRegSubmit: this.handleRegister,
    };
    this.elem.append(
      newModal.registrationLoginModal(modalProps, [
        newRegistrationForm.registrationForm(regProps),
        newLoginForm.loginForm(logProps),
      ])
    );
  }
}

export default Login;
// export const makeTestUserBtn = (elem) => {
//   let makeTestBtn = document.createElement("button");
//   makeTestBtn.addEventListener("click", setUserToState);
//   makeTestBtn.innerText = "CREATE TEST USER";
//   elem.append(makeTestBtn);
// };
