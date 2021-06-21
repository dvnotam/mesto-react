import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function PopupAddCardForm (props) {

    return (
        <PopupWithForm name='photo-form' title='Новое место' buttonSubmit='Сохранить' isOpenPopup={props.isOpen} onClosePopup={props.onClose}>
            <input id="photo-name" type="text" name="name" className="popup__item popup__item_photo-name"
                   placeholder="Название" required minLength="2" maxLength="30" />
            <span id="photo-name-error" className="popup__error"></span>
            <input id="photo" type="url" name="link" className="popup__item popup__item_photo"
                   placeholder="Ссылка на картинку" required />
            <span id="photo-error" className="popup__error"></span>
        </PopupWithForm>
    )
}

export default PopupAddCardForm