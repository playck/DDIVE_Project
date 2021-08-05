import React, { useCallback } from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Card from "../Card/Card";
import Error from "../Error/Error";
import Spinner from "../Spinner/Spinner";
import "./CardList.scss";

const CardList = ({ onOpenModal, userInput }) => {
  const [cardDataAPI, setCardDataAPI] = useState(null);
  const [perPage, setPerpage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const loader = useRef();

  const getCardtData = async (perPage) => {
    try {
      setIsLoading(true);
      await axios
        .get(`https://reqres.in/api/users?per_page=${perPage}&page=1`)
        .then(function (res) {
          setCardDataAPI(res.data);
          setIsLoading(false);
          setError(false);
        });
    } catch (error) {
      setError(true);
    }
  };

  const cardList = cardDataAPI?.data.filter((avatar) => {
    let name = avatar.first_name + avatar.last_name;
    const filteredCard = name.toLowerCase().includes(userInput.toLowerCase());
    return filteredCard;
  });

  useEffect(() => {
    perPage !== 0 && getCardtData(perPage);
  }, [perPage, error]);

  const onIntersect = useCallback(
    (entries) => {
      if (userInput) return;
      const target = entries[0];
      if (target.isIntersecting) setPerpage((perPage) => perPage + 12);
    },
    [userInput]
  );

  useEffect(() => {
    if (!loader.current) return;

    const io = new IntersectionObserver(onIntersect, { threshold: 1 });
    io.observe(loader.current);

    return () => io && io.disconnect();
  }, [loader, userInput, onIntersect]);

  return (
    <>
      {error ? (
        <>
          <div className="errorCotainer">
            <Error />
          </div>
        </>
      ) : (
        <>
          <ul className="cardList">
            {cardList &&
              cardList.map((card) => (
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
      )}
    </>
  );
};

export default CardList;
