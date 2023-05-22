import "./HomePage.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import React, { useEffect } from "react";
import Item from "../../../components/Item/Item";
import VideoInfo from "../../../components/VideoInfo/VideoInfo";
import Video from "../../../components/Video/Video";

const API_URL = process.env.REACT_APP_API_URL;

function HomePage() {
  
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState([]);
  const [selectedComments, setSelectedComments] = useState([]);
  const [validation, setValidation] = useState('');


  const defaultVideoId = videos.length > 0 ? videos[0].id : null;

  const { videoId } = useParams();

  const videoToDisplay = videoId || defaultVideoId;

  const filteredVideos = videos.filter((video) => video.id !== videoToDisplay);

  function handleGetComment() {
    axios
      .get(API_URL + "/videos/" + videoToDisplay + "/comments")
      .then((response) => {
        setSelectedComments(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    axios
      .get(API_URL + "/videos")
      .then((response) => {
        setVideos(response.data);
        
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  useEffect(() => {
    axios
      .get(API_URL + "/videos/" + videoToDisplay)
      .then((response) => {
        setSelectedVideo(response.data);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        handleGetComment();
      })
      .catch((err) => {
        console.log(err)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoToDisplay])


  function handlePost(e, postComment, setPostComment) {
    e.preventDefault();
    if (postComment.length < 2) {
      setValidation('Input field is required!')
      return false
    }
    axios
      .post(`${API_URL}/comments/upload`, {
        "comment": postComment,
        "videos_id": selectedVideo.id
      })
      .then((res) => {
        handleGetComment();
        setPostComment('')
        setValidation('')
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (!selectedVideo) {
    return <div>Loading......</div>;
  }


  return (
    <>
      <Video selectedVideo={selectedVideo} />
      <div className="video__info">
        <VideoInfo selectedVideo={selectedVideo} selectedComments={selectedComments} handlePost={handlePost} validation={validation} />
        <Item videos={filteredVideos} />
      </div>
    </>
  );
}


export default HomePage;







