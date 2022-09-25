import Block from "../library/Block.js";

class TasksToComplete extends Block {
  constructor(props, userId, list) {
    super(props);
    this.props = props;
    this.userId = userId;
    this.list = list;
    this.makeTaskList = this.makeTaskList.bind(this);
  }
  makeTaskList(props) {
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");
    taskDiv.setAttribute("id", "taskDiv");
    let listProps = {
      listItems: this.list,
      inputs: [
        {
          label: true,
          labelText: "Edit Task",
          id: "editTask",
          name: "editTask",
          value: props.editTask,
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
          text1: "CHANGE",
        },
      ],
      id: "EditTaskForm",
      formClass: "edit-task-form",
      handleSubmit: props.handleEditTask,
      listBtns: [
        {
          id: "deleteBtn",
          class: "delete-btn",
          toggleText: false,
          text1: "DELETE",
          handleClick: props.handleDelete,
          value: this.userId,
        },
        {
          id: "toggleEditBtn",
          class: "toggle-edit-btn",
          toggleText: false,
          text1: "EDIT",
          handleClick: props.handleEditToggle,
        },
      ],
      isEdit: props.isEdit,
      editTask: props.editTask,
      editId: props.editId,
    };
    this.EditableList(listProps, taskDiv);
    return taskDiv;
  }
}

export default TasksToComplete;
