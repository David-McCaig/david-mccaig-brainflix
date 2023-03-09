import "./VideoInfo.scss";
import HeartIcon from "../../assets/Icons/likes.svg";
import ViewIcon from "../../assets/Icons/views.svg"
import AddComment from "../../assets/Icons/add_comment.svg";
import SearchFace from "../../assets/images/Mohan-muruge.jpg";
import React, {useState} from "react"
import axios from "axios";


function VideoInfo({ selectedVideo, selectedComments, handleSubmit }) {
   
    const [postComment, setPostComment] = useState("");

    const handleChange = (e) => {
        setPostComment(e.target.value)
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios
    //     .post ('http://localhost:8080/comments/upload', {
    //         "comment": postComment,
    //         "videos_id": selectedVideo.id
    //     })
    //     .then ((res) => {
    //         console.log(res)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }
    
    let dateObj = new Date(selectedVideo.created_at)
    
    //function to convert timeStamp format
    const getDate = () => {
    let month = dateObj.getMonth() + 1
    let date = dateObj.getDate()
    let year = dateObj.getFullYear()

    return(`${month}/${date}/${year}`)
   }

    return (
        <> 
        <div>
            <section className="description">
                <h1 className="description__title">{selectedVideo.title}</h1>
                <div className="description-output">
                    <div className="description-output__container">
                        <div className="description-output__author">
                            <p>{selectedVideo.channel}</p>
                        </div>
                        
                        <p className="description-output__date">{getDate(selectedVideo.created_at)}</p>
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
                    <form className="form" onSubmit={e => handleSubmit(e, postComment)}>
                        <p className="form__title">3 Comments</p>
                        <label className="form__comment" form="formComment">JOIN THE CONVERSATION</label>
                        <div className="form__container">
                            <img src={SearchFace} className="form__img" alt="Side profile of person" />
                            <input className="form__input" value={postComment} onChange={handleChange} id="formComment" placeholder="Add a new comment" name="formComment" required=""></input>

                            <button className="form__btn" id="formSubmit" type="submit">comment
                                <img src={AddComment} className="form__icon" alt="Add comment button" />
                            </button>
                        </div>
                    </form>
                    
                {selectedComments && selectedComments.map((comment) => {
                    return (
                        <div className="comments" key={comment.id}>
                            <div className="comments__body">
                                <div className="comments__container">
                                    <div className="images"></div>
                                    <p className="comments__title">{comment.name}</p>
                                    <p className="comments__date">{getDate(comment.created_at)}</p>
                                    {/* {console.log((comment.created_at))} */}
                                </div>
                                <p className="comments__copy">{comment.comment}</p>
                            </div>
                        </div>
                    );
                })}
            </section>
            </div>
        </>
    );
}

export default VideoInfo;