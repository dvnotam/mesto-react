import React from 'react';
import PopupWithForm from "./PopupWithForm.js";

function PopupWithConfirm () {

    return (
        <PopupWithForm name="delete" title="Вы уверенны?" buttonSubmit="Да"></PopupWithForm>
    )
}

export default PopupWithConfirm