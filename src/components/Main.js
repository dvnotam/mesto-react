import React from "react";
import api from '../utils/Api.js';
import Card from './Card.js';

function Main (props) {
    const [ userName, setUserName ] = React.useState('')
    const [ userDescription, setUserDescription ] = React.useState('')
    const [ userAvatar, setUserAvatar ] = React.useState('')
    const [ cards, setCards ] = React.useState([])

    React.useEffect(() => {

        Promise.all([
            api.getUserInfo(),
            api.getCards()
        ])
            .then(([userData, cards]) => {
                setUserName(userData.name)
                setUserDescription(userData.about)
                setUserAvatar(userData.avatar)
                setCards(cards)
            })
            .catch((err) => console.log(`Ошибка! ${err}`))
    }, [])

    return (
        <main>
            <section className="profile">
                <div className="profile__content">
                    <div className="profile__avatar">
                        <img src={userAvatar} alt={userName} className="profile__avatar-image" />
                        <div className="profile__avatar-edit" onClick={props.onEditAvatar}></div>
                    </div>
                    <div className="profile__info">
                        <h2 className="profile__title">{userName}</h2>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                    <button className="profile__edit-button" onClick={props.onEditProfile}></button>
                </div>
                <button className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                {cards.map((card) => (
                    <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
                ))}
            </section>
        </main>
    )
}

export default Main;