import React from "react";
import "./post.css";

export default function Post({post, setModalPost, setDisplayModal}) {

  function handleClick() {
    console.log("Modal was clicked")
    setModalPost(post)
    setDisplayModal(true)
    document.body.classList.add("no-scroll")
    
  }
  function handleClose() {
    setDisplayModal(false);
    document.body.classList.remove("no-scroll");
  }



  return (
    <div onClick={handleClick} className="post-card">
      <h2>Title of the Post: </h2>
      
      <img
        src="https://www.explore.com/img/gallery/the-most-beautiful-coral-reefs-in-the-world/great-barrier-reef-australia-1667589677.jpg"
        alt="123"
      ></img>
      <div id = 'votes-div'>
        <span className="votes" id = 'upVotes'> ⬆: 20 </span>
        <br />
        <span className ='votes'id = 'totalVotes'>+15</span>
        <br />
        <span className="votes" id ='downVotes'> ⬇: 5 </span>
        <p id = 'comments-tab'> 💬 20 Comments </p>
      </div>
      
      {/* <p> Fish are great and cool as well. They are fun.</p> */}
    </div>
  );
}
