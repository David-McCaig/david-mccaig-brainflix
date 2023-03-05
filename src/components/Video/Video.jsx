import "./Video.scss"

function Video({ selectedVideo }) {

    return (
        <>
             <figure className="video">
                <div className="video__container">
                    <video poster={selectedVideo.image} className="video__content" controls>
                    </video>
                </div>
             </figure>
            </>
    )
}

export default Video;