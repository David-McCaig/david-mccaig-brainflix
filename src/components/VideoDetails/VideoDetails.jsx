import React, { useEffect, useState } from "react";
import axios from "axios";
import "./VideoDetails.scss";
import HeartIcon from "../../assets/Icons/likes.svg";
import ViewIcon from "../../assets/Icons/views.svg"
import AddComment from "../../assets/Icons/add_comment.svg";
import SearchFace from "../../assets/images/Mohan-muruge.jpg";
import { format } from 'date-fns';


function VideoDetails({ videoId }  ) {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const URL = "https://project-2-api.herokuapp.com";
    const API = "?api_key=18488576-2451-45b9-a5fd-965ff3e2a3ac";

    useEffect(() => {
        if (!videoId) return;

        axios
            .get(URL + "/videos/" + videoId + API)
            .then((response) => {
                setSelectedVideo(response.data);
               
            })

            .catch((error) => {
                console.log(error);
            });
    }, [videoId]);

    if (!selectedVideo) {
        return <div>Loading......</div>;
    }

    return (
<>

<figure className="video">
            <div className="video__container">
                <video poster={selectedVideo.image} className="video__content" controls>
                </video>
            </div>
        </figure>

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
        {selectedVideo.description}
    </p>

</div>

</section>

<section>
                <div className="test">
                    <form className="form">
                        <p className="form__title">3 Comments</p>
                        <label className="form__comment" form="formComment">JOIN THE CONVERSATION</label>
                        <div className="form__container">
                            <img src={SearchFace} className="form__img" alt="Side profile of person" />
                            <textarea className="form__input" id="formComment" placeholder="Add a new comment" name="formComment" required=""></textarea>

                            <button className="form__btn" id="formSubmit" type="submit">comment
                                <img src={AddComment} className="form__icon" alt="Add comment button" />
                            </button>
                        </div>
                    </form>

                </div>
                {selectedVideo.comments !== undefined && selectedVideo.comments.map((comment) => {
                    return (
                        <div className="comments" key={comment.id}>
                            <div className="comments__body">
                                <div className="comments__container">
                                    <div className="images"></div>
                                    <p className="comments__title">{comment.name}</p>
                                    <p className="comments__date">{format(new Date(comment.timestamp), 'MM/dd/yyyy')}</p>
                                </div>
                                <p className="comments__copy">{comment.comment}</p>
                            </div>
                        </div>
                    );
                })}
            </section>

               

</>
    );
}

export default VideoDetails;