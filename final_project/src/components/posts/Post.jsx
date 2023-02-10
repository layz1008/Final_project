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
      <span className="votes"> Votes up: 20 </span>
      <br />
      <span className="votes"> Votes Down: 5 </span>
      <img
        src="https://www.explore.com/img/gallery/the-most-beautiful-coral-reefs-in-the-world/great-barrier-reef-australia-1667589677.jpg"
        alt="123"
      ></img>
      <p> Comments: </p>
      <p> Fish are great and cool as well. They are fun.</p>
    </div>
  );
}
