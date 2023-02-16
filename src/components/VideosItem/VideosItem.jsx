import "./VideosItem.scss"
import React from "react";
import { Link } from "react-router-dom";

function VideosItem({ video }) {

  return (

    <Link to={"/" + video.id} style={{ textDecoration: "none" }} >
      <div className="videos__container">
        <div className="videos__wrapper">
          <img className="videos__img" src={video.image} alt="above houses"></img>
        </div>
        <div className="videos__text">
          <h3 className="videos__subtitle">{video.title}</h3>
          <p className="videos__author">{video.channel}</p>
        </div>
      </div>
    </Link>

  );
}

export default VideosItem;