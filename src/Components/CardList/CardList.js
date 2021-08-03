import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
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
    <section className="cardList">
      {cardList &&
        cardList.data.map((card) => (
          <div key={card.id} className="card">
            <div className="cardImg">
              <img src={card.avatar} alt="avatar" />
            </div>
            <div className="avatarInfo">
              <div className="avatarName">
                {card.first_name}
                {card.last_name}
              </div>
              <div className="avatarEmail">{card.email}</div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default CardList;
