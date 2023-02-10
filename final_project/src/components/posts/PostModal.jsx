function PostModal(props) {
    const { displayModal, setDisplayModal } = props;
    const body = document.querySelector('body');
  
    const handleClose = () => {
      setDisplayModal(false);
      body.classList.remove('freeze-body');
    };
  
    if (displayModal) {
      body.classList.add('freeze-body');
    }
  
    return (
      <div className={displayModal ? 'postModal' : 'hideElement'}>
        <div className="closeBtnContainer">
          <h1 className="modalTitle">Hello, we are a modal</h1>
          <div className="comments">{props.comments}</div>
          <div className="votes">{props.votes}</div>
          <div className="subredditName">{props.subredditName}</div>
          <svg
            className="closePostModal"
            onClick={handleClose}
          >
            <line
              x1="0"
              y1="12"
              x2="25"
              y2="12"
              stroke="rgb(100, 70, 0)"
              stroke-width="3"
            />
          </svg>
        </div>
      </div>
    );
  }
  
  export default PostModal;
  