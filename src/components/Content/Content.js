import React, { } from "react";
import { useSelector } from "react-redux";
import "./Content.css";

function Content() {
  const data = useSelector(state => state.search.data);
  const renderData = data.map((item, index) => {
    return (
      <li key={index} className="content__item col">
        <a href={item.external_urls.spotify} target="_blank" rel="noreferrer">
          <div className="content__image">
            <img src={item.images[0].url} alt="Album Cover" />
          </div>
          <div className="content__info">
            <h3 className="content__title">{item.name}</h3>
            <p className="content__release-date">Release date: {item.release_date}</p>
            <p className="content__tracks-count">Number of tracks: {item.total_tracks}</p>
          </div>
        </a>
      </li>
    )
  })

  return (
    <div className="content">
      {data.length > 0
        ? <ul className="content__list row">
          {renderData}
        </ul>
        : <div className="content__empty">
          <h3 className="content__empty-title">Input something to search</h3>
        </div>
      }
    </div>
  );
}

export default Content;