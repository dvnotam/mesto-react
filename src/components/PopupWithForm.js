import React from "react";

function PopupWithForm (props) {

    return (
        <div className={`popup popup_${props.name} ${props.isOpenPopup ? 'popup_open' : ''}`}>
            <div className="popup__content">
                <button className="popup__close-button popup__close-button_avatar" onClick={props.onClosePopup}></button>
                <h2 className="popup__title">{props.title}</h2>
                <form className={`popup__form popup__form_${props.name}`}>
                    {props.children}
                    <input type="submit" className="popup__button popup__button_disabled" disabled={true}
                           value={`${props.buttonSubmit}`} />
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm