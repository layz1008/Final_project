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
        <div className={props.displayModal? "postModal" : 'hideElement'}>
            <div className="closeBtnContainer">
                <h1>Hello, we are a modal</h1>
                <div className="modalTitle">{}</div>
                <div className="comments"> {}</div>
                <div className="votes"> {}</div>
                <div className="subreddit name"> {}</div>
                <svg className="closePostModal" onClick= {handleClose}>
                <line x1='10' y1='12' x2='25' y2='12' stroke='#ffffff' strokeWidth='3' />
                </svg>
            </div>
 
        </div>
    )
}

export default PostModal
