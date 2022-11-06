import "./videoList.scss";
import image from "../../assets/images/above.jpeg"

function VideoList() {
    
    return (
        <>
    <aside className="videos">
        <h3 className="videos__title">next videos</h3>
        
        <div className="videos__container">
            <img className="videos__img" src={image} alt="above houses"></img>
            <div className="videos__text">
                <h3 className="videos__subtitle">Become A Travel Pro In One
Easy Lesson</h3>
                <p className="videos__author">Todd Welch</p>
            </div>
        </div>

        <div className="videos__container">
            <img className="videos__img" src={image} alt="above houses"></img>
            <div className="videos__text">
                <h3 className="videos__subtitle">Become A Travel Pro In One
Easy Lesson</h3>
                <p className="videos__author">Todd Welch</p>
            </div>
        </div>
    </aside>

    </>
    );
}

export default VideoList;