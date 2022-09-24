import { makeTestUserBtn } from "./login/index.js"
import { makeTestTaskBtn } from "./todoList/index.js"
const root = document.getElementById("root")

makeTestUserBtn(root)
makeTestTaskBtn(root)