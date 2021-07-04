import React from 'react';
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup (props) {
    const [title, setTitle] = React.useState('')
    const [link, setLink] = React.useState('')

    function handleChangeTitle(evt) {
        setTitle(evt.target.value);
    }

    function handleChangeLink(evt) {
        setLink(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault()

        props.onAddCard({
            name: title,
            link: link
        })
        setTitle('')
        setLink('')
    }

    return (
        <PopupWithForm name="card" title="Новое место" buttonText="Добавить" onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose}>
            <input id="photo-name" type="text" name="name" className="popup__item popup__item_photo-name"
                    onChange={handleChangeTitle} value={title || ''} placeholder="Название" required minLength="2" maxLength="30" />
            <span id="photo-name-error" className="popup__error" />
            <input id="photo" type="url" name="link" className="popup__item popup__item_photo"
                   onChange={handleChangeLink} placeholder="Ссылка на картинку" required />
            <span id="photo-error" className="popup__error" />
        </PopupWithForm>
    )
}

export default AddPlacePopup