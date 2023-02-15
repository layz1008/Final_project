import { useEffect, useRef, useState } from "react";
import "./post.css";

function PostModal({modalPost, displayModal, setDisplayModal, comments}) {
    const body = document.querySelector("body");
    const [upVotes, setUpVotes] = useState(modalPost.up_votes);
    const [downVotes, setDownVotes] = useState(modalPost.down_votes);

    const handleUpVote = () => {
        setUpVotes(upVotes + 1);
    };

    const handleDownVote = () => {
        setDownVotes(downVotes + 1);
    };

    const handleClose = () => {
        setDisplayModal(false);
        body.classList.remove('freeze-body');
    };

    if (displayModal) {
        body.classList.add('freeze-body');
    }

    return (
        <div className={displayModal ? "post-modal" : 'hide-element'}>
            <div className="close-btn-container">
                <div className="modal-title">{modalPost.title}</div>
                <img className='modal-image' src={modalPost.img_url} />
                <div className="texts">
                <div dangerouslySetInnerHTML={{ __html: modalPost.text }} /></div>
                <div className="sub-count"> {modalPost.sub}</div>
                <div className="votes-container">
                <div className="votes"> {upVotes}</div>
                    <button className="upvote-button" onClick={handleUpVote}>Up Vote</button>
                    <div className="votes2"> {downVotes}</div>
                    <button className="downvote-button" onClick={handleDownVote}>Down Vote</button>
                </div>
                <div className="comments">
                    {comments.filter(comment => comment.post == modalPost.id).map(comment => (
                        <p key={comment.id}>{comment.comment}</p>
                    ))}
                </div>
                <svg className="close-post-modal" onClick={handleClose}>
                    <line x1='6' y1='30' x2='20' y2='10' stroke='#ffffff' strokeWidth='3' />
                    <line x1='6' y1='10' x2='20' y2='30' stroke='#ffffff' strokeWidth='3' />
                </svg>
            </div>
        </div>
    )
}

export default PostModal;

