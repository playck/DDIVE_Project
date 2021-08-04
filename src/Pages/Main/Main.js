import React, { useState } from "react";
import axios from "axios";
import CardList from "../../Components/CardList/CardList";
import Modal from "../../Components/Modal/Modal";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./Main.scss";

const Main = () => {
  const [isModalonOff, setIsModalOnOff] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const onOffOpenModal = (id) => {
    if (isModalonOff) {
      setIsModalOnOff(false);
      setSelectedCard(null);
    } else {
      setIsModalOnOff(true);
      axios
        .get(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
          setSelectedCard(res.data);
        })
        .catch((error) => console.warn(error));
    }
  };

  return (
    <section
      className="main"
      onClick={isModalonOff ? onOffOpenModal : undefined}
    >
      <SearchBar />
      <CardList onOpenModal={onOffOpenModal} />
      {isModalonOff && <Modal selectedCard={selectedCard} />}
    </section>
  );
};

export default Main;
