import React from "react";
import CardList from "../../Components/CardList/CardList";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <SearchBar />
      <CardList />
    </div>
  );
};

export default Main;
