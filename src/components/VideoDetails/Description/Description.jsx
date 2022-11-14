import HeartIcon from "../../../assets/Icons/likes.svg";
import ViewIcon from "../../../assets/Icons/views.svg"
import VideoDetails from "../VideoDetails";

function Description({selectedVideo}) {
   
    return (
  <>


<section className="description">

<h1 className="description__title">{selectedVideo.title}</h1>
<div className="description-output">
    <div className="description-output__container">
        <div className="description-output__author">
            <p>{selectedVideo.channel}</p>
        </div>
        {/* <p className="description-output__date">{format(new Date(selectedVideo.timestamp), 'MM/dd/yyyy')}</p> */}
    </div>

    <div className="description-output__container">
        <div className="description-output__views">
            <img className="description-output__icon" alt="Views icon" src={ViewIcon}></img>
            <p>{selectedVideo.views}</p>
        </div>
        <div className="description-output__likes">
            <img className="description-output__icon" alt="Views icon" src={HeartIcon}></img>
            <p>{selectedVideo.likes}</p>
        </div>
    </div>
</div>
<div className="summary">
    <p className="summary__text">
        {selectedVideo.description}
    </p>

</div>

</section>
  </>
      
    );
  }

  export default Description;