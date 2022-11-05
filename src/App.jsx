import React, { useSate } from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Description from "./components/Description/Description";
import VideoList from "./components/VideoList/VideoList";
import './App.scss';
import videos from "./data/videos.json";
import video from "./data/video-details.json"
// import MainVideo from "./data/video-details.json";



function App() {

  return(
    <>
    <NavBar />
    <Header />
    <Description />
    <VideoList  />
    </>
  );
}

export default App;
