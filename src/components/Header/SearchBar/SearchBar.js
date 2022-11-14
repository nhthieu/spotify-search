import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'
import { setSearchValue } from "../../../redux/searchSlice";
import { useDispatch } from "react-redux";
import "./SearchBar.css";

function SearchBar() {
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();
  const authToken = "BQD3GUoYuxC9rT4r8e0UUp-1JmN0vw2WlyhDfqqN6TDrWmh_MQUMxoJ6iHw0zywXKL498QcpsttJcSiqD0x7kiZ4XQSXd3MBTDUjt7s_Dj9RFZvHU02u8W2mwcbX2Cc1brVrIGxN4B9vpA3onDY-AO0QML-bLlQFe9Rc_-MswXjiM4bm-JuaaXDlN8E2IOmEZVM"

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchKey("");
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
    </div>
  );
}

export default SearchBar;