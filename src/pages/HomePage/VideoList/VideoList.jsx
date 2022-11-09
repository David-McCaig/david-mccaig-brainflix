import "./videoList.scss";
// import image from "../../assets/images/above.jpeg"

function VideoList({ videos, handleVideoChange }) {

    return (

        <aside className="videos">
            <h3 className="videos__title">next videos</h3>
            {videos.map((videos) => {
                return (
                    <div className="videos__container"
                        onClick={() => {
                            handleVideoChange(videos.id);
                        }}
                        key={videos.id}>
                        <div className="videos__wrapper">
                            <img className="videos__img" src={videos.image} alt="above houses"></img>
                        </div>
                        <div className="videos__text">
                            <h3 className="videos__subtitle">{videos.title}</h3>
                            <p className="videos__author">{videos.channel}</p>

                        </div>
                    </div>
                );
            })}
        </aside>

    );
}

export default VideoList;