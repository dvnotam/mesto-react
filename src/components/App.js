import React from 'react';
import '../index.css';
import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import PopupAvatarForm from "./PopupAvatarForm.js";
import PopupAddCardForm from "./PopupAddCardForm.js";
import PopupProfileForm from "./PopupProfileFrom.js";
import ImagePopup from './ImagePopup.js';
import PopupWithConfirm from "./PopupWithConfirm";

function App() {
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = React.useState(false)
  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = React.useState(false)
  const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [ selectedCard, setSelectedCard] = React.useState(null)

  function handleCardClick (card) {
    setSelectedCard(card)
  }

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true)
  }

  function closePopups () {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard(null)
  }

  return (
   <div className="page">
    <Header />
    <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}/>
    <Footer />
    <PopupAvatarForm isOpen={isEditAvatarPopupOpen} onClose={closePopups}/>
    <PopupProfileForm isOpen={isEditProfilePopupOpen} onClose={closePopups}/>
    <PopupAddCardForm isOpen={isAddPlacePopupOpen} onClose={closePopups}/>
    <ImagePopup card={selectedCard} onClose={closePopups}/>
    <PopupWithConfirm />
  </div>
);
}

export default App;
