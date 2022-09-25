import Block from "../library/Block.js";

class TasksToComplete extends Block {
  constructor(props, userId) {
    super(props);
    this.state = {
      isEdit: false,
      editTask: "",
      editId: "",
      tasks: props.list || [],
    };
    this.props = props
    this.userId = userId;
    this.makeTaskList = this.makeTaskList.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditToggle = this.handleEditToggle.bind(this);
  }
  handleEditTask(e) {
    e.preventDefault();
  }
  handleDelete(id) {}
  handleEditToggle(id) {}
  makeTaskList(props) {
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");
    taskDiv.setAttribute("id", "taskDiv");
    let listProps = {
      listItems: props.list.todos,
      inputs: [
        {
          label: true,
          labelText: "Edit Task",
          id: "editTask",
          name: "editTask",
          value: this.state.editTask,
          required: true,
          handleInput: props.handleInput,
        },
      ],
      btns: [
        {
          type: "submit",
          id: "editFormBtn",
          class: "edit-form-btn",
          toggleText: false,
          text1: false,
        },
      ],
      id: "EditTaskForm",
      formClass: "edit-task-form",
      handleSubmit: this.handleEditTask,
      listBtns: [
        {
          id: "deleteBtn",
          class: "delete-btn",
          toggleText: false,
          text1: "DELETE",
          handleClick: this.handleDelete,
          value: this.userId,
        },
        {
          id: "toggleEditBtn",
          class: "toggle-edit-btn",
          toggleText: false,
          text1: "EDIT",
          handleClick: this.handleEditToggle,
        },
      ],
    };
    this.EditableList(listProps, taskDiv);
    return taskDiv;
  }
}

export default TasksToComplete;
