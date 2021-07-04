import React from 'react';
import PopupWithForm from "./PopupWithForm.js";

function PopupWithConfirm (props) {

    function handleSubmit (evt) {
        evt.preventDefault()

        props.onHandleCardDeleteConfirm(props.cardId)
    }

    return (
        <PopupWithForm name="delete" title="Вы уверенны?" buttonSubmit="Да" isLoading={props.isLoading} onClose={props.onClose} onSubmite={handleSubmit} isOpen={props.isOpen} />
    )
}

export default PopupWithConfirm