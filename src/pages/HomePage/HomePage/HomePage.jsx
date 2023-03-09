import "./HomePage.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import React, { useEffect } from "react";
import Item from "../../../components/Item/Item";
import VideoInfo from "../../../components/VideoInfo/VideoInfo";
import Video from "../../../components/Video/Video";


function HomePage() {

  const [videos, setVideos] = useState([]);

  const defaultVideoId = videos.length > 0 ? videos[0].id : null;

  const URL = "http://localhost:8080";
  // const API = "?api_key=18488576-2451-45b9-a5fd-965ff3e2a3ac";

  const { videoId } = useParams();

  const videoToDisplay = videoId || defaultVideoId;

  useEffect(() => {
    axios.get(URL + "/videos").then((response) => {
      setVideos(response.data);
    });
  }, []);

  const filteredVideos = videos.filter((video) => video.id !== videoToDisplay);

  const [selectedVideo, setSelectedVideo] = useState([]);
  const [selectedComments, setSelectedComments] = useState([]);
  // const [catchs, setcatches] = useState('')

  // const handleSubmit = (postComment) => {
  //   setcatches(postComment);
  // };
  // console.log(catchs)

  const URLID = "http://localhost:8080";
  // const API = "?api_key=18488576-2451-45b9-a5fd-965ff3e2a3ac";

  useEffect(() => {
      if (!videoToDisplay) return;

      axios
          
          .get(URLID + "/videos/" + videoToDisplay)
          .then((response) => {
              setSelectedVideo(response.data);
              const commentsRequestUrl = `${URLID}/${videoToDisplay}/comments`
              axios
              .get(URLID + "/videos/" + videoToDisplay + "/comments")
              .then((innerResponse) => {
                setSelectedComments(innerResponse.data)
                console.log(innerResponse.data)
              })
              .catch((err) => {
                console.log(err)
              })
          })
          .catch((error) => {
              console.log(error);
          });
  }, [videoToDisplay]);

  if (!selectedVideo) {
      return <div>Loading......</div>;
  }

  const handleSubmit = (e, postComment) => {
    e.preventDefault()
    axios
    .post ('http://localhost:8080/comments/upload', {
        "comment": postComment,
        "videos_id": selectedVideo.id
    })
    .then ((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.log(error)
    })
}
  
  return (
    <>
        <Video selectedVideo={selectedVideo} />
        <div className="video__info">
        <VideoInfo selectedVideo={selectedVideo} selectedComments={selectedComments} handleSubmit={handleSubmit}  />
        <Item videos={filteredVideos} />
        </div>
    </>
  );
}


export default HomePage;







