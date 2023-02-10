function PostModal({modalPost, displayModal, setDisplayModal, comments}) {
    return(
        <div className={displayModal? "postModal" : 'hideElement'}>
            <div className="closeBtnContainer">
                <div className="modalTitle">{modalPost.title}</div>
                {/* <img src={modalPost.img_url} /> */}
                <div className="texts">{modalPost.text}</div>
                <div className="sub-count"> {modalPost.sub}</div>
                <div className="votes"> {modalPost.up_votes}</div>
                <div className="votes2"> {modalPost.down_votes}</div>
                <div className="comments">
                    {comments.filter(comment => comment.post == modalPost.id).map(comment => (
                        <p key={comment.id}>{comment.comment}</p>
                    ))}
                </div>
                <svg className="closepostModal" onClick={() => setDisplayModal(false)}>
                <line x1='10' y1='12' x2='25' y2='12' stroke='#ffffff' strokeWidth='3' />
                </svg>
            </div>
 
        </div>
    )
}

export default PostModal