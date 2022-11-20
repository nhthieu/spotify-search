import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import SearchBar from "./SearchBar/SearchBar";
import "./Header.css"

function handleClick(e) {
  window.location.reload();
}

function Header() {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faHome} className="header__home" onClick={handleClick} />
      <SearchBar />
    </div>
  );
}

export default Header;