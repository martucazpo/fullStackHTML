import Base from "./Base.js"

class Block extends Base {
    constructor(props){
        super(props)
    }
}
Block.prototype.Input = function(props, form){
    this.consolidateProps(props)
    props.inputs.forEach(item =>{
         let input = document.createElement("input")
         item.name ?
         input.setAttribute("name", item.name) : null
         item.id ?
         input.setAttribute("id", item.id) : null
         input.class ? 
         input.setAttribute("class", item.class): null
        item.value ?
        input.value = item.value : null
        item.required ?
        input.required = item.required : null
        input.placeholder ?
        input.placeholder = item.placeholder : null
        form.append(input)
    })
}
Block.prototype.Btn = function(props, elem){
    this.consolidateProps(props)
    props.btns.forEach(item => {
        let btn = document.createElement("button")
        item.type ?
        btn.setAttribute("type", item.type) : btn.setAttribute("type", "button")
        item.id ?
        btn.setAttribute("id", item.id) : null
        item.class ?
        btn.setAttribute("class", item.class) : null
        item.handleClick && item.value?
        btn.addEventListener("click", ()=>item.handleClick(item.value)) : null
        item.handleClick && !item.value ?
        btn.addEventListener("click", item.handleClick) : null
        item.toggleText ?
        btn.innerText = item.text2 : item.text1
        elem.append(btn) 
    })
    return this
}
Block.prototype.Form = function(props, elem){
    this.consolidateProps(props)
    elem.innerHTML = ""
    let form = document.createElement("form")
    props.FormId ?
    form.setAttribute("id", props.formId) : null
    props.formClass ?
    form.setAttribute("class", props.formClass) : null
    this.input(props, form)
    this.btn(props, form)
    elem.append(form)
    return this
}
Block.prototype.EditableList = function(props, elem){
    this.consolidateProps(props)
    elem.innerHTML = ""
    let ul = document.createElement("ul")
    props.listItems.forEach(item => {
        let li = document.createElement("li")
        if(this.state.isEdit){
            this.Form(props, li)
        } else if (item.btns){
            this.Btns(props, li)
        } else {
            li.innerText = item.text
        }
        ul.append(li)
    })
    elem.append(ul)
    return this
}
Block.prototype.Modal = function(props, elem){
    this.consolidateProps(props)
    elem.innerHTML = ""
    let modal = document.createElement("modal")
    props.modalId ?
    modal.setAttribute("id", props.modalId) : null 
    props.modalClass ?
    modal.classList.add(props.modalClass) : null
    props.toggleModalBtnProps ? 
    this.Btn(props.toggleModalBtnProps, modal) : null
    modal.appendChild(props.modalContent)
    elem.append(modal)
    return this
}


export default Block