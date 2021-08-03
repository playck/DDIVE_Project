import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./CardList.scss";

const CardList = () => {
  const [cardList, setCardList] = useState(null);

  const getCardtData = () => {
    axios
      .get("https://reqres.in/api/users?per_page=12&page=1")
      .then(function (res) {
        setCardList(res.data);
      });
  };

  useEffect(() => {
    getCardtData();
  }, []);

  return (
    <ul className="cardList">
      {cardList &&
        cardList.data.map((card) => (
          <Card
            id={card.id}
            avatar={card.avatar}
            firstName={card.first_name}
            lastName={card.last_name}
            email={card.email}
          />
        ))}
    </ul>
  );
};

export default CardList;
