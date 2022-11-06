import "./Comments.scss";
// import SearchFace from "../../assets/images/Mohan-muruge.jpg"
import SearchFace from "../../assets/images/Mohan-muruge.jpg";
import AddComment from "../../assets/Icons/add_comment.svg";


function Comments() {
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

    <div className="comments">
        <div className="comments__body">
            <div className="comments__container">
                <div className="images"></div>
                <p className="comments__title">Michael Lyons</p>
                <p className="comments__date">08/09/2021</p>

            </div>
            <p className="comments__copy">They BLEW the ROOF off at their last
event, once everyone started figuring
out they were going. This is still simply
the greatest opening of an event I have
EVER witnessed.</p>
            
        </div>
    </div>

    <div className="comments">
        <div className="comments__body">
            <div className="comments__container">
                <div className="images"></div>
                <p className="comments__title">Michael Lyons</p>
                <p className="comments__date">08/09/2021</p>

            </div>
            <p className="comments__copy">They BLEW the ROOF off at their last
event, once everyone started figuring
out they were going. This is still simply
the greatest opening of an event I have
EVER witnessed.</p>
            
        </div>
    </div>
    </section>

            
   
    );
}

export default Comments;