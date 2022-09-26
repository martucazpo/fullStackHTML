//const root = document.getElementById("root")
import Login from "./login/index.js"
import TodoList from "./todoList/index.js";
//import { createUser } from "../js/api/auth.js"

// let button = document.createElement("button")
// button.addEventListener("click", testCreateUser )
// button.innerText = "MAKE NEW USER"
// root.append(button)

const auth = document.getElementById("auth")

let newLogin = Object.create(new Login(auth))

newLogin.display()


import { getList } from "../js/api/list.js";

async function retrieveList() {
  let list = await getList("632f97dcbe8447f4190c71af");
  return list;
}

let list = await retrieveList()

let newTodoList = Object.create(new TodoList("632f97dcbe8447f4190c71af", list));

//newTodoList.display();
