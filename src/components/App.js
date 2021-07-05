import React from 'react';
import '../index.css';
import api from '../utils/api.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from './Footer.js';
import EditAvatarPopup from "./EditAvatarPopup.js";
import PopupProfileForm from "./EditProfilePopup.js";
import ImagePopup from './ImagePopup.js';
import AddPlacePopup from "./AddPlacePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({})
  const [cards, setCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);


  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getCards()
    ])
        .then(([userData, cardsData]) => {
          setCurrentUser(userData)
          setCards(cardsData)
        })
        .catch((err) => console.log(err))
  }, []);


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
    console.log(isAddPlacePopupOpen)
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(data){
    setIsLoading(true)
    api.setUserInfo(data)
        .then(userData => {
          setCurrentUser(userData)
          closePopups()
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
  }

  function handleAddPlaceSubmit(data){
    setIsLoading(true)
    api.addCard(data)
        .then(addCard => {
          setCards([addCard, ...cards])
          closePopups()
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
  }

  function handleUpdateAvatar(data){
    setIsLoading(true)
    api.updateAvatar(data)
        .then(avatar => {
          setCurrentUser(avatar)
          closePopups()
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
  }

  function handleCardDelete(id) {
    api.deleteCard( id)
        .then(() => {
          setCards(cards.filter(c => c._id !== id))
        })
        .catch((err) => console.log(err))

  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((addCard) => {
      setCards((cards) => cards.map((c) => c._id === card._id ? addCard : c));
    })
        .catch((err) => console.log(err))
  }

  function closePopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
   <CurrentUserContext.Provider value={currentUser}>
     <div className="page">
       <Header />
       <Main onEditAvatar={handleEditAvatarClick}
             onEditProfile={handleEditProfileClick}
             onAddPlace={handleAddPlaceClick}
             onCardClick={handleCardClick}
             onCardLike={handleCardLike}
             onCardDelete={handleCardDelete}
             cards={cards}
       />
       <Footer />
       <EditAvatarPopup isOpen={isEditAvatarPopupOpen}
                        onClose={closePopups}
                        onNewAvatar={handleUpdateAvatar}

       />
       <PopupProfileForm isOpen={isEditProfilePopupOpen}
                         onClose={closePopups}
                         isLoading={isLoading}
                         onNewUser={handleUpdateUser}
       />
       <AddPlacePopup isOpen={isAddPlacePopupOpen}
                      onClose={closePopups}
                      isLoading={isLoading}
                      onAddCard={handleAddPlaceSubmit}
       />
       <ImagePopup card={selectedCard}
                   onClose={closePopups}
       />
     </div>
   </CurrentUserContext.Provider>
);
}

export default App;
