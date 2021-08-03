import React from "react";
import "./Card.scss";

const Card = ({ id, avatar, firstName, lastName, email }) => {
  return (
    <li key={id} className="card">
      <div className="cardImg">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="avatarInfo">
        <div className="avatarName">
          {firstName}
          {lastName}
        </div>
        <div className="avatarEmail">{email}</div>
      </div>
    </li>
  );
};

export default Card;
