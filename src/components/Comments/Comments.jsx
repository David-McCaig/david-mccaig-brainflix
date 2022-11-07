import "./Comments.scss";
// import SearchFace from "../../assets/images/Mohan-muruge.jpg"
import SearchFace from "../../assets/images/Mohan-muruge.jpg";
import AddComment from "../../assets/Icons/add_comment.svg";
import { format } from 'date-fns';

function Comments(props) { 
    console.log(props)
    return ( 
        <section>
            <div className="test">
                <form className="form">
                    <p className="form__title">3 Comments</p>
                    <label className="form__comment" form="formComment">JOIN THE CONVERSATION</label>
                    <div className="form__container">
                        <img src={SearchFace} className="form__img" alt="Side profile of person" />
                        <textarea className="form__input comment-input" id="formComment" placeholder="Add a new comment" name="formComment" required=""></textarea>
                        <button className="form__btn btn" id="formSubmit" type="submit">comment</button>
                    </div>
                </form>

            </div>
            {props.selectedVideo.comments !==undefined && props.selectedVideo.comments.map((comment) => {
                return (
                    <div className="comments" key={comment.id}> 
                        <div className="comments__body">
                            <div className="comments__container">
                                <div className="images"></div>
                                <p className="comments__title">{comment.name}</p>
                                <p className="comments__date">{format(new Date(comment.timestamp),'MM/dd/yyyy')}</p>

                            </div>
                            <p className="comments__copy">{comment.comment}</p>

                        </div>
                    </div>
        );
     })} 
    </section>



    );
}

export default Comments;