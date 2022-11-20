import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'
import { setSearchValue } from "../../../redux/searchSlice";
import { useDispatch } from "react-redux";
import { authToken } from "../../../key/token";
import "./SearchBar.css";

function SearchBar() {
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchKey === "") {
      alert("Please enter a search term");
      return;
    }

    try {
      const result = await fetch(`https://api.spotify.com/v1/search?q=${searchKey}&type=album`, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        }
      })
      const data = await result.json();
      dispatch(setSearchValue(data.albums.items));
    } catch (err) {
      alert(err);
    }
  }

  const handleDelete = (e) => {
    e.preventDefault()
    setSearchKey("");
  }

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          className="search-bar__input"
          placeholder="Search for an album"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch(e)}
        />
        {
          searchKey &&
          <span onClick={handleDelete}>
            <FontAwesomeIcon icon={faXmark} className="search-bar__delete" />
          </span>
        }
      </div>
      <button
        className="search-bar__button"
        onClick={handleSearch}
      >
        <FontAwesomeIcon className="search-bar__icon" icon={faSearch} />
      </button>
    </div >
  );
}

export default SearchBar;