function PostModal(props) {
    const { displayModal, setDisplayModal } = props;
    const body = document.querySelector("body");

    const handleClose = () => {
        setDisplayModal(false);
        body.classList.remove('freeze-body');
    };

    if (displayModal) {
        body.classList.add('freeze-body');
    }

    return(
        <div className={props.displayModal? "post-modal" : 'hide-element'}>
            <div className="close-btn-container">
                <h1>Hello, we are a modal</h1>
                <div className="modal-title">{}</div>
                <div className="comments"> {}</div>
                <div className="votes"> {}</div>
                <div className="subreddit-name"> {}</div>
                <svg className="close-post-modal" onClick= {handleClose}>
                    <line x1='6' y1='30' x2='20' y2='10' stroke='#ffffff' strokeWidth='3' />
                    <line x1='6' y1='10' x2='20' y2='30' stroke='#ffffff' strokeWidth='3' />
                </svg>
            </div>
 
        </div>
    )
}

export default PostModal
