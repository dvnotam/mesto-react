import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function PopupAvatarForm (props) {

    return (
        <PopupWithForm name='avatar-profile' title='Обновить Аватар' buttonSubmit='Сохранить' isOpenPopup={props.isOpen} onClosePopup={props.onClose}>
            <input id="avatar-photo" type="url" name="avatar" className="popup__item popup__item_avatar" placeholder="Ссылка на картинку" required />
            <span id="avatar-photo-error" type="avatar-error" className="popup__error"></span>
        </PopupWithForm>
    )
}

export default PopupAvatarForm