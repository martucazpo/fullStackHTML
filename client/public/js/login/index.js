import Block from "../library/Block.js";
import { createUser, loginUser, logoutUser } from "../api/auth.js";
import RegistrationLoginModal from "../components/RegistrationLoginModal.js";
import RegistrationForm from "../components/RegistrationForm.js";
import LoginForm from "../components/LoginForm.js";
import TodoList from "../todoList/index.js";

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
      user: {
        _id: "",
        firstName: "",
        lastName: "",
        email: "",
        isLoggedIn: false,
        todos: [],
      },
      message: "",
    };
    this.elem = elem;
    this.handleInput = this.handleInput.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.display = this.display.bind(this);
    this.loginBtn = document.getElementById("login_register_btn");
    this.root = document.getElementById("root");
    this.loginSection = document.getElementById("loginSection");
    this.listSection = document.getElementById("listSection");
  }
  handleInput(e) {
    let { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
    return this;
  }
  async handleRegister(e) {
    e.preventDefault();
    await createUser(this.state).then((res) => {
      if (res.message) {
        this.setState({
          ...this.state,
          message: res.message,
        });
        this.display();
        return this;
      } else {
        this.setState({
          ...this.state,
          user: {
            _id: res._id,
            firstName: res.firstName,
            lastName: res.lastName,
            email: res.email,
            isLoggedIn: res.isLoggedIn,
            todos: res.todos,
          },
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          password1: "",
          password2: "",
          loginForm: true,
          modalIsOpen: false,
        });
      }
    });
    this.display();
    return this;
  }
  async handleLogin(e) {
    e.preventDefault();
    let user = {};
    user.email = this.state.email;
    user.password = this.state.password;
    await loginUser(user).then((res) => {
      if (res.message) {
        this.setState({
          ...this.state,
          message: res.message,
        });
        this.display();
        return this;
      } else {
        this.setState({
          ...this.state,
          user: {
            _id: res._id,
            firstName: res.firstName,
            lastName: res.lastName,
            email: res.email,
            isLoggedIn: res.isLoggedIn,
            todos: res.todos,
          },
          email: "",
          message: "",
          password: "",
          loginForm: true,
          modalIsOpen: false,
        });
      }
    });
    this.display();
    return this;
  }
  async handleLogout() {
    await logoutUser(this.state.user).then((res) => {
      this.setState({
        ...this.state,
        user: {
          _id: "",
          firstName: "",
          lastName: "",
          email: "",
          isLoggedIn: false,
          todos: [],
        },
      });
      console.log(res);
      return this;
    });
    this.display();
    return this;
  }
  closeModal() {
    this.setState({
      ...this.state,
      modalIsOpen: false,
    });
    this.display();
    return this;
  }
  openModal() {
    this.setState({
      ...this.state,
      modalIsOpen: true,
    });
    this.display();
    return this;
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
    if (this.state.user.isLoggedIn) {
      this.loginBtn.innerText = "";
      this.loginBtn.innerText = "LOGOUT";
      this.loginBtn.addEventListener("click", this.handleLogout);
      this.loginBtn.removeEventListener("click", this.openModal);
    } else {
      this.loginBtn.innerText = "";
      this.loginBtn.innerText = "LOGIN";
      this.loginBtn.removeEventListener("click", this.handleLogout);
      this.loginBtn.addEventListener("click", this.openModal);
    }
    if (this.state.user.isLoggedIn) {
      this.loginSection.classList.add("hidden");
      this.listSection.classList.remove("hidden");
      let newTodoList = Object.create(
        new TodoList(this.state.user._id, this.state.user.todos)
      );
      newTodoList.display();
    } else {
      this.loginSection.classList.remove("hidden");
      this.listSection.classList.add("hidden");
    }
    this.elem.innerHTML = "";
    let newModal = Object.create(new RegistrationLoginModal());
    let newRegistrationForm = Object.create(new RegistrationForm());
    let newLoginForm = Object.create(new LoginForm());
    let messageDiv = document.createElement("div");
    messageDiv.setAttribute("class", "modal-message-div");
    let modalMessage = document.createElement("h6");
    modalMessage.innerText = this.state.message;
    messageDiv.append(modalMessage);
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
        messageDiv,
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
