import "./UploadPage.scss";
import UploadPreview from "../../../assets/images/Upload-video-preview.jpg"
import { NavLink } from "react-router-dom";
import ButtonPublish from "../../../assets/Icons/publish.svg"
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiURL = "http://localhost:6060";

 function UploadPage() {

  const uploadVideo = (event) => {
    event.preventDefault();
    const newVideo = {
      title: event.target.title.value,
      image: `${apiURL}/images/bike.jpg`,
      description: event.target.description.value,
    };
    axios
      .post("http://localhost:6060/videos", newVideo)
      .then(() => console.log("Video posted"))
      .catch((err) => {
        console.log(err);
      });
      function Redirect() {
        let navigate = useNavigate();
        function onSubmit() {
          navigate('/');
         
    // alert("Video uploaded");
        }
    } 
  };

  return (
    <main className="upload">
      <h1 className="upload__title">upload video</h1>
      <p className="upload__subtitle">video thumbnail</p>
      <div className="upload__container">
        
        <img src={UploadPreview} className="upload__image" alt="Point of view riding bike"></img>
        <form onSubmit={uploadVideo} id="Uploading" className="upload-form">
          <label className="upload-form__comment" form="formComment">title your video</label>
          <div className="upload-form__container">
            <input id="formComment" className="upload-form__input" placeholder="Add a new comment" name="title" required=""></input>
          </div>
          <label className="upload-form__comment" form="formComment">add a video description</label>
          <div className="upload-form__container">
            <textarea className="upload-form__input-bottom" id="formComment" placeholder="Add a description to your video" name="description" ></textarea>
          </div>
          
          <div className="bottom-links">
            
              <button form="Uploading" type="submit" className="button-publish" >
                <img src={ButtonPublish} className="button-publish__icon" alt="upload icon"></img>
                <div className="button-publish__text">publish</div>
              </button>

            <NavLink to="/" style={{ textDecoration: "none" }}>
              <div className="button-cancel" >
                <div className="button-cancel__text" href="./NavBar.jsx">cancel</div>
              </div>
            </NavLink>
          </div>
        </form>
      </div>


    </main>
  );
}

export default UploadPage;