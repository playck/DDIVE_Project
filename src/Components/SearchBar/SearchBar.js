import React from "react";
import PropTypes from "prop-types";
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

SearchBar.propTypes = {
  onInputValueChange: PropTypes.func.isRequired,
};

export default SearchBar;
