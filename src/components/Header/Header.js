import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import "./Header.css"

function Header() {
  return (
    <div className="header">
      <SearchBar />
    </div>
  );
}

export default Header;