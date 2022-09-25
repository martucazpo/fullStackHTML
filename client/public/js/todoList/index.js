import Block from "../library/Block.js";
import { createTask } from "../api/list.js";
import AddTaskForm from "../components/AddTaskForm.js";
import TasksToComplete from "../components/TasksToComplete.js";

class TodoList extends Block {
  constructor(userId, list) {
    super();
    this.state = {
      task: "",
    };
    this.userId = userId;
    this.list = list
    this.handleInput = this.handleInput.bind(this);
    this.handleAddTaskFormSubmit = this.handleAddTaskFormSubmit.bind(this);
    this.display = this.display.bind(this);
  }
  handleInput(e) {
    let { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
    return this;
  }
  handleAddTaskFormSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    let todo = {};
    todo.task = this.state.task;
    (todo.userId = this.userId), createTask(todo);
    this.setState({
      ...this.state,
      task: "",
    });
    this.display();
  }
  display() {
    const root = document.getElementById("root")
    let addTaskForm = Object.create(new AddTaskForm(this.props));
    let tasksToComplete = Object.create(new TasksToComplete(this.props,this.userId));
    let toDisplay = [addTaskForm.addTaskForm({
        handleInput: this.handleInput,
        handleSubmit: this.handleAddTaskFormSubmit,
        state: this.state,
      }),
    tasksToComplete.makeTaskList({handleInput: this.handleInput, display: this.display, list:this.list})]
    toDisplay.forEach(item => root.append(item))
  }
}

export default TodoList;
