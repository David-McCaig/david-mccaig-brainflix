import "./HomePage.scss";
// import { format } from 'date-fns';
import HeartIcon from "../../../assets/Icons/likes.svg";
import ViewIcon from "../../../assets/Icons/views.svg"
import AddComment from "../../../assets/Icons/add_comment.svg";
import SearchFace from "../../../assets/images/Mohan-muruge.jpg";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import React, { useEffect } from "react";
import Item from "../../../components/Item/Item";
import VideoDetails from "../../../components/VideoDetails/VideoDetails";
import Description from "../../../components/VideoDetails/Description/Description";


function HomePage(selectedVideo) {

  const [videos, setVideos] = useState([]);

  const defaultVideoId = videos.length > 0 ? videos[0].id : null;

  const URL = "https://project-2-api.herokuapp.com";
  const API = "?api_key=18488576-2451-45b9-a5fd-965ff3e2a3ac";

  const { videoId } = useParams();

  const videoToDisplay = videoId || defaultVideoId;

  useEffect(() => {
    axios.get(URL + "/videos" + API).then((response) => {
      setVideos(response.data);
    });
  }, []);

  const filteredVideos = videos.filter((video) => video.id !== videoToDisplay);

  return (
    <>
      <div className="test-one">
        <VideoDetails videoId={videoToDisplay} />
        <Item videos={filteredVideos} />
      </div>
    </>
  );
}


export default HomePage;






