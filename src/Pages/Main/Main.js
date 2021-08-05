import React, { useState } from "react";
import axios from "axios";
import CardList from "../../Components/CardList/CardList";
import Modal from "../../Components/Modal/Modal";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./Main.scss";

const Main = () => {
  const [isModalonOff, setIsModalOnOff] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [userInput, setUserInput] = useState("");

  const onOffOpenModal = (id) => {
    if (isModalonOff) {
      setIsModalOnOff(false);
      setSelectedCard(null);
      document.body.style.overflow = "unset";
    } else {
      setIsModalOnOff(true);
      document.body.style.overflow = "hidden";
      axios
        .get(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
          setSelectedCard(res.data);
        })
        .catch((error) => console.warn(error));
    }
  };

  const onInputValueChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <section className="main">
      <SearchBar onInputValueChange={onInputValueChange} />
      <CardList onOpenModal={onOffOpenModal} userInput={userInput} />
      {isModalonOff && (
        <div className="modalOverlay" onClick={(e) => onOffOpenModal(e)}>
          {isModalonOff && <Modal selectedCard={selectedCard} />}
        </div>
      )}
    </section>
  );
};

export default Main;
