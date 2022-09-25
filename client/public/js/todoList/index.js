import Block from "../library/Block.js";
import { createTask, getList, deleteTask, updateTask } from "../api/list.js";
import AddTaskForm from "../components/AddTaskForm.js";
import TasksToComplete from "../components/TasksToComplete.js";

class TodoList extends Block {
  constructor(userId, list) {
    super();
    this.state = {
      task: "",
      tasks: list.todos,
      isEdit: false,
      editTask: "",
      editId: "",
    };
    this.userId = userId;
    this.list = list;
    this.retrieveList = this.retrieveList.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleAddTaskFormSubmit = this.handleAddTaskFormSubmit.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditToggle = this.handleEditToggle.bind(this);
    this.display = this.display.bind(this);
  }
  async retrieveList() {
    this.list = await getList("632f97dcbe8447f4190c71af");
    return this.list;
  }
  handleInput(e) {
    let { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
    return this;
  }
  async handleAddTaskFormSubmit(e) {
    e.preventDefault();
    let todo = {};
    todo.task = this.state.task;
    todo.userId = this.userId;
    await createTask(todo)
      .then(this.retrieveList())
      .then((res) =>
        this.setState({
          ...this.state,
          task: "",
          tasks: res.todos,
        })
      );
    this.display();
  }
  async handleEditTask(e) {
    e.preventDefault();
    await updateTask({ _id: this.state.editId, task: this.state.editTask })
      .then(this.retrieveList())
      .then((res) =>
        this.setState({
          ...this.state,
          tasks: res.todos,
          isEdit: false,
          editId: "",
          editTask: ""
        })
      );
    this.display();
  }
  async handleDelete(task) {
    await deleteTask(task)
      .then(this.retrieveList())
      .then((res) =>
        this.setState({
          ...this.state,
          tasks: res.todos,
        })
      );
    this.display();
  }
  handleEditToggle(todo) {
    this.setState({
      editTask: todo.task,
      editId: todo._id,
      isEdit: true,
    });
    this.display();
  }
  display() {
    const root = document.getElementById("root");
    root.innerHTML = "";
    let addTaskForm = Object.create(new AddTaskForm(this.props));
    let tasksToComplete = Object.create(
      new TasksToComplete(
        { display: this.display },
        this.userId,
        this.state.tasks
      )
    );
    let toDisplay = [
      addTaskForm.addTaskForm({
        handleInput: this.handleInput,
        handleSubmit: this.handleAddTaskFormSubmit,
        state: this.state,
      }),
      tasksToComplete.makeTaskList({
        handleInput: this.handleInput,
        handleDelete: this.handleDelete,
        handleEditToggle: this.handleEditToggle,
        handleEditTask: this.handleEditTask,
        isEdit: this.state.isEdit,
        editTask: this.state.editTask,
        editId: this.state.editId,
      }),
    ];
    toDisplay.forEach((item) => root.append(item));
  }
}

export default TodoList;
