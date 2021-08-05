import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

const Card = ({ id, avatar, firstName, lastName, email, onClick }) => {
  return (
    <li key={id} className="card" onClick={onClick}>
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

Card.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.any.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
