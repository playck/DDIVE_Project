import React from "react";
import Spinner from "../Spinner/Spinner";
import "./Modal.scss";

const Modal = ({ selectedCard }) => {
  return (
    <section className="modal" onClick={(e) => e.stopPropagation()}>
      {selectedCard ? (
        <>
          <img src={selectedCard.data.avatar} alt="avatar" />
          <div className="info">
            <div className="id">
              <span>ID : </span>
              {selectedCard.data.id}
            </div>
            <div className="name">
              <span>Name : </span>
              {selectedCard.data.first_name}
              {selectedCard.data.last_name}
            </div>
            <div className="email">
              <span>Email : </span>
              {selectedCard.data.email}
            </div>
          </div>
        </>
      ) : (
        <div className="loader">
          <Spinner />
        </div>
      )}
    </section>
  );
};

export default Modal;
