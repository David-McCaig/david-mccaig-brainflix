/* eslint-disable jsx-a11y/alt-text */
import "./UploadPage.scss";
import { NavLink, useNavigate } from "react-router-dom";
import ButtonPublish from "../../assets/Icons/publish.svg"
import { useState, useRef } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function UploadPage() {

  const navigate = useNavigate();

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState();
  const [validationTitle, setValidationTitle] = useState('');
  const [validationDescription, setValidationDescription] = useState('');
  const inputEl = useRef(null);


  const [values, setValues] = useState({
    image: "",
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setImageFile(event.target.files[0])
    setImagePreview(URL.createObjectURL(event.target.files[0]));//set preview
  }

  function validation(state, setState) {
    if (state.length < 2) {
      setState('Input field is required!')
      return false;
    }
  }

  const uploadVideo = (event) => {
    event.preventDefault();
    validation(values.title, setValidationTitle);
    validation(values.description, setValidationDescription);

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("imageFile", imageFile);
    axios
      .post(`${API_URL}/videos/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      })
      .then(function () {
        navigate("/uploadSuccess")
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="upload">
      <h1 className="upload__title">upload video</h1>
      <p className="upload__subtitle">video thumbnail</p>

      <div className="upload__container">


        <form onSubmit={uploadVideo} id="Uploading" className="upload-form">
          <div className="upload-form__cont">
            <img src={imagePreview} width="100%" className="upload__image" ></img>
            <div className="upload-form__space"></div>
            <div className="upload-form__conttwo">
              <input type='file' className="upload__image" name="image" ref={inputEl} onChange={handleFileChange} ></input>
              <div className="upload-form__container">
                <label className="upload-form__comment" form="formComment">title your video</label>
                <input id="formtitle" value={values.title} name="title" onChange={handleChange} className="upload-form__input" placeholder="Add a new comment" required=""></input>
                <p className="upload-form__validation">{validationTitle}</p>
              </div>
              <div>
                <label className="upload-form__comment" form="formComment">add a video description</label>
                <div className="upload-form__container">
                  <textarea className="upload-form__input-bottom" id="formdescription" value={values.description} name="description" onChange={handleChange} placeholder="Add a description to your video" ></textarea>
                  <p className="upload-form__validation">{validationDescription}</p>
                </div>
              </div>
            </div>
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