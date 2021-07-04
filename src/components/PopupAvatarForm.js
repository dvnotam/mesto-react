import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function PopupAvatarForm (props) {
    const [ avatar, setAvatar ] = React.useState('')

    function handleSubmit(evt) {
        evt.preventDefault()

        props.onNewAvatar({
            avatar
        })
        setAvatar('')
    }

    function validCloseButton () {
        props.onClose()

        setAvatar('')
    }

    return (
        <PopupWithForm name='avatar-profile' title='Обновить Аватар' buttonSubmit='Сохранить' onSubmit={handleSubmit} isLoading={props.isLoading} isOpenPopup={props.isOpen} onClosePopup={validCloseButton}>
            <input id="avatar-photo" type="url" name="avatar" value={avatar} onChange={(evt) => {setAvatar(evt.target.value)}} className="popup__item popup__item_avatar" placeholder="Ссылка на картинку" required />
            <span id="avatar-photo-error" type="avatar-error" className="popup__error" />
        </PopupWithForm>
    )
}

export default PopupAvatarForm