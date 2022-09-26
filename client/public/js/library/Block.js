import Base from "./Base.js";

class Block extends Base {
  constructor(props) {
    super(props);
  }
}
Block.prototype.Input = function (props, form) {
  props.inputs.forEach((item) => {
    if (item.label) {
      let label = document.createElement("label");
      item.id ? (label.htmlFor = item.id) : null;
      item.labelText ? (label.innerText = item.labelText) : null;
      form.append(label);
    }
    let input = document.createElement("input");
    input.addEventListener("input", item.handleInput);
    item.name ? input.setAttribute("name", item.name) : null;
    item.id ? input.setAttribute("id", item.id) : null;
    input.class ? input.setAttribute("class", item.class) : null;
    item.value ? (input.value = item.value) : null;
    item.required ? (input.required = item.required) : null;
    input.placeholder ? (input.placeholder = item.placeholder) : null;
    if (item.label) {
      form.append(input);
      return this;
    } else {
      form.append(input);
      return this;
    }
  });
};
Block.prototype.Btn = function (props, elem, value) {
  let btns;
  if (Array.isArray(props)) {
    btns = props;
  } else {
    btns = props.btns;
  }
  btns.forEach((item) => {
    let btn = document.createElement("button");
    item.type
      ? btn.setAttribute("type", item.type)
      : btn.setAttribute("type", "button");
    item.id ? btn.setAttribute("id", item.id) : null;
    item.class ? btn.setAttribute("class", item.class) : null;
    item.handleClick
      ? btn.addEventListener("click", () => item.handleClick(value))
      : null;
    item.toggleText
      ? (btn.innerText = item.text2)
      : (btn.innerText = item.text1);
    elem.append(btn);
  });
  return this;
};
Block.prototype.Form = function (props, elem) {
  elem.innerHTML = "";
  let form = document.createElement("form");
  props.FormId ? form.setAttribute("id", props.formId) : null;
  props.formClass ? form.classList.add(props.formClass) : null;
  form.addEventListener("submit", props.handleSubmit);
  this.Input(props, form);
  this.Btn(props, form);
  elem.append(form);
  return elem
};
Block.prototype.EditableList = function (props, elem) {
  elem.innerHTML = "";
  let ul = document.createElement("ul");
  elem.append(ul);
  props.listItems.forEach((item) => {
    let li = document.createElement("li");
    if (props.isEdit && props.editId === item._id) {
      this.Form(props, li);
    } else if (props.listBtns) {
      li.innerText = item.task;
      let btns = props.listBtns;
      this.Btn(btns, li, item);
    } else {
      li.innerText = item.text;
    }
    ul.append(li);
  });
  return this;
};
Block.prototype.Modal = function (props, elems) {
  let modal = document.createElement("div");
  props.modalId ? modal.setAttribute("id", props.modalId) : null;
  props.modalClass ? modal.classList.add(props.modalClass) : null;
  props.toggleModalBtnProps ? this.Btn(props.toggleModalBtnProps, modal) : null;
  elems.forEach(elem =>modal.append(elem))
  props.toggleFormBtn ? this.Btn(props.toggleFormBtn, modal) : null
  return modal;
  //return this;
};

export default Block;
