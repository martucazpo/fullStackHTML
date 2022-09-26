import Block from "../library/Block.js"

class RegistrationLoginModal extends Block {
    constructor(){
        super()
        this.registrationLoginModal = this.registrationLoginModal.bind(this)
    }
    registrationLoginModal(props, elems){
        let modalProps = {
            modalId: "regLoginModal",
            modalClass: props.modalClass,
            toggleModalBtnProps : [
                {
                    type: "button",
                    id: "toggleModalBtn",
                    class: "toggle-modal-btn",
                    handleClick: props.handleModalToggleClick,
                    toggleText: false,
                    text1: "X"
                }
            ],
            toggleFormBtn: [{
                type: "button",
                id: "toggleFormBtn",
                class: "toggle-form-btn",
                handleClick: props.handleFormToggleClick,
                toggleText: false,
                text1: props.text1
            }]
        }
        return this.Modal(modalProps, elems)
    }
}

export default RegistrationLoginModal