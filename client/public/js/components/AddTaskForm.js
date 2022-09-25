import Block from "../library/Block.js";

class AddTaskForm extends Block {
  constructor(props) {
    super(props);
    this.addTaskForm = this.addTaskForm.bind(this);
  }
  addTaskForm(props) {
    let addTaskFormProps = {
      inputs: [
        {
          label: true,
          labelText: "Enter Task",
          name: "task",
          id: "taskInput",
          value: props.state.task,
          required: true,
          handleInput: props.handleInput,
        },
      ],
      btns: [
        {
          type: "submit",
          class: "add-task-btn",
          toggleText: false,
          text1: "ADD",
        },
      ],
      formId: "AddTaskForm",
      formClass: "add-task-form",
      handleSubmit: props.handleSubmit,
    };
    let addTaskFormDiv = document.createElement("div");
    addTaskFormDiv.setAttribute("id", "addTaskFormDiv");
    addTaskFormDiv.classList.add("add-task-form-div");
    this.Form(this.consolidateProps(addTaskFormProps), addTaskFormDiv);
    return addTaskFormDiv;
  }
}

export default AddTaskForm;
