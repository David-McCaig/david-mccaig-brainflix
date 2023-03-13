import "./HomePage.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import React, { useEffect } from "react";
import Item from "../../../components/Item/Item";
import VideoInfo from "../../../components/VideoInfo/VideoInfo";
import Video from "../../../components/Video/Video";
import { useForm } from "react-hook-form";


function HomePage() {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState([]);
  const [selectedComments, setSelectedComments] = useState([]);


  const defaultVideoId = videos.length > 0 ? videos[0].id : null;

  const URL = "http://localhost:8080";
  // const API = "?api_key=18488576-2451-45b9-a5fd-965ff3e2a3ac";

  const { videoId } = useParams();

  const videoToDisplay = videoId || defaultVideoId;

  const filteredVideos = videos.filter((video) => video.id !== videoToDisplay);

  //TODO: Make state variable telling me I have a video.


  // const [allowCommentQuery, setAllowCommentQuery] = useState(true);
  // const [haveVideo, setHaveVideo] = useState(false);


  const URLID = "http://localhost:8080";


  //TODO: seperate query with comments and videos. 
  // const handleGetComment = useCallback(() => {
  function handlePost( e, postComment, setPostComment) {
    e.preventDefault();

    axios
      .post('http://localhost:8080/comments/upload', {
        "comment": postComment,
        "videos_id": selectedVideo.id
      })
      .then((res) => {
        console.log(res);
        handleGetComment();
        setPostComment('')
      })
      .catch((error) => {
        console.log(error);
      });
  }



  useEffect(() => {
    axios
    .get(URL + "/videos")
    .then((response) => {
      setVideos(response.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  function handleGetComment() {
    axios
      .get(URLID + "/videos/" + videoToDisplay + "/comments")
      .then((response) => {
        setSelectedComments(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (!selectedVideo) return
    axios
      .get(URLID + "/videos/" + videoToDisplay)
      .then((response) => {
        setSelectedVideo(response.data);
        handleGetComment();
      })
      .catch((err) => {
        console.log(err)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoToDisplay])

  //TODO:Make an effect hook that watches for the I have a video variable. once that is true calls handlegetcomments.Want to start an interval with the get comment hook.

  if (!selectedVideo) {
    return <div>Loading......</div>;
  }


  return (
    <>
      <Video selectedVideo={selectedVideo} />
      <div className="video__info">
        <VideoInfo selectedVideo={selectedVideo} selectedComments={selectedComments} handlePost={handlePost} />
        <Item videos={filteredVideos} />
      </div>
    </>
  );
}


export default HomePage;







