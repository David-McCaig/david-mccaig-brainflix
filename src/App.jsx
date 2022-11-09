import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
// import Header from "./pages/HomePage/Header/Header";
// import Description from "./pages/HomePage/Description/Description";
import VideoList from "./pages/HomePage/VideoList/VideoList";
// import Comments from "./pages/HomePage/Comments/Comments";
import './App.scss';
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import UploadPage from "./pages/HomePage/UploadPage/UploadPage";
import HomePage from "./pages/HomePage/HomePage/HomePage";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [selectedVideo, setSelectedVideos] = useState(videoDetails[0]);

  const handleVideoChange = (videoId) => {
    const newSelectedVideo = videoDetails.find((videos) => videoId === videos.id);
    setSelectedVideos(newSelectedVideo);
  }

  const nonSelectedVideos = videos.filter((video) => {
    return video.id !== selectedVideo.id;
  });

  return (
    <>
      <NavBar />
      <BrowserRouter>
      <Routes>
      {/* <div className="video__list">
        <div className="description__container"> */}
        <HomePage selectedVideo={selectedVideo} />
        {/* </div> */}
        {/* <VideoList
          videos={nonSelectedVideos}
          handleVideoChange={handleVideoChange}
        /> */}
      {/* </div> */}
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
