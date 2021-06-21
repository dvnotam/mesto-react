import React from 'react';

function  Card (props) {
    function handleCardClick () {
        props.onCardClick(props.card)
    }

    return (
        <div className="div div_card">
            <div className="element">
                <button className="element__trash" />
                <img className="element__photo" alt={props.card.name} src={props.card.link} onClick={handleCardClick} />
                    <div className="element__content">
                        <h2 className="element__title">{props.card.name}</h2>
                        <div className="element__group">
                            <button className="element__like" />
                            <h3 className="element__like-counter">{props.card.likes.length}</h3>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Card