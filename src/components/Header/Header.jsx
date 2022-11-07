import "./Header.scss";
// import MainVideo from "../../../src/data/video-details.json";
// import Video from "../../assets/images/BMX.jpeg";

function Header({selectedVideo}) {
    return (
        <figure className="video">
            <div className="video__container">
            <video poster={selectedVideo.image} className="video__content" controls>
              
                </video>
               
              
            </div>
        </figure>
        
    );
}

export default Header;