import React from "react";
import "./VideosItem.scss";
import { Link } from "react-router-dom";

function VideosItem({ video }) {

  return (
    // Using react-router-dom we can use the Link Element, this is going to direct to /plantId

    <Link to={"/" + video.id} style={{textDecoration:"none"}} >

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