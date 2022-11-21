import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'

import { setSearchValue } from "../../../redux/searchSlice";
import "./SearchBar.css";

function SearchBar() {
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();

  // API options
  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/search/",
    params: {
      q: searchKey,
      type: "albums",
      offset: "0",
      limit: "20",
    },
    headers: {
      'X-RapidAPI-Key': '0171753919msh6e3a8036535490cp1af202jsn7af717784353',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchKey === "") {
      alert("Please enter a search term");
      return;
    }

    try {
      const result = await axios.request(options);
      const data = await result.data;
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
          placeholder="e.g. The Beatles"
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