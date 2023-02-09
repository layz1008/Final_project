function PostModal(props) {
    return(
        <div className={props.displayModal? "postModal" : 'hideElement'}>
            <div className="closeBtnContainer">
                <h1>Hello, we are a modal</h1>
                <div className="modalTitle">{}</div>
                <div clasName="commnets"> {}</div>
                <div className="votes"> {}</div>
                <div className="subreddit name"> {}</div>
                <svg className="closepostModal" onClick={() => props.setDisplayModal(false)}>
                <line x1='0' y1='12' x2='25' y2='12' stroke='rgb(100, 70, 0)' stroke-width='3' />
                </svg>
            </div>
 
        </div>
    )
}

export default PostModal