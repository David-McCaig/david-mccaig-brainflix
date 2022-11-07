import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Description from "./components/Description/Description";
import VideoList from "./components/VideoList/VideoList";
import Comments from "./components/Comments/Comments";
import './App.scss';
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json"

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
      <Header selectedVideo={selectedVideo} />
      <div className="video__list">
        <div className="description__container">
          <Description {...{ selectedVideo }} />
          <Comments {...{ selectedVideo }} />
        </div>
        <VideoList
          videos={nonSelectedVideos}
          handleVideoChange={handleVideoChange}
        />
      </div>
    </>
  );
}

export default App;
