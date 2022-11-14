import React from "react";
import { Link } from "react-router-dom";
import VideosItem from "../VideosItem/VideosItem";
import "./Item.scss";

function Item({ videos }) {
    // loop over the plants prop which is passed down and render a NavItem for each plant
    return (
      <aside className = "videos">
        <h3 className="videos__title">next videos</h3>
        {videos.map((video) => (
          <VideosItem key={video.id} video={video} />
        ))}
        {/* Have a link which directs back to the home directory */}
      </aside>
      
    );
  }
  
  export default Item;

