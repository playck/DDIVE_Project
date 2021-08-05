import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.scss";

const SearchBar = ({ onInputValueChange }) => {
  return (
    <div className="searchBar">
      <input onChange={onInputValueChange} />
      <FontAwesomeIcon icon={faSearch} className="search" />
    </div>
  );
};

export default SearchBar;
