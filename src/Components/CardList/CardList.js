import axios from "axios";
import React from "react";
import { useState, useEffect, useRef } from "react";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import "./CardList.scss";

const CardList = ({ onOpenModal }) => {
  const [cardList, setCardList] = useState(null);
  const [perPage, setPerpage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const loader = useRef();

  const getCardtData = (perPage) => {
    setIsLoading(true);
    axios
      .get(`https://reqres.in/api/users?per_page=${perPage}&page=1`)
      .then(function (res) {
        setCardList(res.data);
        setIsLoading(false);
      })
      .catch((error) => console.warn(error));
  };

  useEffect(() => {
    perPage !== 0 && getCardtData(perPage);
  }, [perPage]);

  const onIntersect = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) setPerpage((perPage) => perPage + 12);
  };

  useEffect(() => {
    if (!loader.current) return;

    const io = new IntersectionObserver(onIntersect, { threshold: 1 });
    io.observe(loader.current);

    return () => io && io.disconnect();
  }, [loader]);

  return (
    <>
      <ul className="cardList">
        {cardList &&
          cardList.data.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              avatar={card.avatar}
              firstName={card.first_name}
              lastName={card.last_name}
              email={card.email}
              onClick={() => onOpenModal(card.id)}
            />
          ))}
      </ul>
      <div ref={loader} className="loader">
        {isLoading && <Spinner />}
      </div>
    </>
  );
};

export default CardList;
