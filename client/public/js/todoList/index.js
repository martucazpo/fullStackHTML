import { testCreateTask } from "../api/list.js"

const addTaskToList = () =>{
    return testCreateTask()
}

export const makeTestTaskBtn = (elem) => {
    let makeTaskBtn = document.createElement("button");
    makeTaskBtn.addEventListener("click", addTaskToList);
    makeTaskBtn.innerText = "TEST TASK";
    elem.append(makeTaskBtn);
  };