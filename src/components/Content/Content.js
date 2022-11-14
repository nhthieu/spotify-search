import React, { } from "react";
import { useSelector } from "react-redux";

function Content() {
  const data = useSelector(state => state.search.data);
  console.log(data);
  const renderData = data.map((item, index) => {
    return (
      <li key={index}>

      </li>
    )
  })

  return (
    <div className="content">
      <ul className="content__list">
        <li className="content__item">
          <div className="content__image">
            <img src="https://cdn.myanimelist.net/images/anime/1448/127956.jpg" alt="" />
          </div>
          <div className="content__info">
            <h3 className="content__title">Lol</h3>
            <p className="content__artist">Justin</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Content;