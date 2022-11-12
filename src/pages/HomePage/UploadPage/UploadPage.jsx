import "./UploadPage.scss";
import UploadPreview from "../../../assets/images/Upload-video-preview.jpg"
import ButtonNav from "../../../components/Button/ButtonNav";
import { NavLink } from "react-router-dom";
import ButtonPublish from "../../../assets/Icons/publish.svg"

function UploadPage() {
  return (
    <main className="upload">
      <h1 className="upload__title">upload video</h1>
      <p className="upload__subtitle">video thumbnail</p>
      <div className="upload__container">
        <img src={UploadPreview} className="upload__image" alt="Point of view riding bike"></img>
        <form className="upload-form">
          <label className="upload-form__comment" form="formComment">title your video</label>
          <div className="upload-form__container">
            <input  id="formComment" className="upload-form__input" placeholder="Add a new comment" name="formComment" required=""></input>
          </div>
          <label className="upload-form__comment" form="formComment">add a video description</label>
          <div className="upload-form__container">
            <textarea className="upload-form__input-bottom" id="formComment"  placeholder="Add a description to your video" name="formComment" ></textarea>
          </div>
        </form>
      </div>
      <NavLink to="/">
                <div className="button">
                    <img src={ButtonPublish}  className="button__icon" alt="upload icon"></img>
                    <div className="button__text" href="./NavBar.jsx">publish</div>
                </div>
            </NavLink>
    </main>
    
    
  );
}

export default UploadPage;