import React from "react";
import ReactDOM from "react-dom";
import '../css/StackModal.css'

function Modal({ show, closeModal, stack }) {
    const modal = (
        <>
            <div className={show ? "overlay" : "hide"} onClick={closeModal} />
            <div className={show ? "modalcustom" : "hide"}>
                <p className={"text"}>{stack}</p>
            </div>
        </>);
    return ReactDOM.createPortal(
        modal, document.getElementById("modal-root")
    );
}

export default Modal;