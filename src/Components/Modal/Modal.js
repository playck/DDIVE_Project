import React from "react";
import "./Modal.scss";

const Modal = ({ selectedCard }) => {
  console.log(selectedCard);

  return (
    <section className="modal">
      {selectedCard && (
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
      )}
    </section>
  );
};

export default Modal;
