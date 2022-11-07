import "./Description.scss";
import ViewIcon from "../../assets/Icons/views.svg"
import HeartIcon from "../../assets/Icons/likes.svg"
import { format } from 'date-fns';

function Description({selectedVideo}) {
    return (
        <section className="description">
            
            <h1 className="description__title">{selectedVideo.title}</h1>
            <div className="description-output">
                <div className="description-output__container">
                    <div className="description-output__author">
                        <p>{selectedVideo.channel}</p>
                    </div>
                    <p className="description-output__date">{format(new Date(selectedVideo.timestamp), 'MM/dd/yyyy')}</p>
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
                    On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible
                    on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature
                    only allowed for one full run before the conditions made it impossible to ride, that was all that was needed
                    for event veteran veteran
                    Kyle Strait, who won the event for the second
                    time -- eight years after his first Red Cow
                    Rampage title
                </p>

            </div>


        </section>
    );
}

export default Description;