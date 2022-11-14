import React from "react";
import VideosItem from "../VideosItem/VideosItem";
import "./Item.scss";

function Item({ videos }) {
  return (
    <aside className="videos">
      <h3 className="videos__title">next videos</h3>
      {videos.map((video) => (
        <VideosItem key={video.id} video={video} />
      ))}
    </aside>

  );
}

export default Item;

