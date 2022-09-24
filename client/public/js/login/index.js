import { testCreateUser } from "../api/auth.js";

const setUserToState = async () =>{
    let user =  await testCreateUser()
    state.user = Object.create(user)
    render()
    //return user
}


let state = {
  user : {},
}

const render = () =>{
  console.log("state ",state)
}

export const makeTestUserBtn = (elem) => {
  let makeTestBtn = document.createElement("button");
  makeTestBtn.addEventListener("click", setUserToState);
  makeTestBtn.innerText = "CREATE TEST USER";
  elem.append(makeTestBtn);
};
