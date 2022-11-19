import "./HomePage.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import React, { useEffect } from "react";
import Item from "../../../components/Item/Item";
import VideoDetails from "../../../components/VideoDetails/VideoDetails";



function HomePage(selectedVideo) {

  const [videos, setVideos] = useState([]);

  const defaultVideoId = videos.length > 0 ? videos[0].id : null;

  const URL = "http://localhost:6060";
  // const API = "?api_key=18488576-2451-45b9-a5fd-965ff3e2a3ac";

  const { videoId } = useParams();

  const videoToDisplay = videoId || defaultVideoId;

  useEffect(() => {
    axios.get(URL + "/videos").then((response) => {
      setVideos(response.data);
      console.log(response.data)
    });
  }, []);

  const filteredVideos = videos.filter((video) => video.id !== videoToDisplay);

  return (
    <>
        <VideoDetails videoId={videoToDisplay} />
        <Item videos={filteredVideos} />
    </>
  );
}


export default HomePage;







