import "./HomePage.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import React, { useEffect } from "react";
import Item from "../../../components/Item/Item";
import VideoDetails from "../../../components/VideoDetails/VideoDetails";



function HomePage() {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const defaultVideoId = videos.length > 0 ? videos[0].id : null;

  const URL = "http://localhost:6060";
  // const API = "?api_key=18488576-2451-45b9-a5fd-965ff3e2a3ac";

  const { videoId } = useParams();

  const videoToDisplay = videoId || defaultVideoId;

  useEffect(() => {
    axios.get(URL + "/videos").then((response) => {
      setVideos(response.data);
    });
  }, []);

  const filteredVideos = videos.filter((video) => video.id !== videoToDisplay);

  useEffect(() => {
    if (!videoId) return;

    axios
      .get(URL + "/videos/" + videoId)
      .then((response) => {
        setSelectedVideo(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  }, [videoId]);

  if (!selectedVideo) {
    return <div>Loading......</div>;
  }

  return (
    <>
      <VideoDetails selectedVideo={selectedVideo} />
      <Item videos={filteredVideos} />
    </>
  );
}


export default HomePage;







