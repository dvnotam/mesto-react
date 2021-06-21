import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function PopupProfileForm (props) {

    return (
        <PopupWithForm name='profile-form' title='Редактировать профиль' buttonSubmit='Сохранить' isOpenPopup={props.isOpen} onClosePopup={props.onClose}>
            <input id="name" type="text" name="name" className="popup__item popup__item_profile-name" placeholder="Имя"
                   required minLength="2" maxLength="40" />
            <span id="name-error" className="popup__error"></span>
            <input id="job" type="text" name="about" className="popup__item popup__item_profile-about"
                   placeholder="Вид деятельности" required minLength="2" maxLength="200" />
            <span id="job-error" className="popup__error"></span>
        </PopupWithForm>
    )
}

export default PopupProfileForm