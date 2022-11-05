import "./Description.scss";
import ViewIcon from "../../assets/Icons/views.svg"
import HeartIcon from "../../assets/Icons/likes.svg"

function Description() {
    return (
        <section className="description">
            <h1 className="description__title">BMX Rampage: 2021 HighLights</h1>
            <div className="description-output">
                <div className="description-output__container">
                    <div className="description-output__author">
                        <p>By Red Crow</p>
                    </div>
                    <p className="description-output__date">07/11/2021</p>
                </div>
                   
                <div className="description-output__container">
                    <div className="description-output__views">
                        <img className="description-output__icon" alt="Views icon" src={ViewIcon}></img>
                        <p>1,001,023</p>
                    </div>
                    <div className="description-output__likes">
                        <img className="description-output__icon" alt="Views icon" src={HeartIcon}></img>
                        <p>110,985</p>
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