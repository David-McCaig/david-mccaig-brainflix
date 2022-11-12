import { useParams } from "react-router-dom";
import videoDetails from "../../../data/video-details.json"
import { Link } from "react-router-dom";

export default function VideoDetailsPage() {
   
  const { id } = useParams(); 
    console.log(videoDetails);

    
    const videos = videoDetails.find((videos) => {
      const doesMatch = videos.id === id;
      return doesMatch; // return a boolean that says if we found the thing?
    });
  
    console.log(videos);

    <aside className="videos">
    <h3 className="videos__title">next videos</h3>

        return (
              <Link to="/" className="videos__container"></Link>
        
                {/* key={videos.id}> */}
                <div className="videos__wrapper">
                    <img className="videos__img" src={videos.image} alt="above houses"></img>
                </div>
                <div className="videos__text">
                    <h3 className="videos__subtitle">{videos.title}</h3>
                    <p className="videos__author">{videos.channel}</p>

                </div>
            
          );
</aside>
  }



