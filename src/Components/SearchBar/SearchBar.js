import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <input />
      <FontAwesomeIcon icon={faSearch} className="search" />
    </div>
  );
};

export default SearchBar;
